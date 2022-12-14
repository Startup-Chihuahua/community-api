const connect = require('../connection/dbconnection');
const bcrypt = require('bcryptjs');

async function getUsers() {
    try {
        const connection = await connect();
        const [data] = await connection.query("SELECT * FROM user");
        return data;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getUser = async (userId) => {
    try {
        const connection = await connect();
        const [data] = await connection.query("SELECT * FROM user WHERE user = ?", [userId]);
        return data;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const createNewUser = async (newUser) => {
    try {
        const connection = await connect();
        return connection.query("INSERT INTO user (name, lastName, mail, password, curp, phone) VALUES (?,?,?,?,?,?)", [
            newUser.name,
            newUser.lastName,
            newUser.mail,
            bcrypt.hashSync(newUser.password),
            newUser.curp,
            newUser.phone
        ]);
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const updateUser = async (objectUser, userId) => {
    try {
        const connection = await connect();
        const [result] = await connection.query("UPDATE user SET name = ?, lastName = ?, mail = ?, password = ?, curp = ?, phone = ? WHERE user = ?", [
            objectUser.name,
            objectUser.lastName,
            objectUser.mail,
            bcrypt.hashSync(objectUser.password),
            objectUser.curp,
            objectUser.phone,
            userId
        ]);
        return result;
    } catch (error) {
        throw { status: 500, message: error }
    }
};

const deleteUser = async (userId) => {
    try {
        const connection = await connect();
        const data = await connection.query("DELETE FROM user WHERE user = ?", [userId]);
        return data[0];
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const findUserByEmail = async (mail) => {
    try {
        const connection = await connect();
        const [data] = await connection.query("SELECT * FROM user WHERE mail = ?", [mail]);
        return data;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = {
    getUsers,
    getUser,
    createNewUser,
    updateUser,
    deleteUser,
    findUserByEmail
};
