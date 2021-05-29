const express = require('express'); 
const notesController = require('../controllers/notes'); 
const router = express.Router(); 

router.get('/:id', notesController.getNote);
router.post('/', notesController.createNote); 
router.put('/:id', notesController.updateNote); 
router.delete('/:id', notesController.deleteNote); 

module.exports = router; 

/* 
    If you have more than one .get() method, then you have to put the more specific paths before the more generic paths 
*/