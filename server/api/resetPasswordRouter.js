const express = require('express');
const router = express.Router();
const { pool } = require('../../database'); // Adjust the path as necessary

// POST endpoint for password reset
router.post('/', (req, res) => {
  const { username, newPassword } = req.body;

  if (!username || !newPassword) {
    return res.status(400).send('Username and new password are required');
  }

  // Optional: Add more password validation here if needed

  // Update the password in the database
  pool.query(
    'UPDATE `studentdata` SET password = ? WHERE username = ?',
    [newPassword, username],
    (err, result) => {
      if (err) {
        return res.status(500).send('Error updating password on the server.');
      }

      if (result.affectedRows === 0) {
        return res.status(404).send('User not found.');
      }

      // Password update successful
      res.json({ message: 'Password successfully updated.' });
    }
  );
});

module.exports = router;
