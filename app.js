'use strict';
let spdy = require('spdy'),
    fs = require('fs');

let options = {
    key: fs.readFileSync(__dirname + '/privkey.pem'),
    cert: fs.readFileSync(__dirname + '/cert.pem')
};

spdy.createServer(options, function(req, res) {
	let stream = res
        .push('/main.js', {
            request: {
                accept: '*/\*'
            },
            response: {
                'content-type': 'application/javascript'
            }
        })
        .end('console.log("Hello World");');
    
    res.writeHead(200);
    res.end('<script src="/main.js"></script>');
}).listen(3000);