// Importing packages
const express = require('express'); 
const dotenv = require('dotenv'); 
const path = require('path'); 
const exphbs = require('express-handlebars'); 
const app = express(); 

// Importing and setting up config
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT; 

// For parsing request bodies
app.use(express.json()); 

// Set up the template engine
// Describe the characteristics of the engine 
app.engine('hbs', exphbs({
    defaultLayout: 'layout',
    extname: '.hbs', 
    runtimeOptions: {
        allowProtoPropertiesByDefault: true, 
        allowProtoMethodsByDefault: true
    }
})); 

app.set('view engine', 'hbs'); 

// Import & define routers 
const routeUser = require('./routes/user'); 
const routeNotes = require('./routes/notes'); 
const routeViews = require('./routes/views'); 

// Mount routers 
app.use('/user', routeUser); 
app.use('/notes', routeNotes); 
app.use('/view', routeViews); 

// Static files
const publicPath = path.resolve(__dirname,'public'); 
app.use(express.static(publicPath)); 


// Set up the server port listener 
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});