const express = require('express'); 
const router = express.Router(); 

// Get a specific note
router.get('/:id', (req, res)=> {
    res.status(200).json({
        success: true,
        msg: `Displaying note with id ${req.params.id}`
    })
}); 

// Create a new note 
router.post('/', (req, res)=> {
    res.status(200).json({
        success: true,
        msg: `Added new note!`
    })
})

router.put('/:id', (req, res)=> {
    res.status(200).json({
        success: true,
        msg: `Updated note with id ${req.params.id}`
    })
})

router.delete('/:id', (req, res)=> {
    res.status(200).json({
        success: true,
        msg: `Delete note with id ${req.params.id}`
    })
})

module.exports = router; 