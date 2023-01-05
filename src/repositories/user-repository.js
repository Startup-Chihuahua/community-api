const Cryptr = require('cryptr');

const cryptr = new Cryptr(process.env.SECRET_CRYPTR);
const connect = require('../connection/dbconnection');

async function findUsers() {
  try {
    const connection = await connect();
    const [data] = await connection.query('SELECT * FROM user');
    return data;
  } catch (error) {
    throw { status: 500, message: error };
  }
}

const findOneUser = async (userId) => {
  try {
    const connection = await connect();
    const [data] = await connection.query('SELECT * FROM user WHERE user = ?', [
      userId,
    ]);
    if (data.length === 0) {
      throw {
        status: 400,
        message: `ID not found: ${userId}`,
      };
    }
    return data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const createNewUser = async (newUser) => {
  try {
    const connection = await connect();
    return connection.query(
      'INSERT INTO user (name, lastName, mail, password, curp, phone) VALUES (?,?,?,?,?,?)',
      [
        newUser.name,
        newUser.lastName,
        newUser.mail,
        cryptr.encrypt(newUser.password),
        newUser.curp,
        newUser.phone,
      ]
    );
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const updateUser = async (objectUser, userId) => {
  try {
    await findOneUser(userId);
    const connection = await connect();
    const [result] = await connection.query(
      'UPDATE user SET name = ?, lastName = ?, mail = ?, password = ?, curp = ?, phone = ? WHERE user = ?',
      [
        objectUser.name,
        objectUser.lastName,
        objectUser.mail,
        cryptr.encrypt(objectUser.password),
        objectUser.curp,
        objectUser.phone,
        userId,
      ]
    );
    return result;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const deleteUser = async (userId) => {
  try {
    const connection = await connect();
    const data = await connection.query('DELETE FROM user WHERE user = ?', [
      userId,
    ]);
    if (data[0].affectedRows === 0) {
      throw {
        status: 400,
        message: `ID not found: ${userId}`,
      };
    }
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const findUserByEmail = async (mail) => {
  try {
    const connection = await connect();
    const [data] = await connection.query('SELECT * FROM user WHERE mail = ?', [
      mail,
    ]);
    if (data.length === 0) {
      throw {
        status: 404,
        message: 'Mail or password wrong',
      };
    }
    return data[0];
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = {
  findUsers,
  findOneUser,
  createNewUser,
  updateUser,
  deleteUser,
  findUserByEmail,
};
