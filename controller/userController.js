var model = require('../models/User');

exports.addUser = function(req, res){
    var data = {
        name : req.body.name,
        email : req.body.email,
        password: req.body.password
    }
}

exports.updateUser = function(req, res){
    var id = req.params.id;
    var options = req.body
};

exports.deleteUser = function(req, res){
    var data = {_id:req.params.id}
}

exports.getUserByParam = function(req, res){
    var options = req.query
}
