var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name : String,
    email : {type: String, unique: true},
    password : String,
    });

module.exports = mongoose.model('User', userSchema);