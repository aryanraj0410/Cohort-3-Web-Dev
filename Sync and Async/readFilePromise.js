const fs = require('fs');

function readFile(){
    return new Promise(function(reslove, reject){
        fs.readFile('ab.txt', 'utf8', function(err,data){
            if(err){
                reject('File not found');
            }else{
                reslove(data);
            }
        })
    });
}

readFile().then(function(x){
    console.log('File has been read.');
})
.catch(function(e){
    console.log('Error!')
    console.log(e);
})