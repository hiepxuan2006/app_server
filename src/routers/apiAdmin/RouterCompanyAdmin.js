const express = require('express')
const router = express.Router()
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');
const companyAdminController = require('../../app/Controller/adminController/CompanyAdminController')


router.post('/add',multipartUpload,companyAdminController.addCompany)
router.get('/get-one',companyAdminController.getCompany)
router.get('/get-list',companyAdminController.getListCompany)
module.exports = router