// Create 404.html for SPA routing on GitHub Pages
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

try {
  // Copy index.html to 404.html
  fs.copyFileSync(
    path.join(distPath, 'index.html'),
    path.join(distPath, '404.html')
  );
  console.log('Successfully created 404.html for SPA routing');
} catch (err) {
  console.error('Error creating 404.html:', err);
}