const express = require('express')
const router = express.Router()
const adminAuthController = require('../../app/Controller/AdminAuthController')
router.get('/login', adminAuthController.login)
router.get('/register', adminAuthController.register)
module.exports = router