const loginService = require('../services/login-service');

const getData = async (req, res) => {
    const { body } = req;
    if(
        !body.mail ||
        !body.password
    ){
        res.send({
            status: "FAILED",
            data: { error: "Missing keys" }
        });
        return;
    }
    const objectLog = {
        mail: body.mail,
        password: body.password
    };
    try {
        const data = await loginService.createLog(objectLog);
        res.send({
            status: "OK",
            data: data
        });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

module.exports = {
    getData
};
