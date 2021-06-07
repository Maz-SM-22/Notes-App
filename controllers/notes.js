const Note = require('../models/notes'); 

exports.getNote = (req, res, next)=> {
    res.render('partials/edit.hbs', {
        id: 6451, 
        title: '', 
        image: '',
        components: [''],
        category: '',
        review: ''
    })
}

exports.createNote = (req, res, next)=> {
    let note = new Note(req.body);          // Need to add some kind of condition to this so that the default note isn't overwritten
    note.save((err) => {
        if (err) {
            next(err); 
            return; 
        }
        res.redirect('/user/notes');        // This still needs editing. Still needs to be related to the user.
    }); 
}

exports.updateNote = (req, res, next)=> {
    res.status(200).json({
        success: true,
        msg: `Updated note with id ${req.params.id}`
    })
}

exports.deleteNote = (req, res, next)=> {
    res.status(200).json({
        success: true,
        msg: `Delete note with id ${req.params.id}`
    })
}