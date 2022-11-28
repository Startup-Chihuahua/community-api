const dotevn = require('dotenv');
dotevn.config();

const server = require('./src/server/main-server');

server(process.env.PORT);