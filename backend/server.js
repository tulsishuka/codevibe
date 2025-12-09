const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./model/User');
app.use(cors());
app.use(express.json()); 

connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to the Express REST API');
});



app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required" });
  }
  const newUser = {
    username,
    email,
    password
  };

  try {
    const savedUser = await User.create(newUser);
    res.status(201).json({ message: "User created successfully", newUser: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
