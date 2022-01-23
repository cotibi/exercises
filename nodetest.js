let http = require("http");
let url = require("url");
let fs = require("fs");


http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "./index.html" + q.pathname;
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
  console.log(filename);
}).listen(8080);