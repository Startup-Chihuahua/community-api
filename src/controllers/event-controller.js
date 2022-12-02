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

const getEvent = async (req, res) => {
    const { params: {eventId} } = req;
    if(!eventId){
        res.send({
            status: "FAILED",
            data: { error: "Parameter ':eventId' can not be empty" }
        });
    }
    try {
        const event = await eventService.getEvent(eventId);
        res.send({ status: "OK", data: event });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

module.exports = { 
    getEvents,
    getEvent
};