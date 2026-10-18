// This file is used to create a server
const express = require('express')
const app = express()
app.use(express.json())

const notes=[]

app.post('/notes',function(req,res){
    notes.push(req.body) //req.body with this data come from frontend to server 
    res.status(201).json({
        "message":"note created successfully"
    })
})
app.get('/notes',function(req,res){
    res.status(200).json({
        "message":"notes created successfully",
        notes:notes
    })
})
app.delete('/notes/:id',function(req,res){
    const id = req.params.id
    delete notes[id]
    res.status(200).json({
        "message":"note deleted successfully"
    })

})
app.patch('/notes/:id',function(req,res){
    const id= req.params.id
    const description = req.body.description

    notes[id].description=description
    res.status(200).json({
        message:"notes updated succefully"
    })
})
module.exports=app