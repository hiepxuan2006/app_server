<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const companyController = require('../../app/Controller/api/CompanyController');
router.get('/', companyController.getlist);
router.get('/ct/:company', companyController.getCompany);
module.exports = router;
=======
const express = require('express')
const router = express.Router()
const companyController = require('../../app/Controller/api/CompanyController')
router.get('/', companyController.getlist)
router.get('/ct/:company', companyController.getCompany)
module.exports = router
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
