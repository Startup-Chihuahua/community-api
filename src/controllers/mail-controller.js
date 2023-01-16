const mailService = require('../services/mail-service');

const sendMail = async (req, res) => {
  const {
    params: { mail },
  } = req;
  if (!mail) {
    res.state(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':mail' can not be empty" },
    });
  }
  try {
    await mailService.sendMail(mail);
    res.status(202).send({ status: 'OK', message: 'Mail send' });
  } catch (error) {
    res.status(404).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    });
  }
};

module.exports = {
  sendMail,
};
