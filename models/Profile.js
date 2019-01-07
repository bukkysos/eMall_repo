var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
 user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 image: String,
 item: String,
 description: String,
 title: String,
 Quantity: Number
});

module.exports = mongoose.model('Profile', profileSchema);