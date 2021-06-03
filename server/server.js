const express = require('express');
const app = express();
const environment = process.env.NODE-ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const PORT = 5000; 

app.use(express.json());

app.get('/api/v1/trees', async (request, response) => {
  try {
    const trees =  await database('treedata').select();
    response.status(200).json(trees);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log('Server has started on Port 5000')
});
