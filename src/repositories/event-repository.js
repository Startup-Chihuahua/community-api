const connect = require('../connection/dbconnection');

async function findEvents() {
  try {
    const connection = await connect();
    const [data] = await connection.query('SELECT * FROM events');
    return data;
  } catch (error) {
    throw { status: 500, message: error };
  }
}

const findOneEvent = async (eventId) => {
  try {
    const connection = await connect();
    const [data] = await connection.query('SELECT * FROM events WHERE id = ?', [
      eventId,
    ]);
    if (data.length === 0) {
      throw {
        status: 400,
        message: `ID not found: ${eventId}`,
      };
    }
    return data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const createNewEvent = async (newEvent) => {
  try {
    const connection = await connect();
    return connection.query(
      'INSERT INTO events (event_name, description, profile_type, start_date, end_date, url_flyer, modality, location, name, lastname, phone, mail, community_name) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [
        newEvent.event_name,
        newEvent.description,
        newEvent.profile_type,
        newEvent.start_date,
        newEvent.end_date,
        newEvent.url_flyer,
        newEvent.modality,
        newEvent.location,
        newEvent.name,
        newEvent.lastname,
        newEvent.phone,
        newEvent.mail,
        newEvent.community_name,
      ]
    );
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const updateEvent = async (objectEvent, eventId) => {
  try {
    await findOneEvent(eventId);
    const connection = await connect();
    const [result] = await connection.query(
      'UPDATE events SET event_name = ?, description = ?, profile_type = ?, start_date = ?, end_date = ?, url_flyer = ?, modality = ?, location = ?, name = ?, lastname = ?, phone = ?, mail = ?, community_name = ?',
      [
        objectEvent.event_name,
        objectEvent.description,
        objectEvent.profile_type,
        objectEvent.start_date,
        objectEvent.end_date,
        objectEvent.url_flyer,
        objectEvent.modality,
        objectEvent.location,
        objectEvent.name,
        objectEvent.lastname,
        objectEvent.phone,
        objectEvent.mail,
        objectEvent.community_name,
      ]
    );
    return result;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const deleteEvent = async (eventId) => {
  try {
    const connection = await connect();
    const data = await connection.query('DELETE FROM events WHERE id = ?', [
      eventId,
    ]);
    if (data[0].affectedRows === 0) {
      throw {
        status: 400,
        message: `ID not found: ${eventId}`,
      };
    }
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = {
  findEvents,
  findOneEvent,
  createNewEvent,
  updateEvent,
  deleteEvent,
};
