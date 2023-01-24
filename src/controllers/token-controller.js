const joi = require('joi');
const tokenService = require('../services/token-service');

const token = joi.object({
  mail: joi.string().email().max(100).required(),
});

const sendMail = async (req, res) => {
  const result = token.validate(req.body);
  console.log(req.body.mail);
  if (result.error) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: result.error.details },
    });
  } else {
    try {
      await tokenService.sendTokentoMail(req.body.mail);
      res.status(202).send({ status: 'OK', message: 'Mail send' });
    } catch (error) {
      res.status(404).send({
        status: 'FAILED',
        data: { error: error?.message || error },
      });
    }
  }
};

module.exports = {
  sendMail,
};
