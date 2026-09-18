import { buildSystemPrompt } from './portfolioData.js';

const systemPrompt = buildSystemPrompt();

export async function POST(req) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey || apiKey === 'your_api_key_here') {
      return new Response(
        JSON.stringify({ error: 'API key not configured. Add GOOGLE_GENERATIVE_AI_API_KEY to .env.local and restart the server.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { messages } = await req.json();

    // Build conversation history for the Gemini API
    const contents = messages.map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    // Call Google Generative Language API with SSE streaming
    const primaryModel = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
    let googleRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${primaryModel}:streamGenerateContent?alt=sse&key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }],
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    // Fallback if primary model fails
    if (!googleRes.ok && primaryModel !== 'gemini-flash-latest') {
      googleRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:streamGenerateContent?alt=sse&key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: systemPrompt }],
            },
            contents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1024,
            },
          }),
        }
      );
    }

    if (!googleRes.ok) {
      const errText = await googleRes.text();
      console.error('Google API error:', errText);
      throw new Error(`Google API error ${googleRes.status}: ${errText}`);
    }

    // Pipe the SSE stream, extracting text from each event
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        const reader = googleRes.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop(); // keep incomplete last line in buffer

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const jsonStr = line.slice(6).trim();
                if (jsonStr === '[DONE]') continue;
                try {
                  const parsed = JSON.parse(jsonStr);
                  const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
                  if (text) {
                    controller.enqueue(encoder.encode(text));
                  }
                } catch {
                  // skip malformed JSON lines
                }
              }
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error('Chat route error:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'An error occurred. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
