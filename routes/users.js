var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

/* GET users listing. */
router.post('/create', userController.addUser);
router.get('/', userController.getUsers);

module.exports = router;
