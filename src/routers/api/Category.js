<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');

const categoryControler = require('../../app/Controller/api/CategoryController');
// lấy ra toàn bộ danh sách sản phẩm
router.get('/', categoryControler.getCategories);

module.exports = router;
=======
const express = require('express')
const router = express.Router()
const categoryControler = require('../../app/Controller/api/CategoryController')
// lấy ra toàn bộ danh sách sản phẩm
router.get('/', categoryControler.getCategory)
// lấy ra danh sahcs sản phẩm theo danh mục categori

module.exports = router
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
