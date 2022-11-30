const eventData = require('../database/event-data');

const getEvents = async () => {
    try {
        const [allEvents] = await eventData.getEvents();
        return allEvents;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getEvents
};