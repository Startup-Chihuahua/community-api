const eventRepository = require('../repositories/event-repository');

const findEvents = async () => eventRepository.findEvents();

const findOneEvent = async (eventId) => eventRepository.findOneEvent(eventId);

const createNewEvent = async (newEvent) =>
  eventRepository.createNewEvent(newEvent);

const updateEvent = async (objectEvent, eventId) =>
  eventRepository.updateEvent(objectEvent, eventId);

const deleteEvent = async (eventId) => eventRepository.deleteEvent(eventId);

module.exports = {
  findEvents,
  findOneEvent,
  createNewEvent,
  updateEvent,
  deleteEvent,
};
