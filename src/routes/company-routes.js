const express = require('express');
const companyController = require('../controllers/company-controller');

const router = express.Router();

router.get('/companies', companyController.findCompanies);
router.get('/companies/:companyId', companyController.findOneCompany);
router.post('/companies', companyController.createCompany);
router.put('/companies/:companyId', companyController.updateCompany);
router.delete('/companies/:companyId', companyController.deleteCompany);

module.exports = router;
