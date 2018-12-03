var model = require('../models/User');
var service = require('../services/UserService');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    email: Joi.string().email().required()
});

exports.addUser = function(req, res){
    var data = {
        name : req.body.name,
        email : req.body.email,
        password: req.body.password
    }
    Joi.validate({username:data.username, email:data.email, password:data.password}, schema, function(err){
        if (err) {
            res.json({err:err.message});
        }
        else {
            bcrypt.hash(data.password, 10, function(err, hash){
                data.password = hash;
                try {
                    return service.addUser(req, res, data);
                }
                catch(exception) {
                    console.log("Error: "+exception);
                }
            });
        }
    });
   
}

exports.updateUser = function(req, res){
    var id = req.params.id;
    var options = req.body;
    Joi.validate({username: options.username, password: options.password}, function(err){
        if (err) { 
            res.json({err:err, message: 'user cannot be updated'});
        }
        else {
            try {
                return service.updateUser(req, res, id, options);
            }
            catch(exception) {
                console.log("Error: " +exception);
            }
        }
    });
}

exports.deleteUser = function(req, res){
    var data = {_id:req.params.id};
    try {
        return service.deleteUser(req, res, data);
    }
    catch(exception){
        console.log("Error: +exception");
    }
}

exports.getUserByParam = function(req, res){
    var options = req.query
    try {
        return service.getUsersByParam(req, res, options);
    }
    catch(exception){
        console.log("Error: "+exception)
    }
}


exports.getUsers = function(req, res){
    try {
        return service.getAllUsers(req, res);
    } 
    catch(exception){
        console.log("Error: "+ exception);
    }
}