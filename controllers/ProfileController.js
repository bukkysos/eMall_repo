var model = require('../models/User');
var service = require('../services/ProfileService');
var cloud = require('../services/CloudinaryService');

exports.createProfile = function(req, res) {
    var data = {
        user : req.body.user,
        item : req.body.item,
        image : req.files[0].path,
        description : req.body.description,
        title : req.body.title,
        quantity : req.body.quantity
    }
    try {
        cloud.uploadToCloud(data.image).then((result)=> {
            data.image = result.url;
            data.imageID = result.ID;
        });
        return service.createProfile(req, res, data);
    } 
    catch(exception){
        console.log("Error : "+exception);
    }
}

exports.deleteImage = function (req, res, id){
    repository.getById(id, function(err, data)
    {
       try {
           if (data !== null){
               cloud.deleteFromCloud(data.ImageID).then(()=>{
                   repository.delete(id, function(err){
                            res.json({message: " deleted successfully"})
                        });
                    })
                } 
                else {
                    res.json({message: "Image not found, delete not successful"});
                }
            } 
            catch(exception) {
                console.log("Error : "+exception);
            }
        })
    }
