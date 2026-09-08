const express=require("express");
const { use } = require("react");

const app=express();

app.use(express.json());


app.post("/create",(req,res)=>{
    res.send(req.body)
})

app.get("/",(req,res)=>{
    let body=req.body;

})



app.listen(2000,()=>{
    console.log("server is running on port 2000...");
})