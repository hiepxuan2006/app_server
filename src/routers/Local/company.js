<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const companyController = require('../../app/Controller/CompanyController')
const sortMiddleware = require('../../app/Middleware/SortMiddlewar')
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware')
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

router.get('/', sortMiddleware, companyController.index)
router.get('/add', companyController.add)
router.post('/add', multipartUpload, companyController.store)
router.delete('/delete/:id', companyController.del)
module.exports = router
=======
const express = require('express');
const router = express.Router();
const companyController = require('../../app/Controller/CompanyController');
const sortMiddleware = require('../../app/Middleware/SortMiddlewar');
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

router.get('/', sortMiddleware, companyController.index);
router.get('/add', companyController.add);
router.post('/add', multipartUpload, companyController.store);
router.delete('/delete/:id', companyController.del);
module.exports = router;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
