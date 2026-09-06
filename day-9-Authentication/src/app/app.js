import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.post("/api/auth/register", (req, res) => {
  const { name, password, email } = req.body;

  const token = jwt.sign(
    {
      name,
      email,
    },
    "596fb1e6aa1fba45fb527a3a37a1a24d895545cbe9702c17d5b322892569777aeec0c77da0a6c022cb147b60",
  );

  res.status(201).json({
    messsage: "user created successfully",
    data: {
      user: {
        name,
        email,
      },
      token,
    },
  });
});

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "welcome to the api",
  });
});

export default app;
