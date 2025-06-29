// This is a Vercel-compatible API route using ESM and secure EmailJS server-side integration

import emailjs from '@emailjs/nodejs';

// Must use default export for Vercel to recognize this as an API handler
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { bookingData } = await req.json();

    // Email to customer
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { ...bookingData, to_email: bookingData.email },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    );

    // Email to business
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { ...bookingData, to_email: 'prestigeonwheelz@gmail.com' },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Email sending failed:', error);
    return new Response(JSON.stringify({ error: error.message || 'Email failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}