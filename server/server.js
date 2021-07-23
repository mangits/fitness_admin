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
app.use(express.json());

app.get('/', (req, res) => {
  const successMessage = 'Welcome to your Express server!';
  res.json(successMessage);
});

app.get('/users', (req, res) =>
{
  let user = req.query.user;
  if (user) {
  db('users').where('username', user)
  .then((data) => res.status(200).json(data))
  .catch((err) => res.status(500).send(err));
  } else {
  db.select('*').from('users')
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).send(err));
}});

app.get('/login', (req, res)=>
{
  let username = req.query.name
  let message = `Cookie set for ${username}`
  if (username) {
    res.cookie("name", username)
    res.send(JSON.stringify(message))
  } else {
    res.send("Set a username with ?name=")
  }
});

app.post('/login', (req, res)=>
{
  let data = req.body
  console.log(req.body)
  db('users')
        .insert({ username: data.username, email: data.email, password: data.password, admin: data.admin })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500) && console.log(err))
});

app.get('/hello', (req, res) =>
{
  console.log(req.cookies);
  let message = `Welcome back ${req.cookies.name}!`
  (req.cookies) ? res.send(JSON.stringify(message))
  : res.send("Please login!")
});

app.put('/users', (req, res) =>
{
  let data = req.body
    db('users')
        .where('id', data.id)
        .update({username: data.username, email: data.email, password: data.password, admin: data.admin})
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500) && console.log(err))
});

app.delete('/users', (req, res) =>
{
    db('users')
        .where('id', req.body.id).del()
        .then(data => res.status(200).send("Todo Successfully removed"))
        .catch(err => res.status(500) && console.log(err))
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
