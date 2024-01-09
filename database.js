const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
let pool, poolPromise, config;

if (isProduction) {
    // In production (Heroku), use JawsDB URL
    config = process.env.JAWSDB_URL;
} else {
    // In development, use local database configuration
    config = {
        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    };
}

pool = mysql.createPool(config);

// For promise-based queries
const mysqlPromise = require('mysql2/promise');
poolPromise = mysqlPromise.createPool(config);

pool.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the MySQL server. Test query result:', results[0].solution);
});

module.exports = { pool, poolPromise };
