const express = require('express');
const app = express();
const cors = require('cors');
const { request } = require('http');
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
const PORT = 5000; 

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/api/v1/trees', async (request, response) => {
  try {
    const trees =  await database('trees').select();
    response.status(200).json(trees);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log('Server has started on Port 5000')
});
