<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const categoryPostController = require('../../app/Controller/api/CategoryPostController')

// 
router.get('/', categoryPostController.getlist)
module.exports = router
=======
const express = require('express');
const router = express.Router();
const categoryPostController = require('../../app/Controller/api/CategoryPostController');

//
router.get('/', categoryPostController.getlist);
module.exports = router;
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
