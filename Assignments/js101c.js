function canVote(age){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

let vote = canVote(18);
console.log(vote);