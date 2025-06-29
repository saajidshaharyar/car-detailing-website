import emailjs from '@emailjs/nodejs';

export async function POST(request: Request): Promise<Response> {
  try {
    const { bookingData } = await request.json();

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { ...bookingData, to_email: bookingData.email },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    );

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