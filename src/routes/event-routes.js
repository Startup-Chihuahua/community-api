const express = require('express');
const eventController = require('../controllers/event-controller');

const router = express.Router();

router.get('/events', eventController.findEvents);
router.post('/events', eventController.createNewEvent);
router.get('/events/:eventId', eventController.findOneEvent);
router.put('/events/:eventId', eventController.updateEvent);
router.delete('/events/:eventId', eventController.deleteEvent);

module.exports = router;
