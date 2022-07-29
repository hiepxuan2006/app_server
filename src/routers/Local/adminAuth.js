<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const adminAuthController = require('../../app/Controller/AdminAuthController');
router.get('/login', adminAuthController.login);
router.get('/register', adminAuthController.register);
module.exports = router;
=======
const express = require('express')
const router = express.Router()
const adminAuthController = require('../../app/Controller/AdminAuthController')
router.get('/login', adminAuthController.login)
router.get('/register', adminAuthController.register)
module.exports = router
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
