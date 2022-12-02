const express = require('express');
const eventController = require ('../controllers/event-controller');
const router = express.Router();

router.get("/getEvents", eventController.getEvents);
router.get("/getEvent/:eventId", eventController.getEvent);

module.exports = router;