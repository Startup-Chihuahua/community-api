const connect = require('../connection/dbconnection');

async function getUsers() {
    const connection = await connect();
    return connection.query("SELECT * FROM usuarios");
};

const getUser = () => {

};

module.exports = {
    getUsers,
    getUser
};
