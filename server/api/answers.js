const express = require('express');
const router = express.Router();
const { pool } = require('../database'); // Adjust the path as necessary

// GET endpoint to fetch answers for a student from a specific table
router.get('/:tableName/:username', (req, res) => {
  const { tableName, username } = req.params;

console.log(`Received GET request for table: ${tableName} and username: ${username}`); // Log the parameters

  pool.query(`SELECT * FROM ?? WHERE username = ?`, [tableName, username], (err, results) => {
      if (err) {
          console.error('Error executing query:', err); // Log the error
      return res.status(500).json({ message: 'Error retrieving answers', error: err });
    }
    res.json(results);
  });
});

// POST endpoint to update answers for a student in a specific table
router.post('/update/:tableName', (req, res) => {
  const { tableName } = req.params;
  const { username, answers } = req.body; 

  console.log(`Received POST request for table: ${tableName}`);
  console.log(`Username: ${username}`);
  console.log(`Answers: ${JSON.stringify(answers)}`); // Log the body data

  const updates = Object.entries(answers).map(([key, value]) => `${key} = ?`).join(', ');
 const values = Object.values(answers);
values.push(username); // Add the username to the values array

  const query = `UPDATE ?? SET ${updates} WHERE username = ?`;
  console.log(`SQL Query: ${query}`); // Log the SQL query

  pool.query(query, [tableName, ...values], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating answers', error: err });
    }
    res.json({ message: 'Answers updated successfully', results });
  });
});

module.exports = router;
