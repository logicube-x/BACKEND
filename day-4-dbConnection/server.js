const express=require("express");
const mongoose=require("mongoose")

const app=(express())

const dbConnect= async()=>{
  try{
    await mongoose.connect(
      "mongodb+srv://arshaminmay2006_db_user:Arsh%4012345@cohort-cluster.fwykjhh.mongodb.net/",
    );
    console.log("mongodb connected");
  }
  catch(error){
    console.log("error while connecting to bd",error);
  }
}


dbConnect();


app.get("/",(req,res)=>{
    res.send('done ')
})

app.listen(3000,()=>{
    console.log('The server is running on port 3000...');
})

