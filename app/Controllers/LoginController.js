const connection = require("../Models/db");
const bcrypt = require('bcryptjs')

const Login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).send('Both username and password are required');
      return;
    }
  
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
        res.status(500).send('Internal server error');
        return;
      }
      if (results.length > 0) {
        res.send('Login successful');
      } else {
        res.status(401).send('Invalid username or password');
      }
    });

  
};

module.exports = Login;
