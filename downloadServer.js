var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'image/png'});

    var file = fs.createReadStream('icon.png');
    file.pipe(response)
}).listen(8080);
