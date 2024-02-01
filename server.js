const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path'); // Added to use path module
const pool = require('./database'); // Adjust the path as necessary

dotenv.config();

const app = express();

// CORS configuration
app.use(cors()); // Allow all origins

// Body parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Morgan middleware for logging
app.use(morgan('dev'));

// Use the router for the '/api/authenticate' path
const authenticateRouter = require('./server/api/authenticate');
app.use('/api/authenticate', authenticateRouter);

// Use the router for the '/api/answers' path
const answersRouter = require('./server/api/answers'); // adjust the path as necessary
app.use('/api/answers', answersRouter);

// Use the router for the '/api/update-all-tables' path
const updateTablesRouter = require('./server/api/updateTables');
app.use('/api', updateTablesRouter);

// use the router to reset password
const resetPasswordRouter = require('./server/api/resetPasswordRouter'); // Adjust 
app.use('/api/reset-password', resetPasswordRouter);

// Import the PDF generation route
const pdfGeneratorRouter = require('./server/api/pdfGenerator');
app.use('/api', pdfGeneratorRouter);



// Serve React App in production

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
