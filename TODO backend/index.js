

const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Hello Aryan this side.")
})
app.get('/aryan', function(req, res){
    res.send("OOHH you came here.")
})

app.listen(8080);