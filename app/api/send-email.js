// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message } = JSON.parse(req.body);

    // Configure nodemailer with your email credentials
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail user
        pass: process.env.GMAIL_PASSWORD, // Your Gmail password
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'your-email@example.com', // Your email address
        subject: 'New Contact Form Submission',
        text: message,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Email sending failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
