const express = require('express');
const router = express.Router();
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');
const categoryAdminController = require('../../app/Controller/admin/CategoryAdminController');

router.get('/', categoryAdminController.getCategories);
router.get('/get-one', categoryAdminController.getCategory);
router.post('/add', multipartUpload, categoryAdminController.addCtegory);
router.delete('/del', categoryAdminController.delCategory);
router.patch(
    '/update/:id',
    multipartUpload,
    categoryAdminController.updateCategory,
);

module.exports = router;
