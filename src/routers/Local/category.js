<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const categoryControler = require('../../app/Controller/CategoryController')
router.get('/', categoryControler.index)
router.get('/add', categoryControler.add)
router.post('/add', categoryControler.store)
router.get('/edit/:id', categoryControler.edit)
router.delete('/delete/:id', categoryControler.delete)

module.exports = router
=======
const express = require('express');
const router = express.Router();
const multipartUpload = require('../../app/Middleware/multipleUploadMiddleware');
const categoryControler = require('../../app/Controller/CategoryController');

router.get('/', categoryControler.index);
router.get('/add', categoryControler.add);
router.post('/add', multipartUpload, categoryControler.store);
router.get('/edit/:id', categoryControler.edit);
router.delete('/delete/:id', categoryControler.delete);

module.exports = router;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
