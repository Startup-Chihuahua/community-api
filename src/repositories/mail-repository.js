const connect = require('../connection/dbconnection');

const createNewUuid = async (id, uuid) => {
  try {
    const connection = await connect();
    return connection.query('INSERT INTO mail (id, uuid) VALUES (?,?)', [
      id,
      uuid,
    ]);
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = {
  createNewUuid,
};
