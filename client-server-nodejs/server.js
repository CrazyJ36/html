const https = require('https');
const express = require('express');
const fs = require('fs');

const app = express();

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/', function(request, response) {
    response.json("ran Code From Server.")
});

https.createServer(
    { 
        key: fs.readFileSync('C:\\Apache24\\conf\\crazyj36.rocks.key'),
        cert: fs.readFileSync('C:\\Apache24\\conf\\crazyj36.rocks.pem')
    }, app
).on('connection', function(socket) {
    console.log('user connected!');
}).listen(3000, () => {
    console.log('server running');
});

