const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

let app = express();

const users = require('../routes/users');

function main(port){
    const p = port;
    app = express();
    middleWares();
    assingRoutes();
    app.listen(p, () => {
        console.log('Server listening port: ' + p);
    });
};

function middleWares(){
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());
};

function assingRoutes(){
    app.use('/users', users);
};


module.exports = main;