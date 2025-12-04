
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

let users = []; 

app.get('/', (req, res) => {
  res.json(users);
});

app.post('/', (req, res) => {
  const { form } = req.body;  
  users.push(form);
  res.json({
    status: "success",
    data: form
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
