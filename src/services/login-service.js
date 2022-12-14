const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userData = require('../database/user-data');
const SECRET_KEY = process.env.SECRET_KEY;

const createLog = async ({ mail, password }) => {
    try {
        const user = await userData.getMail(mail);
        if(user[0].length === 0){
            throw{
                status: 404,
                message: "Mail or password wrong"
            };
        } else {
            const userCreden = user[0][0];
            
            // const validatePass = bcrypt.compareSync(password, userCreden.password);
            if(password === userCreden.password){
                const accessToken = jwt.sign({ id: userCreden.user }, SECRET_KEY,  {expiresIn: '2h'});
                const dataUser = {
                    user: userCreden.user,
                    accessToken: accessToken,
                };
                return dataUser; 
            } else {
                throw{
                    status: 404,
                    message: "Mail or password wrong"
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
