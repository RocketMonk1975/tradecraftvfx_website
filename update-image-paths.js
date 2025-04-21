// Script to update image paths in the projects.js file
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the projects.js file
const projectsFilePath = join(__dirname, 'src', 'data', 'projects.js');

// Main function using async/await
async function updateImagePaths() {
  try {
    // Read the projects.js file
    const data = await readFile(projectsFilePath, 'utf8');
    
    // Base path to add to all paths
    const basePath = '/tradecraftvfx_website';
    
    // Update the file content with the base path definition
    let updatedContent = data;
    
    // Add base path constant if it doesn't exist
    if (!updatedContent.includes('const BASE_PATH =')) {
      updatedContent = updatedContent.replace('// VFX Project Data', '// VFX Project Data\n// Base path for assets\nconst BASE_PATH = \'/tradecraftvfx_website\';');
    }
    
    // Replace all image and video paths with base path
    updatedContent = updatedContent.replace(/thumbnail: "\/images\//g, `thumbnail: "${basePath}/images/`);
    updatedContent = updatedContent.replace(/heroImage: "\/images\//g, `heroImage: "${basePath}/images/`);
    updatedContent = updatedContent.replace(/      "\/images\//g, `      "${basePath}/images/`);
    updatedContent = updatedContent.replace(/videoUrl: "\/videos\//g, `videoUrl: "${basePath}/videos/`);
    
    // Write the updated content back to the file
    await writeFile(projectsFilePath, updatedContent, 'utf8');
    console.log('Successfully updated image paths in projects.js');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Execute the function
updateImagePaths();
