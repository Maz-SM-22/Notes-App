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
    let note = new Note(req.body); 
//    note.title = req.body.title; 
    note.save(); 
    res.render('partials/create.hbs')
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