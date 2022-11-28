const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const user = require('../routes/users');
const company = require('../routes/company-routes');
const PORT = process.env.PORT;

function main(){
    const app = express();
    middleWares(app);
    assingRoutes(app);
    app.listen(PORT, () => {
        console.log('Server listening port: ' + PORT);
    });
};

function middleWares(app){
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());
};

function assingRoutes(app){
    app.use('/user', user);
    app.use('/company', company);
};


module.exports = main;
