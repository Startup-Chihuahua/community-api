const mysql = require('mysql2/promise');
// const config = require('../connection/config');

function connect() {
  return mysql.createConnection(process.env.DATABASE_URL);
}

module.exports = connect;
