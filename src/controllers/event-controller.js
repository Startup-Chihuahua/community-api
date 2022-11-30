const eventService = require('../services/event-service');

const getEvents = async (req, res) => {
    try {
        const allEvents = await eventService.getEvents();
        res.send({
            status: "OK",
            data: allEvents
        });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

module.exports = { 
    getEvents
};