<<<<<<< HEAD
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
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
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
<<<<<<< HEAD
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
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
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
