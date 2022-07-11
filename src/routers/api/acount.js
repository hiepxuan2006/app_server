const express = require('express')
const router = express.Router()
const acountController = require('../../app/Controller/api/AcountController')

router.post('login', acountController.login)
module.exports = router