var repository = require('../repositories/UserRepository');

exports.addUser = function(req, res, data){
    repository.add(data, function(err, user){
        if (err) res.json({err:err, message:'error, user cannot be created'});
        res.json({message:'user created successfully'});
    });
}

exports.getAllUsers = function(req, res){
    repository.getAll({},'-password -__v', function(err, data){
        if (err) res.json({err:err, message:'sorry, an error occured while retrieving records'});
        res.json(data);
    })
}