const express = require('express');
const router = express.Router();
const sliderController = require('../../app/Controller/FeController/sliderController');
router.get('/', sliderController.getList);
module.exports = router;
