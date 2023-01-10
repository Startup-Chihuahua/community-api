const express = require('express');
const eventController = require('../controllers/event-controller');

const router = express.Router();

router.get('/events', eventController.findEvents);
router.get('/events/:eventId', eventController.findOneEvent);

module.exports = router;
