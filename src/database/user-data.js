const connect = require('../connection/dbconnection');

const getUsers = async () => {
    const connection = await connect();
    const result = await connection.query("SELECT * FROM usuarios");
    // console.log(query);
    return result;
};

const getUser = () => {

};

module.exports = {
    getUsers,
    getUser
};