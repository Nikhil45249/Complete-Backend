const express = require('express')
const app = express()

app.use(express.json())
notes=[]
// this api will create notes to server
app.post('/notes',function(req,res){
    notes.push(req.body)
    res.status(201).json({
        message:"notes created successfully"
    })

})

// this api fetch notes from server
app.get('/notes',function(req,res){
    res.status(201).json({
        message:"notes fetch successfully",
        notes:notes
    })
})

// delete notes from server
app.delete('/notes/:id',function(req,res){
    const id = req.params.id
    delete notes[id]
    res.status(201).json({
        message:"delete notes successfully"
    })
})

// updated notes from server which is present 
app.patch('/notes/:id',function(req,res){
    const id= req.params.id
    const description = req.body.description
    notes[id].description=description
    res.status(201).json({
        message:"updated notes"
    })
})



module.exports=app