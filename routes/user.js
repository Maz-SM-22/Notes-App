const express = require('express'); 
const userController = require('../controllers/user'); 
const router = express.Router(); 

router.get('/notes', userController.displayAllNotes);

module.exports = router; 