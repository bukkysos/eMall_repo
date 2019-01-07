var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username : String,
    email : {type: String, unique: true},
    password : String,
    // title: String,
    // description : String,
    // quantity: Number,
    // image: String,
    // item : String
    // profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
    });

module.exports = mongoose.model('User', userSchema);