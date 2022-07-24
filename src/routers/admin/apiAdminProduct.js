const express = require('express');
const router = express.Router();
const productAdminController = require('../../app/Controller/admin/ProductAdminController');
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');

router.get('/', productAdminController.getListProduct);
// xóa sản phẩm
router.delete('/del', productAdminController.delProduct);
// thêm sản phẩm
router.get('/get-one', productAdminController.getProduct);
router.patch(
    '/update/:id',
    multipartUpload,
    productAdminController.updateProduct,
);

router.post('/add', multipartUpload, productAdminController.addProduct);
module.exports = router;
