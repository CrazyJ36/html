const { createServer} = require('node:http');
var fs = require('fs');

const server = createServer((req, res) => {
    console.log("REQ CODE " + req.statusCode);
    fs.readFile('index.html', function(err, html) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html' });
        res.end(html);
    });
  });
server.listen(3000, '127.0.0.1', () => {
   console.log('Server running');
});
