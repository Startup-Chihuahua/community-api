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

module.exports = {
  findEvents,
  findOneEvent,
};
