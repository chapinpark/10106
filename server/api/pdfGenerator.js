const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');

// PDF generation endpoint
router.post('/generate-pdf', async (req, res) => {
  const { username } = req.body;
  const baseUrl = process.env.BASE_URL; // Access the environment variable

  try {
    const browser = await puppeteer.launch({ headless: true }); // Consider headless for production
    const page = await browser.newPage();

    // Use the base URL from the environment variable
    const url = `http://localhost:3000/showAllAnswers/${username}`;
    await page.goto(url, { waitUntil: 'networkidle0' }); // Ensure this comes before waitForSelector


    // Generate screenshot for debugging
      await page.screenshot({ path: 'screenshot.png', fullPage: true });
      
      await page.setViewport({ width: 1280, height: 1024 }); // Adjust height as needed


    // Define PDF options
    const pdfOptions = {
        format: 'Letter',
        printBackground: true,
        margin: {
          top: '0mm',
          right: '0mm',
          bottom: '0mm',
          left: '0mm'
        },
        scale: 0.7,
      displayHeaderFooter: true,
      headerTemplate: '<div style="font-size:10px; text-align:center; width:100%;"></span></div>',
        footerTemplate: '<div style="font-size:10px; text-align:center; width:100%;">Page <span class="pageNumber"></span></div>'
    };

    // Generate PDF with specified options
    const pdfBuffer = await page.pdf(pdfOptions);
    
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
});

module.exports = router;
