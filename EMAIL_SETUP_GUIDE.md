# Email Setup Guide for Contact Form

## Step 1: Install EmailJS

Run this command in your terminal:

```bash
npm install @emailjs/browser
```

## Step 2: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 3: Setup Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Click "Connect Account"
   - Sign in with your Gmail (kalansooriya615@gmail.com)
   - Allow EmailJS access
5. Note your **Service ID** (e.g., `service_abc123`)

## Step 4: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Template variables to use:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content

5. Note your **Template ID** (e.g., `template_xyz789`)

## Step 5: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `your_public_key_here`)

## Step 6: Update Your Contact Form

Open `contact.jsx` and replace these values inside the `handleSubmit` function:

```javascript
const serviceId = 'service_abc123';      // Your Service ID
const templateId = 'template_xyz789';     // Your Template ID
const publicKey = 'your_public_key_here'; // Your Public Key
```

## Step 7: Test Your Form

1. Save your changes
2. Run your development server: `npm run dev`
3. Go to the contact section
4. Fill out and submit the form
5. Check your email inbox (kalansooriya615@gmail.com)

## Free Tier Limits

EmailJS free plan includes:
- 200 emails per month
- No credit card required
- Perfect for portfolio websites

## Troubleshooting

**Email not received?**
- Check EmailJS dashboard → **Logs** to see if email was sent
- Check your spam folder
- Verify all IDs are correct
- Make sure your Gmail account is connected

**"Failed to send" error?**
- Check browser console for detailed error
- Verify your Public Key is correct
- Ensure email service is connected properly

## Alternative: Formspree (Even Easier)

If you want an even simpler solution:

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for free
3. Create a new form
4. Get your form endpoint URL
5. Update the form action:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

Need help? Check EmailJS documentation: https://www.emailjs.com/docs/
