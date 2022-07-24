const express = require('express');
const router = express.Router();
const orderController = require('../../app/Controller/api/OrderController');
router.post('/', orderController.postOrder);
router.post('/get-order', orderController.getOrder);
router.post('/search-order', orderController.searchOrder);
module.exports = router;
