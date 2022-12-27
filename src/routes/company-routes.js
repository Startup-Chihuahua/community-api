const express = require('express');
const companyController = require('../controllers/company-controller');
const router = express.Router();

router.get("/findCompanies", companyController.findCompanies);
router.get("/findOneCompany/:companyId", companyController.findOneCompany);
router.post("/createCompany", companyController.createCompany);
router.put("/updateCompany/:companyId", companyController.updateCompany);
router.delete("/deleteCompany/:companyId", companyController.deleteCompany);

module.exports = router;
