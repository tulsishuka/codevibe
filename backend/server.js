const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json()); 

users = []; 

app.get('/', (req, res) => {
    res.send('Welcome to the Express REST API');
});

// POST: Create new user
app.post('/register', (req, res) => {
  console.log("Received request body:", req.body);
  const { username, email,password } = req.body;
console.log("haga",req.body);
  // Validate input data
  if (!username || !email  || !password) {
    return res.status(400).json({ message: 'Name and email Password are required' });
  }
console.log("haga1",req.body);
  const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

  const newUser = {
    id: newId,
    username,
    email
  };
console.log("haga2",newUser);
  users.push(newUser);

  res.status(201).json({ message: 'User created successfully', newUser });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
