const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userData = require('../database/user-data');
const SECRET_KEY = process.env.SECRET_KEY;

const createLog = async ({ mail, password }) => {
    try {
        const user = await userData.getMail(mail);
        if(user[0].length === 0){
            throw{
                status: 400,
                message: "Mail not found"
            };
        } else {
            const userCreden = user[0][0];
            const validatePass = bcrypt.compareSync(password, userCreden.password);
            if(validatePass){
                const expiresIn = '10h';
                const accessToken = jwt.sign({ id: userCreden.user }, SECRET_KEY, { expiresIn: expiresIn });
                const dataUser = {
                    user: userCreden.user,
                    name: userCreden.name,
                    lastName: userCreden.lastName,
                    mail: userCreden.mail,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                };
                return dataUser; 
            } else {
                throw{
                    status: 404,
                    message: "Wrong password"
                };
            }
        }
    } catch (error) {
        throw error;
    }
    
};

module.exports = {
    createLog
};

