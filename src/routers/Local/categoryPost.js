<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const categoryPostControler = require('../../app/Controller/CategoryControllerPost');
router.get('/', categoryPostControler.index);
router.get('/add', categoryPostControler.add);
router.post('/add', categoryPostControler.store);
// router.get('/edit/:id', categoryPostControler.edit)
// router.delete('/delete/:id', categoryPostControler.delete)

module.exports = router;
=======
const express = require('express')
const router = express.Router()
const categoryPostControler = require('../../app/Controller/CategoryControllerPost')
router.get('/', categoryPostControler.index)
router.get('/add', categoryPostControler.add)
router.post('/add', categoryPostControler.store)
// router.get('/edit/:id', categoryPostControler.edit)
// router.delete('/delete/:id', categoryPostControler.delete)

module.exports = router
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
