const express = require('express');
const mailController = require('../controllers/mail-controller');

const router = express.Router();

router.get('/mail/sendMail/:mail', mailController.sendMail);

module.exports = router;
