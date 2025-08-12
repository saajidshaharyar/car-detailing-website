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

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SENDER,     // Your Gmail address
        pass: process.env.EMAIL_APP_PASS,   // Gmail App Password
      },
    });

    // Email template (replicating EmailJS)
    const htmlTemplate = (recipientName) => `
      <p>Hi ${recipientName},</p>
      <p>Thank you for booking with Neighbourhood Detailer!</p>

      <p>📛 Name: ${bookingData.firstName} ${bookingData.lastName || ""}</p>
      <p>📅 Booking Date: ${bookingData.bookingDate}</p>
      <p>🕒 Booking Time: ${bookingData.bookingTime}</p>
      <p>📦 Package: ${bookingData.service}</p>
      <p>📧 Email: ${bookingData.email}</p>
      <p>📞 Phone: ${bookingData.phone}</p>
      <p>📝 Details: ${bookingData.message}</p>

      <p>We’ll be in touch shortly to confirm or follow up.</p>
      <p>– The Neighbourhood Detailer Team</p>
    `;

    // 1️⃣ Email to Client
    await transporter.sendMail({
      from: `"Neighbourhood Detailer" <${process.env.EMAIL_SENDER}>`,
      to: bookingData.email,
      subject: 'Your Car Detailing Appointment Confirmation',
      html: htmlTemplate(bookingData.firstName || "Valued Customer"),
    });

    // 2️⃣ Email to Business
    await transporter.sendMail({
      from: `"Neighbourhood Detailer" <${process.env.EMAIL_SENDER}>`,
      to: 'theneighbourhooddetailers@gmail.com',
      subject: '📥 New Booking Received',
      html: htmlTemplate("Neighbourhood Detailer Team"),
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('❌ Nodemailer error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}