// This is only a test

const nodemailer = require('nodemailer');
require('dotenv').config();

const from = 'isaac.gz.ov@gmail.com';
const to = 'nevekdlh@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: from,
    pass: process.env.PASS_MAIL,
  },
});

const mailOptions = {
  from,
  to,
  subject: 'NodeJS',
  html: '<h1>Welcome</h1><h2>Final!</h2>',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
