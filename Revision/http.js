let http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Request received and is running at http://localhost:3000 <br>");
    res.end("Welcome to Node.js!");
}).listen(3000);
