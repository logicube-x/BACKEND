
import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";


const app = express();
app.use(express.json());

app.post("/api/auth/register", async(req, res) => {
  const { name, password, email } = req.body;

  const user= await userModel.create({
    email,name,password
  })


  const token = jwt.sign(
    {
      id:user._id
    },
    "596fb1e6aa1fba45fb527a3a37a1a24d895545cbe9702c17d5b322892569777aeec0c77da0a6c022cb147b60",
  );

  res.status(201).json({
    messsage: "user created successfully",
    data: {
      user: {
        name,
        email,
        id:user._id
      },
      token,
    },
  });
});
app.get("/api/auth/me",async(req,res)=>{

  const authHeader=req.headers.authorization;

  console.log(authHeader)

  const data=jwt.decode(authHeader)
  console.log(data)

  const user= await userModel.findById(data.id)
  console.log(user);
})


app.get("/api", (req, res) => {
  res.status(200).json({
    message: "welcome to the api",
  });
});

export default app;
