// Dunno if we need to import anything first 
// Maybe import notes 

exports.getNote = (req, res, next)=> {
    if (!id) {
        next(new Error('Note cannot be found')); 
    }
    notes.filter((note)=> {
        return note.id === req.params.id; 
    })
}

exports.createNote = (req, res, next)=> {
    if (!req.body.title) {
        next(new Error('Title is required to create a new note')); 
    }
    const idArray = []; 
    for (let note of notes) {
        idArray.push(note.id)
    }
    const maxIdValue = Math.max(idArray); 
    notes.append(
        {
            id: maxIdValue + 1,
            title: req.body.title,
            image: req.body.image,
            components: req.body.components,
            category: req.body.category,
            review: req.body.review
        }
    )
}

exports.updateNote = (req, res, next)=> {
    if (!id) {
        next(new Error('Note cannot be found')); 
    }
    const note = notes.filter((note)=> {
        return note.id === req.params.id; 
    })
    note.doSomethingHere(); 
}