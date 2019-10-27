	const express 						= require ('express');
	const app 							= express();
	const morgan 						= require('morgan');// morgan call next function if problem occure
	const bodyParser 					= require('body-parser');// this package use to formate json data 
	const mongoose 						= require ('mongoose');
	var nodeMailer						= require('nodemailer');
	const globalVariable				= require('./nodemon');
	
	mongoose.connect('mongodb://localhost/'+globalVariable.dbname,{
		useNewUrlParser: true
	})
	mongoose.promise = global.Promise;

	app.use(morgan("dev"));
	app.use('/uploads', express.static('uploads'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Authorization"
		);
		if (req.method === "OPTIONS") {
			res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
			return res.status(200).json({});
		}
		next();
	});
	
	const usersRoutes				= require("./api/coreAdmin/routes/users.js");
	
	app.use("/api/users",usersRoutes);

	app.post('/send-email', (req, res)=> {
        console.log('send mail', req.body);
        let transporter = nodeMailer.createTransport({
            service : 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'shhribalajielectricals@gmail.com',
				pass: 'sbElectricals@123'
            }
        });
        console.log('after transport');
        let mailOptions = {
            
            from   : '"Shree Balaji Electricals" <shhribalajielectricals@gmail.com>', // sender address
            to     : req.body.email, // list of receivers
            subject: req.body.subject, // Subject line
            text   : req.body.text, // plain text body
			html   : req.body.mail // html body
        };
		console.log('after mailoption');
		
        transporter.sendMail(mailOptions, (error, info) => {
            console.log('in mail');
            if (error) {
                
                console.log("send mail error",error);
                return "Failed";
            }
            if(info){
                console.log('in info');
                // return "Success";
                res.status(200).json({
                    
                    message: "Success",
                    // return "Success",

                });
            }
    
            res.render('index');
        });
    });
	app.use((req, res, next) => {
		const error = new Error("Not found");
		error.status = 404;
		next(error);
	});

	app.use((error, req, res, next) => {
		res.status(error.status || 500);
		res.json({
				error: {
				message: error.message
				}
			});
	});

	module.exports = app;