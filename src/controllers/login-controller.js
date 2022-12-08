const loginService = require('../services/login-service');
const joi = require('joi');

const login = joi.object({
    mail: joi.string()
        .email()
        .required(),
    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{0,30}$'))
        .required()
});

const getData = async (req, res) => {
    const { body } = req;
    const result = login.validate(body);
    if(result.error){
        res.status(400).send({
            status: "FAILED",
            data: { error: result.error.details }
        });
    }else{
        try {
            const data = await loginService.createLog(result.value);
            res.header('auth-token', data.accessToken).status(200).send({
                status: "OK",
                data: data
            });
        } catch (error) {
            res.status(404).send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
        }
    }
};

module.exports = {
    getData
};
