const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const commonConfig = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

// Add socketPath only for local (non-production) environment
if (!isProduction) {
  commonConfig.socketPath = '/Applications/MAMP/tmp/mysql/mysql.sock';
}

const pool = mysql.createPool(commonConfig);

// For promise-based queries
const mysqlPromise = require('mysql2/promise');
const poolPromise = mysqlPromise.createPool(commonConfig);

pool.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the MySQL server. Test query result:', results[0].solution);
});

module.exports = { pool, poolPromise };
