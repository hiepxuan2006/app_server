<<<<<<< HEAD
<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const companyController = require('../../app/Controller/api/CompanyController')
router.get('/', companyController.getlist)
router.get('/ct/:company', companyController.getCompany)
module.exports = router
=======
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
const express = require('express');
const router = express.Router();
const companyController = require('../../app/Controller/api/CompanyController');
router.get('/', companyController.getlist);
router.get('/ct/:company', companyController.getCompany);
module.exports = router;
<<<<<<< HEAD
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
=======
const express = require('express')
const router = express.Router()
const companyController = require('../../app/Controller/api/CompanyController')
router.get('/', companyController.getlist)
router.get('/ct/:company', companyController.getCompany)
module.exports = router
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
