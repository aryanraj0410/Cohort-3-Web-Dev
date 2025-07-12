
function setTimeoutPromisified(duration){
    return new Promise(function(reslove){
        setTimeout(reslove, duration);
    });
}

async function call() {
    await setTimeoutPromisified(1000);
    console.log("Hii");
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hi there");
}
call();

console.log("After the callback")