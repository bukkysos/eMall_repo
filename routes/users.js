var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

/* GET users listing. */
router.post('/create', userController.addUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getUsers);
router.post('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.get('/search', userController.getUserByParam);

module.exports = router;
