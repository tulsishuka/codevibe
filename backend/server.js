const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./model/User');
const bcrypt = require('bcrypt');
app.use(cors());
app.use(express.json()); 

connectDB();
app.get('/', (req, res) => {
    res.send('Welcome to the Express REST API');
});

app.post("/register", async (req, res) => {

   try {
          const { name, email, password } = req.body;
            let user = await User.findOne({ email });
          if (user) return res.status(400).json({ message: "User already exists" });
            const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
            newUser = new User({ name, email, password: hashedPassword });
          await newUser.save();
  
          res.status(201).json({ message: "User registered successfully" });
      } catch (error) {
          res.status(500).json({ message: "Server error" });
      }
  });
  


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
