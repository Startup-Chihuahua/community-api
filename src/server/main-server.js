const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

const { PORT } = process.env;

const user = require('../routes/user-routes');
const company = require('../routes/company-routes');
const event = require('../routes/event-routes');
const community = require('../routes/community-routes');
const login = require('../routes/login-routes');
const mail = require('../routes/mail-routes');

const verifyToken = require('../routes/validate-token');

function middleWares(app) {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
}

function assingRoutes(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('', login);
  app.use('', mail);
  app.use('', user);
  app.use('', verifyToken, company);
  app.use('', verifyToken, event);
  app.use('', verifyToken, community);
}

function main() {
  const app = express();
  middleWares(app);
  assingRoutes(app);
  app.listen(PORT, () => {
    console.log(`Server listening port: ${PORT}`);
  });
}

module.exports = main;
