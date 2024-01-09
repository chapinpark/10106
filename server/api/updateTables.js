const express = require('express');
const router = express.Router();
const { poolPromise }  = require('../database'); // because this API uses promises, we need to use the promise-based pool

// Helper function to get columns from a table
const getColumnsFromTable = async (tableName) => {
  const query = 'SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = \'myphi\' AND TABLE_NAME = ?'; // Replace 'your_database_name' with your actual database name
  const [columns] = await poolPromise.query(query, [tableName]);
  return columns.map(column => column.COLUMN_NAME);
};

// Helper function to add a column to a table
const addColumnToTable = async (tableName, columnName) => {
  const query = 'ALTER TABLE ?? ADD COLUMN ?? TEXT';
  await poolPromise.query(query, [tableName, columnName]);
};

// POST endpoint to update all tables based on question IDs
router.post('/update-all-tables', async (req, res) => {
  console.log('Update all tables endpoint hit');
  const { questionIdMappings } = req.body; // Expected to be an object with tableName as key and array of questionIds as value

  try {
    for (const [tableName, questionIds] of Object.entries(questionIdMappings)) {
      const existingColumns = await getColumnsFromTable(tableName);
      const columnsToAdd = questionIds.filter(id => !existingColumns.includes(id));

      for (const column of columnsToAdd) {
        await addColumnToTable(tableName, column);
      }
    }
    res.status(200).json({ message: 'All tables updated successfully' });
  } catch (error) {
    console.error('Error updating tables:', error);
    res.status(500).json({ message: 'Error updating tables', error });
  }
});

module.exports = router;
