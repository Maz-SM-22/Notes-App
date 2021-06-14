const mongoose = require('mongoose'); 

const dbConnect = async ()=> {
    const MONGODB_LOCAL = 'mongodb://localhost:27017/notesApp'; 
    try {
        await mongoose.connect(MONGODB_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected 👽');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err); 
    }
}

module.exports = dbConnect; 