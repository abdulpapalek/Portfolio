var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

/*var postmark = require('postmark');

var client = new postmark.Client("ff45cd16-41da-4d08-9754-346579940453");
*/
module.exports.send_email = function(req,res){	

		// Use Smtp Protocol to send Email
		/*var smtpTransport = nodemailer.createTransport("SMTP",{
			service: "Gmail",
			auth: {
				user: "alexander.amante.nec@gmail.com",
				pass: "amante.ak21548"
			}
		});
		*/
	
		
		var transport = nodemailer.createTransport((smtpTransport({
		  host: "smtp.gmail.com",
		  secureConnection: false, // use SSL
		  port: 587, // port for secure SMTP
		  auth: {
			user: "alexander.amante.nec@gmail.com",
			pass: "akimbot21548"
		  }
		})));
		
		var mail = {
			from: req.body.email,
			to: "alexander.amante.nec@gmail.com",
			subject: "Notification",
			text: "From: "+ req.body.name +"\n\n"+"Email: "+req.body.email+"\n\n"+"Contact:"+
			req.body.phone+"\n\n\n\n"+req.body.message
		}
		transport.sendMail(mail, function(error,response){
			if(error){
				console.log(error);
				res.status(400);
				res.send("None shall pass:" + error);
			}else{
				console.log("Message sent" + response.message);
				res.status(200);
				res.send("Message Send:" + response.message);
			}
			
			transport.close();
		})
		
		/*client.sendEmail({
		"From": req.body.email,
		"To": "alexander.amante.nec@gmail.com",
		"Subject": "Portfolio Notification", 
		"TextBody": req.body.message
		}, function(error,result){
			if(error){
				console.error("Unable to send via postmark" + error.message);
				return;
			}
			console.info("sent to postmark for delivery");
		});
		*/
		
	}
