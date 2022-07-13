const express = require('express');
const router = express.Router();
const sliderController = require('../../app/Controller/local/SliderController');
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');

router.get('/', sliderController.index);
router.get('/add', sliderController.add);
router.post('/add', multipartUpload, sliderController.store);
module.exports = router;
