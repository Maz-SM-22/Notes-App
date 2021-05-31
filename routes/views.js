const express = require('express'); 
const viewsController = require('../controllers/views'); 
const router = express.Router(); 

router.get('/create', viewsController.viewNoteCreated);

module.exports = router; 