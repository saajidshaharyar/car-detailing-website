import nodemailer from 'nodemailer';

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

    // Step 1: Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SENDER,     // your Gmail address
        pass: process.env.EMAIL_APP_PASS,   // Gmail App Password (not your actual password)
      },
    });

    // Step 2: Email to Client
    await transporter.sendMail({
      from: `"Neighbourhood Detailer" <${process.env.EMAIL_SENDER}>`,
      to: bookingData.email,
      subject: 'Your Car Detailing Appointment Confirmation',
      html: `
        <h2>Thank you for booking!</h2>
        <p>We've received your request:</p>
        <ul>
          <li><strong>Name:</strong> ${bookingData.name}</li>
          <li><strong>Email:</strong> ${bookingData.email}</li>
          <li><strong>Date:</strong> ${bookingData.date}</li>
          <li><strong>Time:</strong> ${bookingData.time}</li>
        </ul>
        <p>We’ll be in touch shortly!</p>
      `,
    });

    // Step 3: Email to Yourself (Business)
    await transporter.sendMail({
      from: `"Neighbourhood Detailer" <${process.env.EMAIL_SENDER}>`,
      to: 'theneighbourhooddetailers@gmail.com',
      subject: '📥 New Booking Received',
      html: `
        <h2>New Booking Alert</h2>
        <ul>
          <li><strong>Name:</strong> ${bookingData.name}</li>
          <li><strong>Email:</strong> ${bookingData.email}</li>
          <li><strong>Date:</strong> ${bookingData.date}</li>
          <li><strong>Time:</strong> ${bookingData.time}</li>
        </ul>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('❌ Nodemailer error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}