const userService = require("../services/user-service");
const joi = require('joi');

const user = joi.object({
    name: joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    lastName: joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    mail: joi.string()
        .email()
        .required(),
    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
        .required(),
    curp: joi.string()
        .uppercase()
        .max(18)
        .required(),
    phone: joi.string()
        .alphanum()
        .max(20)
        .required()
});

const getUsers = async (req, res) => {
    try {
        const allUsers = await userService.getUsers();
        res.status(200).send({
            status: "OK",
            data: allUsers
        });
    } catch (error) {
        res.status(404).send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const getUser = async (req, res) => {
    const { params: {userId} } = req;
    if(!userId){
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':userId' can not be empty" }
        });
    }
    try {
        const user = await userService.getUser(userId);
        res.status(200).send({ status: "OK", data: user });
    } catch (error) {
        res.status(404).send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const createUser = async (req, res) => {
    const result = user.validate(req.body);
    if(result.error){
        res.status(400).send({
            status: "FAILED",
            data: { error: result.error.details }
        });
    }else{
        try {
            await userService.createNewUser(result.value);
            res.status(201).send({ status: "OK", data: result.value });
        } catch (error) {
            res.status(404).send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
        }
    }
};

const updateUser = async (req, res) => {
    const { body, params: {userId} } = req;
    const result = user.validate(body);

    if(result.error){
        res.status(400).send({
            status: "FAILED",
            data: { error: result.error.details }
        });
    } else{
        try {
            await userService.updateUser(result.value, userId);
            res.status(202).send({ status: "OK", data: result.value });
        } catch (error) {
            res.status(404).send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
        }
    }
};

const deleteUser = async (req, res) => {
    const { params: {userId} } = req;
    if(!userId){
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':userId' can not be empty" }
        });
    }
    try {
        await userService.deleteUser(userId);
        res.status(202).send({ status: "OK", message: "Delete user success" });
    } catch (error) {
        res.status(404).send({
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
