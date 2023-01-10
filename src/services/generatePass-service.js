const generator = require('generate-password');
const Cryptr = require('cryptr');

const cryptr = new Cryptr(process.env.SECRET_CRYPTR);
const userReporsitory = require('../repositories/user-repository');

const generate = async (req, res) => {
    const data = await userReporsitory.findUsers();
    const passwords = generator.generateMultiple(data.length, {
        length: 15,
        numbers: true
    });
    for (let x = 0; x < data.length; x++) {
        const element = data[x].user;
        try {
            await userReporsitory.setPassword(element, cryptr.encrypt(passwords[x]));
        } catch (error) {
            res.status(400).send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
        }
    }
    res.send({
        status: "OK",
        rowsModify: data.length
    });
};

module.exports = generate;
