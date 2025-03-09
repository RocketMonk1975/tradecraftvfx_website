// This script runs after the build to copy the index.html to 404.html
const fs = require('fs');
const path = require('path');

// Paths
const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

// Copy index.html to 404.html
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ Successfully copied index.html to 404.html');
} else {
  console.error('× Error: index.html not found in dist directory');
  process.exit(1);
}
