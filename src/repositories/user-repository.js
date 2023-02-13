const Cryptr = require('cryptr');

const cryptr = new Cryptr(process.env.SECRET_CRYPTR);
const connect = require('../connection/dbconnection');

async function findUsers() {
  try {
    const connection = await connect();
    const [data] = await connection.query('SELECT * FROM users');
    return data;
  } catch (error) {
    throw { status: 500, message: error };
  }
}

const findOneUser = async (userId) => {
  try {
    const connection = await connect();
    const [data] = await connection.query('SELECT * FROM users WHERE id = ?', [
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
      'INSERT INTO users (mail, password, name, lastname, curp, birth_date, gender, state, town, neighborhood, program, tags, emprendedor, aliado, type) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [
        newUser.mail,
        cryptr.encrypt(newUser.password),
        newUser.name,
        newUser.lastname,
        newUser.curp,
        newUser.birth_date,
        newUser.gender,
        newUser.state,
        newUser.town,
        newUser.neighborhood,
        newUser.program,
        newUser.tags,
        newUser.emprendedor,
        newUser.aliado,
        newUser.type,
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
      'UPDATE users SET name = ?, lastname = ?, curp = ?, birth_date = ?, gender = ?, state = ?, town = ?, neighborhood = ?, program = ?, tags = ?, emprendedor = ?, aliado = ?, type = ?  WHERE id = ?',
      [
        objectUser.name,
        objectUser.lastname,
        objectUser.curp,
        objectUser.birth_date,
        objectUser.gender,
        objectUser.state,
        objectUser.town,
        objectUser.neighborhood,
        objectUser.program,
        objectUser.tags,
        objectUser.emprendedor,
        objectUser.aliado,
        objectUser.type,
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
    const data = await connection.query('DELETE FROM users WHERE id = ?', [
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
    const [data] = await connection.query(
      'SELECT * FROM users WHERE mail = ?',
      [mail]
    );
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

const setPassword = async (userid, password) => {
  try {
    const connection = await connect();
    return await connection.query(
      'UPDATE users SET password = ? WHERE id = ?',
      [cryptr.encrypt(password), userid]
    );
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
  setPassword,
  findUserByEmail,
};
