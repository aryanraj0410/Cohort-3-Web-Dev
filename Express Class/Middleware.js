const express = require("express")

const app = express();


//Middleware 
function isOldEnough(req, res, next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }
    else{
        res.json({
            msg : "Sorry!! You are not of the age yet to ride"
        });
    }
}


app.use(isOldEnough);

app.get("/ride1", function(req, res){
    res.json({
        msg: "You have ridden the ride 1."
    });
});

app.get("/ride2", function(req, res){
    res.json({
        msg: "You have ridden the ride 2."
    });
});

app.listen(3000);