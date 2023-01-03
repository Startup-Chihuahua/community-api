const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');
const PORT = process.env.PORT;

const user = require('../routes/user-routes');
const company = require('../routes/company-routes');
const event = require('../routes/event-routes');
const community = require('../routes/community-routes');
const login = require('../routes/login-routes');
const verifyToken = require('../routes/validate-token');

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
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/user', user);
    app.use('/company', verifyToken, company);
    app.use('/event', verifyToken, event);
    app.use('/community', verifyToken, community);
    app.use('/login', login);
};


module.exports = main;
