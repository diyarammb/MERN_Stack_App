const connection = require("../models/db");
const bcrypt = require('bcryptjs')

const Login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send('Both email and password are required');
      return;
    }
  
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email,password], (error, results, fields) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
        res.status(500).send('Internal server error');
        return;
      }
      if (results.length > 0) {
        res.send('Login successful');
      } else {
        // res.status(401).send('Invalid email or password');
        res.json({'msg':`email and password not valid`, status:"201",'Code':"3292"})
      }
    });

  
};

module.exports = Login;


