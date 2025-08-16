
// function setTimeoutPromisified(ms){
//     return new Promise(reslove => setTimeout(reslove,ms))
// }

// function afterDone(){
//     console.log("Called after 5 second");
// }

// setTimeoutPromisified(5000).then(afterDone);





function waitFor3S(reslove){
    setTimeout(reslove,3000);
}
function main(){
    console.log('This is called after 3 Second');
}
waitFor3S(main);