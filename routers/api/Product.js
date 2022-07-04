const express = require('express')
const router = express.Router()
const productController = require('../../app/Controller/api/ProductController')
// lấy danh sách sản phẩm
router.get('/', productController.getListProduct)
// laay ra danh sách sản oham theo categori
router.get('/category/:slug', productController.getListProductCategory)
// laasy tuwngf san pham
router.get('/sanpham/:slug', productController.getOnlyProduct)

module.exports = router