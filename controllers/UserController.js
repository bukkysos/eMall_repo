var model = require('../models/User');
var service = require('../services/UserService');

exports.addUser = function(req, res){
    var data = {
        name : req.body.name,
        email : req.body.email,
        password: req.body.password
    }
    return service.addUser(req, res, data);
}

exports.updateUser = function(req, res){
    var id = req.params.id;
    var options = req.body;
    try {
        return service.updateUser(req, res, id, options)
    }
    catch(exception){
        console.log("Error: " +exception);
    }
};

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