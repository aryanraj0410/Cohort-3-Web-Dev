const express  = require("express")

const app = express();

let errorCount = 0;
//error handling middleware

app.use("/", function(err, req, res, next){
    res.send(404).send({})
    errorCount = errorCount + 1;
})