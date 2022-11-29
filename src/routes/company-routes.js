const express = require('express');
const companyController = require('../controllers/company-controller');
const router = express.Router();

router.get("/getCompanys", companyController.getCompanys);
router.get("/getCompany/:companyId", companyController.getCompany);
router.post("/createCompany", companyController.createCompany);
router.put("/updateCompany/:companyId", companyController.updateCompany);
router.delete("/deleteCompany/:companyId", companyController.deleteCompany);

module.exports = router;
