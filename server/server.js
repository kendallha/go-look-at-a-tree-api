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

app.post('/api/v1/trees', async (request, response) => {
  const { name, scientific_name } = request.body;
  const tree = request.body;

  if (!name) {
    response.status(422).json({error: `Missing property of name. Expected format: {name: <String>, scientific_name: <String>}`})
  } else if (!scientific_name) {
    response.status(422).json({error: `Missing property of scientific name. Expected format: {name: <String>, scientific_name: <String>}`})
  } 
  try {
    const id = await database('trees').insert(tree, 'id');
    response.status(201).json({ id });
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.delete('/api/v1/trees/:id', async (request, response) => {
  const { id } = request.params;
  try {
  const deletedRecord = await database('trees').where({ id }).del();
  if (!deletedRecord) {
    response.status(404).json({error: `Tree not found.`});
  }
  response.status(201).json(`${deletedRecord} tree(s) deleted.`);
  } catch (error) {
    response.status(500).json(error.message);
  }
})

app.listen(PORT, () => {
  console.log('Server has started on Port 5000')
});
