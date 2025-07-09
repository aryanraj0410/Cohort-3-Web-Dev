
const fs = require('fs');

console.log("First file is loading....");
const file1 = fs.readFileSync('a.txt', 'utf8');
console.log(file1);
console.log("Second file is loading...");
const file2 = fs.readFileSync('b.txt', 'utf8');
console.log(file2);