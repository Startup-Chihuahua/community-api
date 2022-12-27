const eventService = require('../services/event-service');

const findEvents = async (req, res) => {
    try {
        const allEvents = await eventService.findEvents();
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

const findOneEvent = async (req, res) => {
    const { params: {eventId} } = req;
    if(!eventId){
        res.send({
            status: "FAILED",
            data: { error: "Parameter ':eventId' can not be empty" }
        });
    }
    try {
        const event = await eventService.findOneEvent(eventId);
        res.send({ status: "OK", data: event });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

module.exports = { 
    findEvents,
    findOneEvent
};
