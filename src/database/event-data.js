const connect = require('../connection/dbconnection');

async function getEvents() {
    try {
        const connection = await connect();
        return connection.query("SELECT * FROM Event");
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getEvent = async (eventId) => {
    try {
        const connection = await connect();
        return connection.query("SELECT * FROM Event WHERE event = ?", [eventId]);
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = {
    getEvents,
    getEvent
};
