var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;
const { MongoClient } = require("mongodb");
const urll ="mongodb+srv://unellu01:aaa@cluster0.trnuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

http.createServer(function (req, res) {
	file = "index.html";
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("Hello World");
	res.end();
}).listen(port);
