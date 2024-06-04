const express = require('express');
const Login = require('./app/controllers/LoginController')
const app = express();
const bodyParser = require('body-parser'); 
const bcrypt = require('bcryptjs');

const port = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/users/', (req, res) => {
  Login(req,res)
  });
  
  app.listen(port, () => {
    console.log(`Pos app listening at http://localhost:${port}`);
  });