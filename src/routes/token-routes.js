const express = require('express');
const tokenController = require('../controllers/token-controller');

const router = express.Router();

router.post('/user/recover-password', tokenController.sendTokentoMail);

module.exports = router;
