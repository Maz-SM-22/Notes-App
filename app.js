// Importing packages
const express = require('express'); 
const dotenv = require('dotenv'); 
const path = require('path'); 
const exphbs = require('express-handlebars'); 
// const logger = require('./middleware/logger');
const morgan = require('morgan'); 
const session = require('express-session'); 
const mongoose = require('mongoose'); 
const MongoStore = require('connect-mongo');
const passport = require('passport'); 
require('./config/passport'); 
const dbConnect = require('./config/dbConfig'); 
const app = express(); 

// Importing and setting up config
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT || 3000; 
const mongoStore = MongoStore.create({ 
    mongoUrl: process.env.MONGO_URL, 
    collection: 'sessions' 
}); 

app.set('trust proxy', 1); 
app.use(session({
    secret: process.env.SECRET,
    resave: false, 
    saveUninitialized: true, 
    store: mongoStore, 
    cookie: { maxAge: 86400000 }     // 1 day
}))
app.use(passport.initialize()); 
app.use(passport.session());                // Store the session in the database. Necessary if your app uses persistent login sessions

dbConnect();

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
const routeAuth = require('./routes/auth'); 

// Mount routers 
app.use('/user', routeUser); 
app.use('/notes', routeNotes); 
app.use('/view', routeViews); 
app.use('/auth', routeAuth); 

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