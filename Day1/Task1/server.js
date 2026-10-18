const express = require('express')
const app= express()

app.get('/',function(req,res){
    res.send("Hlo Nikhil")
})

app.get('/about',function(req,res){
    res.send("About Page")
})

app.listen(3000)