// Simple post-build script to copy index.html to 404.html
const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');

// Copy index.html to 404.html for SPA routing on GitHub Pages
fs.copyFile(
  path.join(distPath, 'index.html'),
  path.join(distPath, '404.html'),
  (err) => {
    if (err) {
      console.error('Error copying index.html to 404.html:', err);
      return;
    }
    console.log('Successfully created 404.html for SPA routing');
  }
);
