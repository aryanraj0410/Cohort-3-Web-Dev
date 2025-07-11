function setTimeoutPromisified(duration){
    return new Promise(function(reslove){
        setTimeout(reslove, duration);
    });
}


setTimeoutPromisified(1000).then(function(){
    console.log("Hi");
    return setTimeoutPromisified(3000);
}).then(function(){
    console.log('Hello');
    return setTimeoutPromisified(5000);
}).then(function(){
    console.log("Hello there");
})