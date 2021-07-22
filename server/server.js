const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();
const port = process.env.PORT || 3001;

const knex = require('knex');

const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js');

const environmentConfig = config[environment];
const db = knex(environmentConfig);

app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  const successMessage = 'Welcome to your Express server!';
  res.json(successMessage);
});

app.get('/users', (req, res) => {
  db.select('*').from('users')
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).send(err));
});

app.get('/login', (req, res)=>{
  let username = req.query.name
  if (username) {
    res.cookie('name', username)
    res.send(`Set cookie for ${username}`)
  } else {
    res.send('Set a username with ?name=')
  }
});

app.get('/hello', (req, res) => {
  console.log(req.cookies);
  (req.cookies) ? res.send(`Welcome back ${req.cookies.name}!`)
  : res.send('Please login!')
});

app.post('/todos', (req, res) =>
{
    db('list')
        .insert([{item: req.body.item}])
        .then(data => res.status(201).json(data))
        .catch(err => res.status(500) && console.log(err))
});

app.delete('/todos', (req, res) =>
{
    db('list')
        .where('id', req.body.id).del()
        .then(data => res.status(202).send('Todo Successfully removed'))
        .catch(err => res.status(500) && console.log(err))
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
