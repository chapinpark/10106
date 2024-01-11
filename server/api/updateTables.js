const express = require('express');
const router = express.Router();
const { poolPromise }  = require('../../database'); // because this API uses promises, we need to use the promise-based pool

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
  const { questionIdMappings } = req.body;

  try {
    for (const [tableName, questionIds] of Object.entries(questionIdMappings)) {
      const existingColumns = await getColumnsFromTable(tableName);
      const columnsToAdd = questionIds.filter(id => !existingColumns.includes(id));

      for (const column of columnsToAdd) {
        try {
          await addColumnToTable(tableName, column);
        } catch (innerError) {
          if (innerError.code === 'ER_DUP_FIELDNAME') {
            console.log(`Column ${column} already exists in ${tableName}. Skipping.`);
            continue;
          } else {
            throw innerError; // rethrow the error if it's not a duplicate column error
          }
        }
      }
    }
    res.status(200).json({ message: 'All tables updated successfully' });
  } catch (error) {
    console.error('Error updating tables:', error);
    res.status(500).json({ message: 'Error updating tables', error });
  }
});


router.post('/add-user', async (req, res) => {
  const { netid, fullName } = req.body;

  try {
    // Insert into studentdata table
    let query = 'INSERT INTO studentdata (username, password, fullname) VALUES (?, ?, ?)';
    await poolPromise.query(query, [netid, netid, fullName]);

   // Test insertion into other tables
    query = 'INSERT INTO God (username) VALUES (?)';
    await poolPromise.query(query, [netid]);

 query = 'INSERT INTO FreeWill (username) VALUES (?)';
    await poolPromise.query(query, [netid]);

     query = 'INSERT INTO PersonalIdentity (username) VALUES (?)';
    await poolPromise.query(query, [netid]);

     query = 'INSERT INTO Belief (username) VALUES (?)';
    await poolPromise.query(query, [netid]);

     query = 'INSERT INTO Ethics (username) VALUES (?)';
    await poolPromise.query(query, [netid]);

    /* commenting out dynamic way of getting tables, whihc did not work on jawsdb sever
    // Get all tables except 'studentdata'
    query = 'SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = \'myphi\' AND TABLE_NAME != \'studentdata\'';
    const [tables] = await poolPromise.query(query);

    for (const table of tables) {
      const [columns] = await poolPromise.query('SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = \'myphi\' AND TABLE_NAME = ?', [table.TABLE_NAME]);
      const columnNames = columns.map(c => `\`${c.COLUMN_NAME}\``).filter(c => c !== '`username`'); // Enclose column names in backticks
      const placeholders = columnNames.map(() => '?').join(', ');
      const values = columnNames.map(() => '');

      query = `INSERT INTO ?? (\`username\`, ${columnNames.join(', ')}) VALUES (?, ${placeholders})`;
      await poolPromise.query(query, [table.TABLE_NAME, netid, ...values]);
    }
*/
    res.status(200).json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Error adding user', error });
  }
});



module.exports = router;
