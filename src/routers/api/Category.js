const express = require('express');
const router = express.Router();
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');

const categoryControler = require('../../app/Controller/api/CategoryController');
// lấy ra toàn bộ danh sách sản phẩm
router.get('/', categoryControler.getCategories);

module.exports = router;
