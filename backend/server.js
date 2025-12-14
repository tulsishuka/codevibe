const express = require('express');
const app = express();
const port = 3000;


const cors = require('cors');
const connectDB = require('./config/db');

app.use(cors());
app.use(express.json()); 



connectDB();


app.use('/auth', require('./routes/auth'));
app.use('/protected', require('./routes/protected'));


app.get('/', (req, res) => {
    res.send('Welcome to the Express REST API');
});


  

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
