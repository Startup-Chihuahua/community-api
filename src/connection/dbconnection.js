const mysql = require('mysql2/promise');
const config = require('../connection/config');

function connect() {
    return mysql.createConnection(config);
}

module.exports = connect;
