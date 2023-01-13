const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(
  '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'
);

const msg = {
  to: 'nevekdlh@gmail.com',
  from: 'startupchihuahua0@gmail.com',
  subject: 'Testing Node Email Service',
  text: 'This is awesome email sent from node app',
};

sgMail.send(msg, (err, info) => {
  if (err) {
    console.log('Email not send');
  } else {
    console.log('Email Sent Success');
    console.log(info);
  }
});
