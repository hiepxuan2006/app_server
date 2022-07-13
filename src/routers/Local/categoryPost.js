<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const categoryPostControler = require('../../app/Controller/CategoryControllerPost')
router.get('/', categoryPostControler.index)
router.get('/add', categoryPostControler.add)
router.post('/add', categoryPostControler.store)
// router.get('/edit/:id', categoryPostControler.edit)
// router.delete('/delete/:id', categoryPostControler.delete)

module.exports = router
=======
const express = require('express');
const router = express.Router();
const categoryPostControler = require('../../app/Controller/CategoryControllerPost');
router.get('/', categoryPostControler.index);
router.get('/add', categoryPostControler.add);
router.post('/add', categoryPostControler.store);
// router.get('/edit/:id', categoryPostControler.edit)
// router.delete('/delete/:id', categoryPostControler.delete)

module.exports = router;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
