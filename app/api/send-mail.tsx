import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, tel } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'mail.adm.tools',
    port: 465,
    secure: true,
    auth: {
      user: 'test@vertikalstar.com',
      pass: 'Qaztgb1488',
    },
  });

  const mailOption = {
    from: `test@vertikalstar.com`,
    to: `test@vertikalstar.com`,
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
