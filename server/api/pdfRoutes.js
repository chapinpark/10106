const express = require('express');
const router = express.Router();
const generatePDF = require('./pdfGenerator');

// GET endpoint to generate a PDF for a student's answers
router.get('/generate-pdf/:tableName/:username', async (req, res) => {
    const { tableName, username } = req.params;

    try {
        const pdf = await generatePDF(username, tableName);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ message: 'Error generating PDF', error });
    }
});

module.exports = router;
