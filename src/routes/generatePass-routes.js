const express = require('express');
const generate = require ('../services/generatePass-service');
const router = express.Router();

router.get('', generate);

module.exports = router;
