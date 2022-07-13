<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const companyController = require('../../app/Controller/api/CompanyController')
router.get('/', companyController.getlist)
router.get('/ct/:company', companyController.getCompany)
module.exports = router
=======
const express = require('express');
const router = express.Router();
const companyController = require('../../app/Controller/api/CompanyController');
router.get('/', companyController.getlist);
router.get('/ct/:company', companyController.getCompany);
module.exports = router;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
