<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const adminAuthController = require('../../app/Controller/AdminAuthController')
router.get('/login', adminAuthController.login)
router.get('/register', adminAuthController.register)
module.exports = router
=======
const express = require('express');
const router = express.Router();
const adminAuthController = require('../../app/Controller/AdminAuthController');
router.get('/login', adminAuthController.login);
router.get('/register', adminAuthController.register);
module.exports = router;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
