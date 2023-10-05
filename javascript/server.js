const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1', // MySQL server host
  user: 'root', // MySQL username
  password: 'Oeyshik@1#2', // MySQL password
  database: 'chess_members', // MySQL database name
  port: 3306, // MySQL port (default is 3306)
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle registration form data
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Insert registration data into MySQL
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error registering user' });
    } else {
      console.log('User registered successfully');
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
