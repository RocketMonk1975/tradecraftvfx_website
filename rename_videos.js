/**
 * Script to rename video files to follow consistent naming conventions for web
 * Eliminates spaces, standardizes case, and ensures consistent naming patterns
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to rename with their corresponding new names
const filesToRename = [
  // Low Quality MP4 Files
  {
    oldPath: 'public/videos/our_work/Creed3/Low/Creed3 Full.mp4',
    newPath: 'public/videos/our_work/Creed3/Low/Creed3_Full.mp4'
  },
  {
    oldPath: 'public/videos/our_work/Elevation/Low/Elevation Full.mp4',
    newPath: 'public/videos/our_work/Elevation/Low/Elevation_Full.mp4'
  },
  {
    oldPath: 'public/videos/our_work/ISS/Low/I.S.S. Movie Asset Reel.mp4',
    newPath: 'public/videos/our_work/ISS/Low/ISS_Movie_Asset_Reel.mp4'
  },
  {
    oldPath: 'public/videos/our_work/WingsAndaPrayer/Low/Wingsandaprayer Full.mp4',
    newPath: 'public/videos/our_work/WingsAndaPrayer/Low/WingsAndAPrayer_Full.mp4'
  },
  
  // High Quality MOV Files - Only renaming the one with inconsistent format
  {
    oldPath: 'public/videos/our_work/ISS/High/I.S.S. Movie_asset_reel.mov',
    newPath: 'public/videos/our_work/ISS/High/ISS_Movie_Asset_Reel.mov'
  }
];

// Initialize counters
let successCount = 0;
let skippedCount = 0;
let errorCount = 0;

// Process each file
const processFiles = async () => {
  for (const file of filesToRename) {
    const fullOldPath = path.resolve(__dirname, file.oldPath);
    const fullNewPath = path.resolve(__dirname, file.newPath);
    
    try {
      // Check if the original file exists
      try {
        await fs.access(fullOldPath);
      } catch (e) {
        console.log(`⚠️ Not Found: ${file.oldPath}`);
        skippedCount++;
        continue;
      }
      
      // Check if the destination already exists to avoid overwriting
      try {
        await fs.access(fullNewPath);
        console.log(`⚠️ Skipped: ${file.newPath} already exists`);
        skippedCount++;
        continue;
      } catch (e) {
        // This is expected if the file doesn't exist yet
      }
      
      // Perform the rename
      await fs.rename(fullOldPath, fullNewPath);
      console.log(`✅ Renamed: ${file.oldPath} → ${file.newPath}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error renaming ${file.oldPath}: ${error.message}`);
      errorCount++;
    }
  }

  // Display summary
  console.log('\n=== Rename Summary ===');
  console.log(`Total files processed: ${filesToRename.length}`);
  console.log(`Successfully renamed: ${successCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);

  // Now update the projects.js file to match the new filenames
  const projectsFile = path.resolve(__dirname, 'src/data/projects.js');

  try {
    // Only attempt to update projects.js if the renames were successful
    if (successCount > 0) {
      let projectsContent = await fs.readFile(projectsFile, 'utf8');
      
      // Update references to renamed files
      projectsContent = projectsContent
        // Update Creed3
        .replace(/Creed3 Full\.mp4/g, 'Creed3_Full.mp4')
        // Update Elevation
        .replace(/Elevation Full\.mp4/g, 'Elevation_Full.mp4')
        // Update ISS
        .replace(/I\.S\.S\. Movie Asset Reel\.mp4/g, 'ISS_Movie_Asset_Reel.mp4')
        .replace(/I\.S\.S\. Movie_asset_reel\.mov/g, 'ISS_Movie_Asset_Reel.mov')
        // Update Wings and a Prayer
        .replace(/Wingsandaprayer Full\.mp4/g, 'WingsAndAPrayer_Full.mp4');
      
      // Write the updated content back to the file
      await fs.writeFile(projectsFile, projectsContent);
      console.log(`✅ Updated references in projects.js`);
    }
  } catch (error) {
    console.error(`❌ Error updating projects.js: ${error.message}`);
  }

  console.log('\nDone! Your video files now follow consistent naming conventions.');
};

// Run the script
processFiles().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
