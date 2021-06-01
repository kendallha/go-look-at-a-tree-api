const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');


//middleware
app.use(cors());
app.use(express.json());

//Routes

//get all trees
app.get('/trees', (req, res) => {
  db.getTrees()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//post a new tree
app.post('/trees', (req, res) => {
  db.createTree(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.listen(5000, () => {
  console.log('Server has started on Port 5000')
});
