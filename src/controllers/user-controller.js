const userService = require("../services/user-service");

const getUsers = async (req, res) => {
    const allUsers = await userService.getUsers();
    res.json(allUsers);
};

const getUser = (req, res) => {
    res.json('getUser');
};

const createUser = (req, res) => {
    res.json('createUser');
};

const updateUser = (req, res) => {
    res.json('updateUser');
};

const deleteUser = (req, res) => {
    res.json('deleteUser');
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};