const eventData = require('../database/event-data');

const getEvents = async () => {
    try {
        const [allEvents] = await eventData.getEvents();
        return allEvents;
    } catch (error) {
        throw error;
    }
};

const getEvent = async (eventId) => {
    try {
        const [event] = await eventData.getEvent(eventId);
        if(event.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${eventId}`
            };
        }
        return event;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getEvents,
    getEvent
};