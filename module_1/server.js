// Node runs on a server - not in a browser (backend not frontend)
// console is in terminal window
console.log('Hello World');
// global object instead of window object
//console.log(global);
// has common core modules we will explore - relate to OS/File system (CommonJS modules instead of ES6 modules)
// missing some JS APIs like fetch

const os = require('os');
const path = require('path');
const math = require('./math');
// OR
const { add, subtract, multiply, divide } = require('./math');

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
