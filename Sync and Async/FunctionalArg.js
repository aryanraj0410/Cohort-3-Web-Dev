
function sum(a,b){
    return a +b;
}

function sub(a,b){
    return a-b;
}

function div(a,b){
    return a/b;
}

function mul(a,b){
    return a*b;
}

function doOperation(a,b,op){
    return op(a,b)
}

const ans  = doOperation(2,3,sum);
console.log(ans);