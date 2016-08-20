var express = require("express")
var http = require('http');

var port = process.env.PORT;
var hostname = process.env.IP;

var app = express();

app.use(function(req,res,next){
    console.log(req.headers)
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<html><body><h1>Hello World LA PUTA MADRES</h1></body></html>')
});

var server = http.createServer(app);

 server.listen(port,hostname,function(){
        console.log('Server running at http://${hostname}:${port}/'); 
    });