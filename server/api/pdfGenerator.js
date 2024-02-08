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

     // Here's where you add the event listener for console messages
  page.on('console', msg => {
    console.log(`PAGE LOG: ${msg.text()}`);
  });

  // Use the environment variable to set the URL
  const reactAppUrl = process.env.REACT_APP_URL || 'http://localhost:3000';
  await page.goto(`${reactAppUrl}/showAllAnswers/${username}`, {
    waitUntil: 'networkidle0', // Wait for the page to load completely
  });
    
    
    // Use the base URL from the environment variable
   // const url = `http://localhost:3000/showAllAnswers/${username}`;
   // await page.goto(url, { waitUntil: 'networkidle0' }); // Ensure this comes before waitForSelector

    
    // Generate screenshot for debugging
     // await page.screenshot({ path: 'screenshot.png', fullPage: true });
      
     // await page.setViewport({ width: 1280, height: 1024 }); // Adjust height as needed


    // Define PDF options
    const pdfOptions = {
        format: 'Letter',
        printBackground: true,
        margin: {
          top: '0.75in',
          right: '0.75in',
          bottom: '0.75in',
          left: '0.75in'
        },
        scale: 0.8,
      displayHeaderFooter: true,
      headerTemplate: '<div style="font-size:10px; text-align:center; width:100%;"></span></div>',
        footerTemplate: '<div style="font-size:12px; font-style:sans; text-align:center; width:100%;"> <span class="pageNumber"></span></div>'
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
