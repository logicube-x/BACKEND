const express=require("express")

const app=express();
app.use(express.json())

let notes=[]

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    
    res.status(201).json({
        message:"The note is received"
    })
}) 

app.get("/notes",(req,res)=>{
    res.status(201).json({
        message:"The notes are received",
        notes: notes
    })
})


app.delete("/notes/:index",(req,res)=>{
    const index=req.params.index;

    delete notes[index] 

    res.status(200).json({
        message:"Note deleted successfully"
    })
})
module.exports=app;