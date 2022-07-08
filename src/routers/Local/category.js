const express = require('express')
const router = express.Router()
const categoryControler = require('../../app/Controller/CategoryController')
router.get('/', categoryControler.index)
router.get('/add', categoryControler.add)
router.post('/add', categoryControler.store)
router.get('/edit/:id', categoryControler.edit)
router.delete('/delete/:id', categoryControler.delete)

module.exports = router