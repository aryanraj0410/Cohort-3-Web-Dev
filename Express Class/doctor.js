const express = require("express");

const app = express();

const users = [{
    name: "Aryan",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res){
    const aryanKidneys = users[0].kidneys;
    const numberofKidneys = aryanKidneys.length;
    let numberofHealthyKidneys = 0;
    for(let i=0; i<aryanKidneys.length;i++){
        if(aryanKidneys[i].healthy){
            numberofHealthyKidneys = numberofHealthyKidneys + 1;
        }
    }
    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys,
    })

})


app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done!"
    })

})

app.put("/", function(req, res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})


app.delete("/", function(req, res){
    const newKidney = [];
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidney.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidney;
    res.json({
        msg:"Done"
    })
})
app.listen(3000);