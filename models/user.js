const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const crypto = require('crypto'); 

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
        ref: 'Note',
        default: []     // By default the user doesn't have any notes
    }], 
    hash: String,
    salt: String
})

userSchema.methods.generateHashPassword = (password)=> {
    this.salt = crypto.randomBytes(16).toString('hex'); 
    this.hash = crypto.pbkdf2Sync(password, this.salt, 4000, 64, 'SHA512').toString('hex'); 
};
userSchema.methods.validatePassword = (password)=> {
    let hash = crypto.pbkdf2Sync(password, this.salt, 4000, 64, 'SHA512').toString('hex'); 
    return hash===this.hash;
};

const User = mongoose.model('User', userSchema); 

module.exports = User; 