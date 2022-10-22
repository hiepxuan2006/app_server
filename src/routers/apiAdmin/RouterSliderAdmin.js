const express = require('express');
const router = express.Router();
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');
const sliderController = require('../../app/Controller/adminController/SliderAdminController');

router.get('/', sliderController.getAllSlider);
router.post('/add', multipartUpload, sliderController.addSlider);
router.delete('/del', sliderController.DelSlider);
module.exports = router;
