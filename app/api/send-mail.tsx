import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, tel } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `${process.env.EMAIL}`,
    subject: `New mail from ${name}`,
    text: `${name} left their phone number: ${tel}`,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error');
    } else {
      console.log('mail send');
      res.status(200).send('Success');
    }
  });
};
