const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const plivo = require('plivo');
const User = require('../models/users');
var request = require('request-promise');
const gloabalVariable = require('./../../../nodemon');
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.sendmail = (req, res, next) => {
	request({
		"method": "POST",
		"url": "http://qaapi.gangaexpress.in/send-email",
		"body": {
			"email": "shhribalajielectricals@gmail.com",
			"subject": req.body.companyName,
			"text": req.body.address,
			"mail": 'Hello Shree Balaji Electricals,' + '\n' + "\n <br><br> You got an request from "+req.body.firstName +' '+req.body.lastName+"<br><b>Company Name:</b> "+req.body.companyName+'<br><b>Requirements:</b> '+ req.body.requirement +'<br><b>Address:</b> '+req.body.address+'<br><b>Mobile Number:</b> '+req.body.mobileNumber+'<br> <b>Email Id:</b> '+req.body.emailId,
		},
		"json": true,
		"headers": {
			"User-Agent": "Test App"
		}
	})
	.then((sentemail) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.status(200).json({ message: "Your Request Submitted successfully" });
	})
	.catch((err) => {
		res.status(500).json({
			error: err
		});
	});

	request({
		"method": "POST",
		"url": "http://qaapi.gangaexpress.in/send-email",
		"body": {
			"email": req.body.emailId,
			"subject": "Shree Balaji Electricals",
			"text": req.body.address,
			"mail": 'Dear ' + req.body.firstName+' '+ req.body.lastName + ',' + '\n' + "\n <br><br> We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible. <br>Talk to you soon," + '\n' + '\n' + ' </b><br><br>\nRegards,<br>Team Shree Balaji Electricals, <br> Call us : +91-9810186920 <br> Email-id : shhribalajielectricals@gmail.com',
		},
		"json": true,
		"headers": {
			"User-Agent": "Test App"
		}
	})
	.then((sentemail) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.status(200).json({ message: "Mail Sent successfully" });
	})
	.catch((err) => {
		res.status(500).json({
			error: err
		});
	});
};