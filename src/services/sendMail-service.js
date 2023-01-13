const sgMail = require('@sendgrid/mail');
const { v4: uuidv4 } = require('uuid');

const userReporsitory = require('../repositories/user-repository');
const mailRepository = require('../repositories/mail-repository');

const API_KEY = process.env.SG_API_KEY;
const fMail = process.env.MAIL;

const sendMail = async (mail) => {
  const uuid = uuidv4();
  try {
    const { id } = await userReporsitory.findUserByEmail(mail);
    await mailRepository.createNewUuid(id, uuid);

    sgMail.setApiKey(API_KEY);
    const msg = {
      to: mail,
      from: fMail,
      subject: 'Recuperar contraseña StartupChihuahua',
      text: 'This is awesome email sent from node app',
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendMail,
};
