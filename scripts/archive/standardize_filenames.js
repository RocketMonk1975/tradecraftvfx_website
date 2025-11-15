/**
 * Video File Name Standardization Script
 * 
 * This script walks through all video files in the public directory
 * and standardizes their names according to web-friendly conventions:
 * - Replaces spaces with underscores
 * - Ensures consistent capitalization
 * - Creates a map of old->new filenames for code updates
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to process
const videoDirectories = [
  'public/videos/Homepage/reels/Low',
  'public/videos/Homepage/reels/HIGH_rez',
  'public/videos/our_work/Creed3/Low',
  'public/videos/our_work/Creed3/High',
  'public/videos/our_work/Elevation/Low',
  'public/videos/our_work/Elevation/High',
  'public/videos/our_work/ISS/Low',
  'public/videos/our_work/ISS/High',
  'public/videos/our_work/WingsAndaPrayer/Low',
  'public/videos/our_work/WingsAndaPrayer/High'
];

// Initialize arrays for tracking changes
const renameOperations = [];
const successfulRenames = [];
const failedRenames = [];

/**
 * Convert a filename to a standardized web-friendly format
 * @param {string} filename - Original filename
 * @returns {string} Standardized filename
 */
function standardizeFilename(filename) {
  return filename
    // Replace spaces with underscores
    .replace(/\s+/g, '_')
    // Remove consecutive underscores
    .replace(/_+/g, '_')
    // Remove special characters except underscore and period
    .replace(/[^\w.-]/g, '')
    // Ensure MP4 extension is lowercase
    .replace(/\.MP4$/i, '.mp4')
    // Ensure MOV extension is lowercase
    .replace(/\.MOV$/i, '.mov');
}

/**
 * Process all videos in the specified directories
 */
async function processVideoDirectories() {
  console.log('Starting video filename standardization...');

  // Process each directory
  for (const dir of videoDirectories) {
    const dirPath = path.resolve(__dirname, dir);
    
    try {
      // Skip if directory doesn't exist
      try {
        await fs.access(dirPath);
      } catch (e) {
        console.log(`Directory not found: ${dir} (skipping)`);
        continue;
      }
      
      // Get all files in the directory
      const files = await fs.readdir(dirPath);
      
      for (const file of files) {
        // Only process MP4 and MOV files
        if (!(file.toLowerCase().endsWith('.mp4') || file.toLowerCase().endsWith('.mov'))) {
          continue;
        }
        
        const oldPath = path.join(dirPath, file);
        const newFilename = standardizeFilename(file);
        
        // Skip if no change needed
        if (file === newFilename) {
          console.log(`File already follows naming convention: ${file}`);
          continue;
        }
        
        const newPath = path.join(dirPath, newFilename);
        
        // Store renaming operation
        renameOperations.push({
          oldPath,
          newPath,
          oldName: file,
          newName: newFilename,
          directory: dir
        });
      }
    } catch (error) {
      console.error(`Error processing directory ${dir}:`, error.message);
    }
  }
  
  // After collecting all operations, perform them
  console.log(`\nFound ${renameOperations.length} files to rename.`);
  
  for (const op of renameOperations) {
    try {
      await fs.rename(op.oldPath, op.newPath);
      successfulRenames.push(op);
      console.log(`✅ Renamed: ${op.oldName} -> ${op.newName}`);
    } catch (error) {
      failedRenames.push({...op, error: error.message});
      console.error(`❌ Failed to rename ${op.oldName}: ${error.message}`);
    }
  }
  
  // Create an update manifest
  await createUpdateManifest();
}

/**
 * Create a manifest file with information about renamed files
 * for use in updating code references
 */
async function createUpdateManifest() {
  const manifestData = {
    updated: new Date().toISOString(),
    renamedFiles: successfulRenames.map(op => ({
      directory: op.directory,
      oldName: op.oldName,
      newName: op.newName
    })),
    failedFiles: failedRenames.map(op => ({
      directory: op.directory,
      oldName: op.oldName,
      error: op.error
    }))
  };
  
  const manifestPath = path.resolve(__dirname, 'rename_manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifestData, null, 2));
  
  console.log(`\n===== File Rename Summary =====`);
  console.log(`Total files processed: ${renameOperations.length}`);
  console.log(`Successfully renamed: ${successfulRenames.length}`);
  console.log(`Failed to rename: ${failedRenames.length}`);
  console.log(`\nManifest created at: rename_manifest.json`);
  
  if (successfulRenames.length > 0) {
    console.log(`\nNext steps:`);
    console.log(`1. Run the update_code_references.js script to update your code to match the new filenames`);
    console.log(`2. Review and fix any edge cases manually`);
  }
}

// Run the script
processVideoDirectories().catch(error => {
  console.error('Unhandled error:', error);
});
