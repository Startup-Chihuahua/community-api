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

const findUuid = async (uuid) => {
  try {
    const connection = await connect();
    const [data] = await connection.query('SELECT * FROM mail WHERE uuid = ?', [
      uuid,
    ]);
    if (data.length === 0) {
      throw {
        status: 404,
        message: 'UUID not found',
      };
    }
    return data[0];
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = {
  createNewUuid,
  findUuid,
};
