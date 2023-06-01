/* https://www.w3schools.com/nodejs/nodejs_email.asp */ 

// TODO

var http = require("http");
var nodemailer = require('nodemailer');

//create a server object:
http
    .createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        });
        
        var mailOptions = {
            from: '',
            to: '',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
        res.end("done");
    })
    .listen(8081); //the server object listens on port 8080