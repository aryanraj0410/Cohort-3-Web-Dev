
const fs = require('fs');

function print(err, data){
    
    console.log("Error is..")
    console.log(err);
    console.log("Data is..")
    console.log(data);
}

fs.readFile('a.txt', 'utf8', print); //async

fs.readFile('b.txt', 'utf8', print); //async

console.log("Done")