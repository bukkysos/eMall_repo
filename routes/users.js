var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');
var uploadService = require('../services/uploadService');
var profileController = require('../controllers/profileController')

/* GET users listing. */
router.post('/create', userController.addUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getUsers);
router.post('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/search/?options', userController.getUserByParam);
router.post('/profile', uploadService.upload.any(), profileController.createProfile)

module.exports = router;
