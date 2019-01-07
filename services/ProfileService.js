var model = require('../models/Profile');
var usermodel = require('../models/User');
var repository = require('../repositories/UserRepository');

exports.createProfile = function(req, res, data) {
    model.findOne({user:data.user}, function(err, userData){
        if(err) {
            res.json({err: err, message: "error,profile could not be created for user "})
        } 
        else {
            if (userData !== null){
                userData.save();
            }
            else {
                model.create(data);
            }
            res.json({message: 'profile created successfully'});
        }
    });
}

