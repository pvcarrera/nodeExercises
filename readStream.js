var fs = require('fs');
var file = fs.createReadStream('index.html');

file.pipe(process.stdout, { end: false });
console.log('--File Complete--');
