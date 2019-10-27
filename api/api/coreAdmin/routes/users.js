const express 	= require("express");

const router 	= express.Router();

const checkAuth     = require('../middlerware/check-auth');

const UserController = require('../controllers/users');

router.post('/sendmail', UserController.sendmail);

module.exports = router;