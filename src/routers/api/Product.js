<<<<<<< HEAD
<<<<<<< HEAD
=======
const express = require('express');
const router = express.Router();
const productController = require('../../app/Controller/api/ProductController');
// lấy danh sách sản phẩm
router.get('/', productController.getListProduct);
// laay ra danh sách sản oham theo categori
router.get('/list', productController.getListProductCategory);
// laasy tuwngf san pham
router.get('/san-pham/:slug', productController.getOnlyProduct);
// randome sảm phẩm
router.get('/random', productController.getRandome);
// tìm kieemssanr phẩm
router.get('/search', productController.getSearch);

module.exports = router;
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
const express = require('express')
const router = express.Router()
const productController = require('../../app/Controller/api/ProductController')
// lấy danh sách sản phẩm
router.get('/', productController.getListProduct)
// laay ra danh sách sản oham theo categori
router.get('/list', productController.getListProductCategory)
// laasy tuwngf san pham
router.get('/san-pham/:slug', productController.getOnlyProduct)
// randome sảm phẩm
router.get('/random', productController.getRandome)

// tìm kieemssanr phẩm
router.get('/search', productController.getSearch)



module.exports = router
<<<<<<< HEAD
=======
const express = require('express');
const router = express.Router();
const productController = require('../../app/Controller/api/ProductController');
// lấy danh sách sản phẩm
router.get('/', productController.getListProduct);
// laay ra danh sách sản oham theo categori
router.get('/list', productController.getListProductCategory);
// laasy tuwngf san pham
router.get('/san-pham/:slug', productController.getOnlyProduct);
// randome sảm phẩm
router.get('/random', productController.getRandome);

// tìm kieemssanr phẩm
router.get('/search', productController.getSearch);

module.exports = router;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
