const express = require('express');
const loginController = require('../controllers/login-controller');

const router = express.Router();

router.post('/log', loginController.getData);

module.exports = router;
