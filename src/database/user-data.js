const connect = require('../connection/dbconnection');
const bcrypt = require('bcryptjs');
const { password, user } = require('../connection/config');

async function getUsers() {
    try {
        const connection = await connect();
        return connection.query("SELECT * FROM user");
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getUser = async (userId) => {
    try {
        const connection = await connect();
        return connection.query("SELECT * FROM user WHERE user = ?", [userId]);
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
        return connection.query("UPDATE user SET name = ?, lastName = ?, mail = ?, password = ?, curp = ?, phone = ? WHERE user = ?", [
            objectUser.name,
            objectUser.lastName,
            objectUser.mail,
            bcrypt.hashSync(objectUser.password),
            objectUser.curp,
            objectUser.phone,
            userId
        ]);
    } catch (error) {
        throw { status: 500, message: error }
    }
};

const deleteUser = async (userId) => {
    try {
        const connection = await connect();
        return connection.query("DELETE FROM user WHERE user = ?", [userId]);
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMail = async (mail) => {
    try {
        const connection = await connect();
        return connection.query("SELECT * FROM user WHERE mail = ?", [mail]);
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const setPassword = async (userid, password) => {
    try {
        const connection = await connect();
        return connection.query("UPDATE user SET password = ? WHERE user = ?", [
            password,
            userid
        ]);
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
    getMail,
    setPassword
};
