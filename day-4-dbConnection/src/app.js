const express=require('express')
const connectDb=require('./config/db');
const { mongo } = require('mongoose');
const notesModel = require('./config/models/note.model');

const app=express();
app.use(express.json());

connectDb()

app.get('/',(req,res)=>{
    res.send("i am here")
})

app.post('/create', async(req,res)=>{
    let {title,description}=req.body;

    const newNote= await notesModel.create({
        title,
        description,
    })

    res.send({
        success:true,
        message:'notes created successfully',
        data:newNote
    })
})

module.exports=app;