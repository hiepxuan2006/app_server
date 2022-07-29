<<<<<<< HEAD
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
=======
const express = require('express')
const router = express.Router()
const categoryControler = require('../../app/Controller/CategoryController')
router.get('/', categoryControler.index)
router.get('/add', categoryControler.add)
router.post('/add', categoryControler.store)
router.get('/edit/:id', categoryControler.edit)
router.delete('/delete/:id', categoryControler.delete)

module.exports = router
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
