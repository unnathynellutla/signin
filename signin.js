var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var port = process.env.PORT || 3000;
const { MongoClient } = require("mongodb");
const urll = process.env.MONGODB_URLL;

http.createServer(function (req, res) {
if (req.url == "/")
{
	file = 'index.html';
	fs.readFile(file, function(err, txt) {
		if(err) { return console.log(err); }
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(txt);
	});
}
else if (req.url == "/process")
{
	res.writeHead(200, {'Content-Type':'text/html'});
	console.log("Process the form");
	pdata = "";
	req.on('data', data => {
           pdata += data.toString();
			document.write(pdata);
    });
}
setTimeout(function(){res.end();}, 2000);
}).listen(port);
