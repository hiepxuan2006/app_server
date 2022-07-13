const express = require('express');
const router = express.Router();
const sliderController = require('../../app/Controller/api/sliderController');
router.get('/', sliderController.getList);
module.exports = router;
