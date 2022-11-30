const express = require('express');
const eventController = require ('../controllers/event-controller');
const router = express.Router();

router.get("/getEvents", eventController.getEvents);

module.exports = router;