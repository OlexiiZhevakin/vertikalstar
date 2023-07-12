// pages/api/send-mail.js
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, tel } = req.body;
    const to = 'loditka@gmail.com';
    const subject = 'Новая заявка с сайта';
    const message = `Имя: ${name}\nТелефон: ${tel}`;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'loditka@gmail.com',
        pass: 'Bibiimorozhenko1988',
      },
    });

    await transporter.sendMail({
      from: '"Webmaster" <webmaster@example.com>',
      to,
      subject,
      text: message,
    });

    res.status(200).json({ status: 'success' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
