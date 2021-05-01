var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var port = process.env.PORT || 3000;
const { MongoClient } = require('mongodb');
const urll =process.env.MONGODB_URLL;

http.createServer(function (req, res) {
if (req.url == "/")
{
		file = 'index.html';
		fs.readFile(file, function(err, txt) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(txt);
		});
}

	res.end();
}).listen(port);
