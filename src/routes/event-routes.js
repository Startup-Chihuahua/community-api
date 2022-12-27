const express = require('express');
const eventController = require ('../controllers/event-controller');
const router = express.Router();

router.get("/findEvents", eventController.findEvents);
router.get("/findOneEvent/:eventId", eventController.findOneEvent);

module.exports = router;
