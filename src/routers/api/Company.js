const express = require('express');
const router = express.Router();
const companyController = require('../../app/Controller/FeController/CompanyController');
router.get('/', companyController.getlist);
router.get('/ct/:company', companyController.getCompany);
module.exports = router;
