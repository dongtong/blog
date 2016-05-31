var hello = "Hello Node.js";

console.log(`Learn ${hello}`);

console.log(__dirname);

console.log(__filename);

var path = require('path');

console.log(`file name is ${path.basename(__filename)}`);
