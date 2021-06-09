const Note = require('../models/notes'); 

exports.getNote = (req, res, next)=> {
    Note.findById(req.params.id)
        .then(
            note => res.render('partials/edit.hbs', {note: note})
        ).catch(
            // next(new Error(*custom error*))
            err => res.render('partials/edit.hbs', {error: err})        // Change this view to error view
        ); 
}

exports.createNote = (req, res, next)=> {
    let note = new Note(req.body);          // Need to add some kind of condition to this so that the default note isn't overwritten
    note.save((err) => {
        if (err) {
            next(err);                      // This error is for problems related to the database
        } else {
            let user = req.user; 
            user.notes.push(note._id); 
            user.save((err) => {
            if(err) {
                next(err); 
                return; 
            }
            res.redirect('/user/notes');
            })
        }
    });
}                        // This still needs editing. Still needs to be related to the user. 

exports.updateNote = (req, res, next)=> {
    Note.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }, ()=> {
        if(note) {
            res.redirect('user/notes'); 
        } else {
            console.log('This note does not exist :('); 
        }
    })

    // Check composition because there could be issues updating it since it's an array!! 

}

exports.deleteNote = (req, res, next)=> {
    let user = req.user; 
    Note.findByIdAndDelete(req.params.id)
    // , (err, user)=> {
    //     console.log('Hello');
    //     if(err) {
    //         console.log(err); 
        // } else {
        //     user.notes.pull(req.params.id); 
        //     user.save(); 
        //     console.log('User has been saved')
        //     res.render('partials/TBD.hbs'); 
        // }
  //  }); 
}