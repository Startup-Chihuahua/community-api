const userData = require('../database/user-data');

const getUsers = async () => {
    //Validar
    const [data] = await userData.getUsers();
    // console.log(data);
    return data;
};

const getUser = () => {

};

module.exports = {
    getUsers,
    getUser
};