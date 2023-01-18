const connect = require('../connection/dbconnection');

const createToken = async (id, uuid) => {
  try {
    const connection = await connect();
    return connection.query('INSERT INTO token (id, uuid) VALUES (?,?)', [
      id,
      uuid,
    ]);
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const findToken = async (uuid) => {
  try {
    const connection = await connect();
    const [data] = await connection.query(
      'SELECT * FROM token WHERE uuid = ?',
      [uuid]
    );
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
  createToken,
  findToken,
};
