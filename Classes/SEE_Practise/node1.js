let http = require("http");
/*let display = function () {
    console.log("Displaying data...");
};

function getdate(message) {
    console.log();
    message();
}

getdate(display);
setTimeout(display, 1000);*/

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World");
}).listen(8080);
