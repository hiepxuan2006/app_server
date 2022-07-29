<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const categoryPostController = require('../../app/Controller/api/CategoryPostController');

//
router.get('/', categoryPostController.getlist);
module.exports = router;
=======
const express = require('express')
const router = express.Router()
const categoryPostController = require('../../app/Controller/api/CategoryPostController')

// 
router.get('/', categoryPostController.getlist)
module.exports = router
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
