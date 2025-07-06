// import fs module
const fs = require('fs');

// import path module
const path = require('path');   // it make it easy to deal with paths of directory instead of simple concatenation

console.log(__dirname);  // gives you directory name in node

console.log(__dirname + '/index.js');

console.log(path.join(__dirname, 'index.js'));   // to join multiple strings