const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/user-repository');
const SECRET_KEY = process.env.SECRET_KEY;

const createLog = async ({ mail, password }) => {
    try {
        const user = await userRepository.findUserByEmail(mail);
        // const validatePass = bcrypt.compareSync(password, userCreden.password);
        if(password === user.password){
            const accessToken = jwt.sign({ id: user.user }, SECRET_KEY,  {expiresIn: '2h'});
            const dataUser = {
                user: user.user,
                accessToken: accessToken,
            };
            return dataUser; 
        } else {
            throw{
                status: 404,
                message: "Mail or password wrong"
            };
        }
    } catch (error) {
        throw error;
    }
    
};

module.exports = {
    createLog
};
