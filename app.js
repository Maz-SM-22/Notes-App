const express = require('express'); 
const dotenv = require('dotenv'); 
const app = express(); 

dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT; 

const routeUser = require('./routes/user'); 
const routeNotes = require('./routes/notes'); 

app.use('/user', routeUser); 
app.use('/notes', routeNotes); 

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});