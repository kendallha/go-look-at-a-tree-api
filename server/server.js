const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//Routes

//get all trees

//post a new tree


app.listen(5000, () => {
  console.log('Server has started on Port 5000')
});
