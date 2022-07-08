const express = require('express')
const router = express.Router()
const categoryPostController = require('../../app/Controller/api/CategoryPostController')

// 
router.get('/', categoryPostController.getlist)
module.exports = router