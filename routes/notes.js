const express = require('express'); 
const notesController = require('../controllers/notes'); 
const {givePermission} = require('../middleware/authorisation'); 
const router = express.Router(); 

router.get('/:id', givePermission, notesController.getNote);
router.post('/', givePermission, notesController.createNote); 
router.put('/:id', givePermission, notesController.updateNote); 
router.delete('/:id', givePermission, notesController.deleteNote); 

module.exports = router; 

/* 
    If you have more than one .get() method, then you have to put the more specific paths before the more generic paths 
*/