var model = require('../models/Profile');
var repository = require('../repositories/BaseRepository');

function ProfileRepository(){

}
ProfileRepository.prototype = BaseRepository(model);

module.exports = new ProfileRespository();