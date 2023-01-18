const eventRepository = require('../repositories/event-repository');

const findEvents = async () => {
  try {
    return await eventRepository.findEvents();
  } catch (error) {
    throw error;
  }
};

const findOneEvent = async (eventId) => {
  try {
    return await eventRepository.findOneEvent(eventId);
  } catch (error) {
    throw error;
  }
};

const createNewEvent = async (newEvent) => {
  try {
    return await eventRepository.createNewEvent(newEvent);
  } catch (error) {
    throw error;
  }
};

const updateEvent = async (objectEvent, eventId) => {
  try {
    return await eventRepository.updateEvent(objectEvent, eventId);
  } catch (error) {
    throw error;
  }
};

const deleteEvent = async (eventId) => {
  try {
    await eventRepository.deleteEvent(eventId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findEvents,
  findOneEvent,
  createNewEvent,
  updateEvent,
  deleteEvent,
};
