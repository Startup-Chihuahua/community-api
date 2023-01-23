const express = require('express');
const tokenController = require('../controllers/token-controller');

const router = express.Router();

router.get('/user/recover-password/:mail', tokenController.sendMail);

module.exports = router;
