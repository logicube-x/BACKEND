const express=require("express");
const noteModel=require("./models/note.model")
const app=express();

app.use(express.json())








app.get("/",(req,res)=>{
    res.send("This is the home page ")
})


module.exports=app
