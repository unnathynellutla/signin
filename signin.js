var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;
const urll = "mongodb+srv://unellu01:aaa@cluster0.trnuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityy";
	
	
http.createServer(function (req, res) 
  {
	  
	  if (req.url == "/")
	  {
		  file = 'index.html';
		  fs.readFile(file, function(err, txt) {
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
         });
  	res.end();

}).listen(port);
