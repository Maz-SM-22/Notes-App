// Importing packages
const express = require('express'); 
const dotenv = require('dotenv'); 
const path = require('path'); 
const exphbs = require('express-handlebars'); 
const mongoose = require('mongoose'); 
// const logger = require('./middleware/logger');
const morgan = require('morgan'); 
const app = express(); 

// Importing and setting up config
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT; 

const MONGODB_LOCAL = process.env.LOCAL_MONGODB_URL;            // Can extract these to config if you want
mongoose.connect(MONGODB_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true }); 

// For parsing request bodies
app.use(express.json()); 

if (process.env.NODE_ENV==='development') {
    app.use(morgan('dev')); 
}

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

app.use(()=> {
    let error = new Error('Page was not found.'); 
    error.statusCode = 404; 
})

// Set up the server port listener 
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});