import nodeMailer from 'nodemailer';

import {
  SMTP_HOST,
  SMTP_PASSWORD,
  SMTP_PORT,
  SMTP_SERVICE,
  SMTP_USER
} from '../config/serverConfig.js';

// console.log(SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_SERVICE, SMTP_USER);

export const sendEmail = async ({ email, subject, message }) => {
  try {
    const transporter = nodeMailer.createTransport({
      host: SMTP_HOST,
      service: SMTP_SERVICE,
      port: SMTP_PORT,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD
      }
    });

    const options = {
      from: SMTP_USER,
      to: email,
      subject: subject,
      html: message
    };
    // console.log('Email options:', options);

    await transporter.sendMail(options);
  } catch (error) {
    console.log('Error sending email', error);
  }
};
