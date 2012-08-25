var fs = require('fs');

var conents = fs.readFile('/etc/hosts', function(err, contents) {
    console.log(contents);
});
console.log('Doing something else');
