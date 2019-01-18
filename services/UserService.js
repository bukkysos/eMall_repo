var repository = require('../repositories/UserRepository');

exports.addUser = function(req, res, data){
    repository.add(data, function(err, user){
        if (err) res.json({err:err, message:'error, user cannot be created'});
        res.json({message:'user created successfully'});
    });
}





exports.getAllUsers = function(req, res){
    repository.getAll({}, function(err, data){
        if (err) res.json({err:err, message:'sorry, an error occured while retrieving records'});
        res.json(data);
    });
}

exports.updateUser = function(req, res, id, options){
    repository.update(id, options, function(err){
        if (err) res.json({err:err, message:'error, user cannot be updated'});
        res.json({message:'user updated successfully'});
    });
}

exports.deleteUser = function(req, res, data){
    repository.delete(data, function(err){
        if (err) res.json({err:err, message:'sorry, user cannot be deleted'});
        res.json({message:'user deleted successfully'});
    });
}

exports.getUsersByParam = function(req, res, options){
    repository.getAll(options, function(err, users){
        if (err) res.json({err:err, message: 'error, could not retrieve user record'});
        res.json(users);
    })
}