// Dunno if we need to import anything first 
// Maybe import notes 

// exports.getNote = (req, res, next)=> {
//     res.status(200).json({
//         success: true,
//         msg: `Displaying note with id ${req.params.id}`
//     })
// }

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
    res.status(200).json({
        success: true,
        msg: `Added new note!`
    })
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