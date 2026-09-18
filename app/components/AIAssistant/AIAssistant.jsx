'use client';

import { useState, useRef, useEffect } from 'react';
import './AIAssistant.css';

// Inline SVG Icons
const IconBotSm = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
  </svg>
);
const IconBotMd = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
  </svg>
);
const IconBotLg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
  </svg>
);
const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>
  </svg>
);
const IconX = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconChat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconSend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage = { id: Date.now().toString(), role: 'user', content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Server error: ${response.status}`);
      }

      // Stream the plain text response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botContent = '';
      const botId = (Date.now() + 1).toString();

      // Add empty bot message first
      setMessages((prev) => [...prev, { id: botId, role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        botContent += chunk;

        // Update the bot message content in real-time
        setMessages((prev) =>
          prev.map((m) => (m.id === botId ? { ...m, content: botContent } : m))
        );
      }
    } catch (err) {
      console.error('Chat error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      sendMessage(e);
    }
  };

  return (
    <div className="ai-assistant-container">
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div className="ai-header-title">
              <span className="ai-icon"><IconBotMd /></span>
              <span>Portfolio Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="ai-close-btn" aria-label="Close Chat">
              <IconX size={20} />
            </button>
          </div>

          <div className="ai-chat-messages">
            {messages.length === 0 ? (
              <div className="ai-welcome-message">
                <IconBotLg />
                <p>Hi! I&apos;m Praveen&apos;s AI Assistant. Ask me anything about his projects, skills, or experience!</p>
              </div>
            ) : (
              messages.map((m) => (
                <div key={m.id} className={`ai-message-wrapper ${m.role === 'user' ? 'user' : 'bot'}`}>
                  <div className="ai-message-avatar">
                    {m.role === 'user' ? <IconUser /> : <IconBotSm />}
                  </div>
                  <div className={`ai-message ${m.role === 'user' ? 'user' : 'bot'}`}>
                    {m.content}
                  </div>
                </div>
              ))
            )}

            {isLoading && (
              <div className="ai-message-wrapper bot">
                <div className="ai-message-avatar"><IconBotSm /></div>
                <div className="ai-message bot typing-indicator">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}

            {error && (
              <div className="ai-error-message">
                ⚠️ {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="ai-chat-input-form">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me something..."
              className="ai-chat-input"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="ai-send-btn"
              aria-label="Send message"
            >
              <IconSend />
            </button>
          </form>
        </div>
      )}

      <div className="ai-floating-wrapper">
        {!isOpen && (
          <button 
            className="ai-floating-label" 
            onClick={() => setIsOpen(true)}
            aria-label="Ask AI Assistant"
          >
            <span className="ai-label-dot"></span>
            <span>Chat with AI</span>
          </button>
        )}

        <button
          className={`ai-floating-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Assistant"
        >
          {isOpen ? <IconX size={24} /> : <IconBotLg />}
        </button>
      </div>
    </div>
  );
}
