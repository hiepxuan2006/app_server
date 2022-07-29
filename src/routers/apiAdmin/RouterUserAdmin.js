const express =require('express')
const router = express.Router()
const userAdminController = require('../../app/Controller/adminController/UserAdminController')

 router.get('/get-list',userAdminController.getListUser)

module.exports=router