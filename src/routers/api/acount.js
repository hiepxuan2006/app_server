const express = require('express');
const router = express.Router();
const acountController = require('../../app/Controller/api/AcountController');
const verifyToken = require('../../app/Middleware/verifyToken');

router.post('/register', acountController.register);
router.post('/verify', acountController.verifyOtpUser);
router.post('/login', acountController.login);
router.get('/', verifyToken, acountController.verifyLogin);
module.exports = router;
