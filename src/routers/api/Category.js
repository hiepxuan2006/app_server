const express = require('express');
const router = express.Router();
const categoryControler = require('../../app/Controller/FeController/CategoryController');
// lấy ra toàn bộ danh sách sản phẩm
router.get('/', categoryControler.getCategory);
// lấy ra danh sahcs sản phẩm theo danh mục categori

module.exports = router;
