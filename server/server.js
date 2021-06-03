const express = require('express');
const app = express();
const environment = process.env.NODE-ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const PORT = 5000; 

app.use(express.json());

app.listen(PORT, () => {
  console.log('Server has started on Port 5000')
});
