// Use nodemailer-express-handlebars to set styles to the mail sent

// const sgMail = require('@sendgrid/mail');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

const userReporsitory = require('../repositories/user-repository');
const mailRepository = require('../repositories/mail-repository');

// const API_KEY = process.env.SG_API_KEY;
const fMail = process.env.MAIL;
const url = process.env.URL;
const text = '/recuperar-contrseña?token=';

const sendMail = async (mail) => {
  const uuid = uuidv4();
  const link = `${url}${text}${uuid}`;
  try {
    const user = await userReporsitory.findUserByEmail(mail);
    await mailRepository.createNewUuid(user.id, uuid);

    // sgMail.setApiKey(API_KEY);
    // const msg = {
    //   to: mail,
    //   from: fMail,
    //   subject: 'Recuperar contraseña StartupChihuahua',
    //   text: 'This is awesome email sent from node app',
    // };

    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log('Email sent');
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: fMail,
        pass: process.env.PASS_MAIL,
      },
    });

    const mailOptions = {
      from: fMail,
      to: mail,
      subject: `Restaurar contraseña`,
      html: `<h1>Ingrese a este link para ingresar una nueva contraseña</h1><a href="${link}">Ingresar nueva contraseña</a>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendMail,
};
