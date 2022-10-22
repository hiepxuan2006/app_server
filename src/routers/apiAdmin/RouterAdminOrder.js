const express = require('express');
const router = express.Router();
const OrderAdminController = require('../../app/Controller/adminController/OrderAdminController');
router.get('/', OrderAdminController.getAllOrder);
router.get('/get-one/:id', OrderAdminController.getOrder);
router.post('/update', OrderAdminController.updateStatus);

module.exports = router;
