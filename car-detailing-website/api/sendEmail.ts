import emailjs from '@emailjs/nodejs';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end('Method Not Allowed');
    return;
  }

  const { bookingData } = req.body;

  try {
    // Send to customer
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { ...bookingData, to_email: bookingData.email },
      { publicKey: process.env.EMAILJS_PUBLIC_KEY!, privateKey: process.env.EMAILJS_PRIVATE_KEY! }
    );

    // Send to business
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { ...bookingData, to_email: 'prestigeonwheelz@gmail.com' },
      { publicKey: process.env.EMAILJS_PUBLIC_KEY!, privateKey: process.env.EMAILJS_PRIVATE_KEY! }
    );

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true }));
  } catch (err) {
    console.error('Email sending failed:', err);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Email failed to send' }));
  }
}