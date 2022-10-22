const express = require('express');
const router = express.Router();
const accountAdminController = require('../../app/Controller/adminController/AcountAdminController');
const { CheckLoginAdmin } = require('../../app/Middleware/verifyLogin');

router.get('/', CheckLoginAdmin, accountAdminController.auth);
router.post('/login', accountAdminController.login);

module.exports = router;
