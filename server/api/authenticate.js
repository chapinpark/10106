const express = require('express');
const router = express.Router();
const { pool } = require('../../database'); // Adjust the path as necessary

// POST endpoint for authentication
router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  // Query the database for the user
  pool.query(
    'SELECT password, fullname FROM `studentdata` WHERE username = ?',
    [username],
    (err, results) => {
      if (err) {
        return res.status(500).send('Error on the server.');
      }

      if (results.length === 0) {
        return res.status(404).send('User not found.');
      }

      // Check if the password matches
      const storedPassword = results[0].password;
      const fullName = results[0].fullname; // Get the full name
      if (password !== storedPassword) {
        return res.status(401).send('Password is incorrect.');
      }

      // Authentication successful
      res.status(200).json({ message: 'Login successful!', fullName });
    }
  );
});

module.exports = router;
