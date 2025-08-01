import emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { bookingData } = req.body;

    if (!bookingData?.email) {
      return res.status(400).json({ error: 'Missing email in bookingData' });
    }

    console.log("✅ bookingData received:", bookingData);

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { ...bookingData, to_email: bookingData.email },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { ...bookingData, to_email: 'theneighbourhooddetailers@gmail.com' },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('❌ EmailJS error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}