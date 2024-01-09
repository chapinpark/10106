const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const pool = require('./database'); // Adjust the path as necessary

dotenv.config();

const app = express();


// CORS configuration

app.use(cors()); // Allow all origins



// Body parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the router for the '/api/authenticate' path
const authenticateRouter = require('./api/authenticate');
app.use('/api/authenticate', authenticateRouter);

// Use the router for the '/api/answers' path
const answersRouter = require('./api/answers'); // adjust the path as necessary
app.use('/api/answers', answersRouter);

// Use the router for the '/api/update-all-tables' path
const updateTablesRouter = require('./api/updateTables');
app.use('/api', updateTablesRouter);
console.log('updateTablesRouter has been registered');

app.use(morgan('dev'));



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});