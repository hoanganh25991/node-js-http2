'use strict';
let spdy = require('spdy'),
    fs = require('fs');

let options = {
    key: fs.readFileSync(__dirname + '/privkey.pem'),
    cert: fs.readFileSync(__dirname + '/cert.pem')
};

spdy.createServer(options, function(req, res) {
    res.writeHead(200);
    res.end('Hello world over HTTP/2');
}).listen(3000);