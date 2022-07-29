const express = require('express');
const router = express.Router();
const categoryPostController = require('../../app/Controller/FeController/CategoryPostController');

//
router.get('/', categoryPostController.getlist);
module.exports = router;
