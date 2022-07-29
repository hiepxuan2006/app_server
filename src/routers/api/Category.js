<<<<<<< HEAD
<<<<<<< HEAD
=======
const express = require('express');
const router = express.Router();
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');

const categoryControler = require('../../app/Controller/api/CategoryController');
// lấy ra toàn bộ danh sách sản phẩm
router.get('/', categoryControler.getCategories);

module.exports = router;
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
const express = require('express')
const router = express.Router()
const categoryControler = require('../../app/Controller/api/CategoryController')
// lấy ra toàn bộ danh sách sản phẩm
router.get('/', categoryControler.getCategory)
// lấy ra danh sahcs sản phẩm theo danh mục categori

module.exports = router
<<<<<<< HEAD
=======
const express = require('express');
const router = express.Router();
const categoryControler = require('../../app/Controller/api/CategoryController');
// lấy ra toàn bộ danh sách sản phẩm
router.get('/', categoryControler.getCategory);
// lấy ra danh sahcs sản phẩm theo danh mục categori

module.exports = router;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
