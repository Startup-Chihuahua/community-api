const connect = require('../connection/dbconnection');

async function findEvents() {
    try {
        const connection = await connect();
        const [data] = await connection.query("SELECT * FROM Event");
        return data;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const findOneEvent = async (eventId) => {
    try {
        const connection = await connect();
        const [data] = await connection.query("SELECT * FROM Event WHERE event = ?", [eventId]);
        if(data.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${userId}`
            };
        }
        return data;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = {
    findEvents,
    findOneEvent
};
