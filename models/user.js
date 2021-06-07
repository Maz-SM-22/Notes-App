// id --> auto-generated (no need to specify this)
// name --> STRING 
// email --> STRING (some constraints) unique! Required and should be formatted e.g. user@example.com
// notes --> ARRAY (one to many) need to bear in mind how you are going to query the data / use the data

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    name: String, 
    email: {
        required: true, 
        type: String, 
        match: [/^\S+@\S+\.\S+$/, 'Not a valid email format.'], 
        unique: true
    },
    notes: [{
        type: Schema.Types.ObjectId, 
        ref: 'Note'
//        default: []     // By default the user doesn't have any notes
    }]
})

const User = mongoose.model('User', userSchema); 

module.exports = User; 