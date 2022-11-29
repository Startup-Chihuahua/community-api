const userService = require("../services/user-service");

const getUsers = async (req, res) => {
    try {
        const allUsers = await userService.getUsers();
        res.send({
            status: "OK",
            data: allUsers
        });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const getUser = async (req, res) => {
    const { params: {userId} } = req;
    if(!userId){
        res.send({
            status: "FAILED",
            data: { error: "Parameter ':userId' can not be empty" }
        });
    }
    try {
        const user = await userService.getUser(userId);
        res.send({ status: "OK", data: user });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const createUser = async (req, res) => {
    const { body } = req;
    if(
        !body.name ||
        !body.lastName ||
        !body.mail ||
        !body.password ||
        !body.curp ||
        !body.phone
    ){
        res.send({
            status: "FAILED",
            data: { error: "Missing keys" }
        });
        return;
    }
    const newUser = {
        name: body.name,
        lastName: body.lastName,
        mail: body.mail,
        password: body.password,
        curp: body.curp,
        phone: body.phone
    };
    try {
        await userService.createNewUser(newUser);
        res.send({ status: "OK", data: newUser });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const updateUser = async (req, res) => {
    const { body, params: {userId} } = req;
    if(
        !body.name ||
        !body.lastName ||
        !body.mail ||
        !body.password ||
        !body.curp ||
        !body.phone
    ){
        res.send({
            status: "FAILED",
            data: { error: "Missing keys" }
        });
        return;
    }
    const objectUser = {
        name: body.name,
        lastName: body.lastName,
        mail: body.mail,
        password: body.password,
        curp: body.curp,
        phone: body.phone
    };
    try {
        await userService.updateUser(objectUser, userId);
        res.send({ status: "OK", data: objectUser });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const deleteUser = async (req, res) => {
    const { params: {userId} } = req;
    if(!userId){
        res.send({
            status: "FAILED",
            data: { error: "Parameter ':userId' can not be empty" }
        });
    }
    try {
        await userService.deleteUser(userId);
        res.send({ status: "OK", message: "Delete user success" });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
