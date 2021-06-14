exports.givePermission = (req, res, next) => {
    if(req.isAuthenticated()) {
        next(); 
    }
    res.render('partials/error.hbs', {
        statusCode: 401, 
        message: 'You do not have permission to view this page'
    }); 
}