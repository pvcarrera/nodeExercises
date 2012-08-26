var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request,response){
    response.writeHead(200, { 'Conent-Type': 'text/plain' });
    fs.readFile('./index.html', function(err, contents){
      response.write(contents);
      response.end();
    });
});

server.on('request', function(request, response) {
    console.log("New request coming in...");
});

server.listen(8080)

console.log('Listening on port 8080...');
