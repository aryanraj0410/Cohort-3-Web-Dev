

console.log("Hii there");

function timeout(){
    console.log("Click the button");
}

setTimeout(timeout, 5000);

console.log("Welcome to loupe.")
let a = 0;
for(let i=0;i<=100000000;i++){
    a = a+1;
}

console.log("Entensive operation is done.") // this will be called firstt before the timeout function as the cpu is busy duing the 
// extensive operation and will call the timeout after the thread is free