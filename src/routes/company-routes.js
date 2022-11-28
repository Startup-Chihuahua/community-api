const express = require('express');
const companyController = require('../controllers/company-controller');
const router = express.Router();

router.get("/", companyController.getCompanys);
router.get("/:companyId", companyController.getCompany);
router.post("/", companyController.createCompany);
router.put("/:companyId", companyController.deleteCompany);
router.delete("/:userId", companyController.deleteCompany);

module.exports = router;
