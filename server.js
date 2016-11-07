/**
* Module Dependencies
*/

var express           = require('express')
   ,app               = express()
   ,bodyParser		  = require('body-parser')
   ,
   //mongoose        = require('mongoose'),
   sendEmail         = require('./server/controllers/email_controllers');

//mongoose.connect('mongodb://localhost:27017/mean-demo');
        
app.get('/', function(req,res){
	res.sendfile("/var/www/alexanderamante.com/public_html/index.html");
});
app.use(express.static('/var/www/alexanderamante.com/public_html/'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ //to support URL-encoded bodies
	extend: true
}));
//REST API

app.post('/1/sendmail',sendEmail.send_email);
//app.get('/api/meetups',meetupsController.list);

//app.post('/api/meetups',meetupsController.create);


app.listen(1337,function(){
	console.log("running");
});
