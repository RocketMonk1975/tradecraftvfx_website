/**
 * Video Path Reference Update Script
 * 
 * This script:
 * 1. Reads the rename manifest created by standardize_filenames.js
 * 2. Updates all video references in the codebase to match the new standardized filenames
 * 3. Ensures all components use the path utility functions consistently
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to examine and potentially update
const targetFiles = [
  // Components
  'src/components/VideoCarousel.vue',
  'src/components/ProjectVideo.vue',
  // Pages
  'src/pages/HomePage.vue',
  'src/pages/ProjectDetailPage.vue',
  'src/pages/WorkPage.vue',
  // Data
  'src/data/projects.js',
  'src/data/videos.js',
];

// Initialize tracking variables
const updatedFiles = [];
const errorFiles = [];
let manifest = null;

/**
 * Main function to update code references
 */
async function updateCodeReferences() {
  console.log('Starting code reference updates...');
  
  // First, read the manifest
  try {
    const manifestPath = path.resolve(__dirname, 'rename_manifest.json');
    const manifestContent = await fs.readFile(manifestPath, 'utf8');
    manifest = JSON.parse(manifestContent);
    
    if (!manifest.renamedFiles || manifest.renamedFiles.length === 0) {
      console.log('No files were renamed according to the manifest. Exiting.');
      return;
    }
    
    console.log(`Found ${manifest.renamedFiles.length} renamed files in the manifest.`);
  } catch (error) {
    console.error('Failed to read rename manifest:', error.message);
    console.log('Run standardize_filenames.js first to generate the manifest.');
    return;
  }
  
  // Create a map of old -> new names for easy lookup
  const renameMap = {};
  for (const item of manifest.renamedFiles) {
    renameMap[item.oldName] = item.newName;
    
    // Also add entries without directory for simple filename replacements
    renameMap[item.oldName.replace(/\s+/g, ' ')] = item.newName;
  }
  
  // Process each target file
  for (const filePath of targetFiles) {
    const fullPath = path.resolve(__dirname, filePath);
    
    try {
      // Check if file exists
      try {
        await fs.access(fullPath);
      } catch (e) {
        console.log(`File not found: ${filePath} (skipping)`);
        continue;
      }
      
      // Read file content
      let content = await fs.readFile(fullPath, 'utf8');
      const originalContent = content;
      
      // First pass: replace direct filename references
      for (const [oldName, newName] of Object.entries(renameMap)) {
        // Use regex with word boundaries to replace exact filename matches
        const regex = new RegExp(`\\b${escapeRegExp(oldName)}\\b`, 'g');
        content = content.replace(regex, newName);
        
        // Also replace quoted versions (in strings)
        const quotedRegex = new RegExp(`(['"\`])${escapeRegExp(oldName)}(['"\`])`, 'g');
        content = content.replace(quotedRegex, `$1${newName}$2`);
      }
      
      // Second pass: ensure all components use the path utility functions consistently
      // This is a more complex operation that depends on the file type
      if (filePath.endsWith('.vue')) {
        content = updateVueComponentPaths(content, filePath);
      } else if (filePath.endsWith('.js')) {
        content = updateJsFilePaths(content, filePath);
      }
      
      // Only write back if content changed
      if (content !== originalContent) {
        await fs.writeFile(fullPath, content);
        updatedFiles.push(filePath);
        console.log(`✅ Updated references in: ${filePath}`);
      } else {
        console.log(`No changes needed in: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
      errorFiles.push({ file: filePath, error: error.message });
    }
  }
  
  // Summary
  console.log(`\n===== Update Summary =====`);
  console.log(`Total files examined: ${targetFiles.length}`);
  console.log(`Files updated: ${updatedFiles.length}`);
  console.log(`Files with errors: ${errorFiles.length}`);
  
  if (updatedFiles.length > 0) {
    console.log(`\nNext steps:`);
    console.log(`1. Verify the changes with 'git diff'`);
    console.log(`2. Build the project to ensure everything works correctly`);
    console.log(`3. Test the website to confirm all videos play properly`);
  }
}

/**
 * Update video paths in Vue components
 */
function updateVueComponentPaths(content, filePath) {
  // Update source tags to use the proper v-bind syntax
  content = content.replace(
    /<source\s+src="\/videos\/([^"]+)"\s+type="([^"]+)">/g,
    '<source :src="getVideoPath(\'$1\')" type="$2">'
  );
  
  // Ensure the component imports and uses getVideoPath from utils
  if (!content.includes('import { getVideoPath }') && 
      (content.includes('getVideoPath') || content.includes(':src='))) {
    
    // Find the script tag
    const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
    if (scriptMatch) {
      const scriptContent = scriptMatch[1];
      const updatedScript = scriptContent.includes('getVideoPath') 
        ? scriptContent 
        : scriptContent.replace(
            /import\s+{([^}]*)}\s+from\s+['"]\.\.\/utils\/[^'"]+['"]/,
            'import {$1, getVideoPath} from \'../utils/paths.js\''
          );
      
      // If no existing import, add a new one after the last import
      if (!updatedScript.includes('getVideoPath')) {
        const newImport = '\nimport { getVideoPath } from \'../utils/paths.js\';';
        content = content.replace(
          /<script>([\s\S]*?)(?:import\s+[^;]+;)([\s\S]*?)<\/script>/,
          `<script>$1$2${newImport}\n</script>`
        );
      } else if (updatedScript !== scriptContent) {
        content = content.replace(scriptMatch[0], `<script>${updatedScript}</script>`);
      }
    }
  }
  
  return content;
}

/**
 * Update video paths in JS files
 */
function updateJsFilePaths(content, filePath) {
  // For projects.js, update the video path format
  if (filePath.includes('projects.js')) {
    // Ensure all video references use the correct BASE_PATH format
    content = content.replace(
      /(['"`])(?:\.\.\/|\.\/)?(?:public\/)?videos\/([^'"`]+)(['"`])/g,
      '`${BASE_PATH}/videos/$2`'
    );
  }
  
  return content;
}

/**
 * Escape special characters in string for use in regex
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Run the script
updateCodeReferences().catch(error => {
  console.error('Unhandled error:', error);
});
