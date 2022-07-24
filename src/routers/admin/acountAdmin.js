const express = require('express');
const router = express.Router();
const acountAdminController = require('../../app/Controller/admin/AcountAdmin');
router.post('/login', acountAdminController.login);

module.exports = router;
