// Importing packages
const express = require('express'); 
const dotenv = require('dotenv'); 
const path = require('path'); 
const hbs = require('express-handlebars'); 
const app = express(); 

// Importing and setting up config
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT; 

// For parsing request bodies
app.use(express.json()); 

// Set up the template engine
// Describe the characteristics of the engine 
app.engine('hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs', 
    runtimeOptions: {
        allowProtoPropertiesByDefault: true, 
        allowProtoMethodsByDefault: true
    }
})); 

app.set('view engine', 'hbs'); 

// Do I need this? 
app.get('/', (req, res)=> {
    res.render('/layout.hbs', {}); 
})

// Import & define routers 
const routeUser = require('./routes/user'); 
const routeNotes = require('./routes/notes'); 

// Mount routers 
app.use('/user', routeUser); 
app.use('/notes', routeNotes); 

// Static files
const publicPath = path.resolve(__dirname,'public'); 
app.use(express.static(publicPath)); 


// Set up the server port listener 
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});