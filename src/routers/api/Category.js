<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const categoryControler = require('../../app/Controller/api/CategoryController')
// lấy ra toàn bộ danh sách sản phẩm
router.get('/', categoryControler.getCategory)
// lấy ra danh sahcs sản phẩm theo danh mục categori

module.exports = router
=======
const express = require('express');
const router = express.Router();
const categoryControler = require('../../app/Controller/api/CategoryController');
// lấy ra toàn bộ danh sách sản phẩm
router.get('/', categoryControler.getCategory);
// lấy ra danh sahcs sản phẩm theo danh mục categori

module.exports = router;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
