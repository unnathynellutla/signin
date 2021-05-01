var http = require('http');
var port = process.env.PORT || 3000;
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://unellu01:aaa@cluster0.trnuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityy";

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World");
  res.end();
}).listen(port);
