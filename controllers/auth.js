const User = require('../models/user'); 
const passport = require('passport'); 

exports.register = (req, res, next) => {
    // Check if user already exists and if it does raise error. If it doesn't create new user. 
    User.findOne({email: req.body.email}, (err, doc)=> {
        if(doc) {
            // throw new Error('This user already exists!'); 
            console.log('Something went wrong here!'); 
        } else {
            let user = new User(req.body); 
            user.generateHashPassword(req.body.password)
            user.save((err)=> {
                if(err) {
                    next(err); 
                } else {
                    req.login(user, (err)=> {
                        if(err) {
                            next(err); 
                        } 
                        res.redirect('user/notes'); 
                    }) 
                }
            }); 
        }
    });  
}

exports.login = (req, res, next) => {
    // Check if user already exists and if it does login. If it doesn't, raise an error. 
    passport.authenticate('local', {
        successRedirect: 'user/notes', 
        failureRedirect: 'choose an endpoint'
    })
}

exports.logout = (req, res, next) => {
    req.logout(); 
    res.redirect('Choose an endpoint'); 
}