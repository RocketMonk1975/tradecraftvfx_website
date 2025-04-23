/**
 * Utility functions for handling paths consistently across the application
 * These functions ensure that all assets are correctly referenced whether
 * running on local development or on GitHub Pages deployment.
 */

/**
 * Get the base path depending on the current environment
 * @returns {string} Base path prefix
 */
const getBasePath = () => {
  // No base path prefix for all environments
  return '';
};

/**
 * Returns the correct video path for all environments
 * @param {string} path - The path or filename of the video
 * @param {string} [directory='Homepage/reels/Low'] - Optional directory within videos folder
 * @returns {string} The complete path to the video
 */
export const getVideoPath = (path, directory = 'Homepage/reels/Low') => {
  if (!path) {
    console.error('Missing path parameter in getVideoPath');
    return '';
  }
  
  // Ensure we have a clean path
  const normalizedPath = path.trim();
  
  // Case 1: Path already starts with /videos/ - return as is (already absolute)
  if (normalizedPath.startsWith('/videos/')) {
    return normalizedPath;
  }
  
  // Case 2: Path starts with videos/ but missing leading slash
  if (normalizedPath.startsWith('videos/')) {
    return `/${normalizedPath}`;
  }
  
  // Case 3: Path already contains directory structure like our_work/Project/Quality/file.mp4
  if (normalizedPath.includes('/') && 
      (normalizedPath.includes('our_work/') || 
       normalizedPath.includes('Homepage/') || 
       normalizedPath.includes('reels/'))) {
    return `/videos/${normalizedPath}`;
  }
  
  // Case 4: Path is just a filename - add default directory
  return `/videos/${directory}/${normalizedPath}`;
};

/**
 * Returns the correct path for project images
 * @param {string} filename - The filename of the image
 * @param {string} projectId - The project ID or slug
 * @returns {string} The complete path to the project image
 */
export const getProjectImagePath = (filename, projectId) => {
  if (!filename || !projectId) {
    console.error('Missing parameters in getProjectImagePath');
    return '';
  }
  
  const basePath = getBasePath();
  return `${basePath}/images/projects/${projectId}/${filename}`;
};

/**
 * Returns the complete path for any asset based on environment
 * @param {string} path - The relative path from public directory (should start with /)
 * @returns {string} The complete path to the asset
 */
export const getAssetPath = (path) => {
  if (!path) {
    console.error('Missing path parameter in getAssetPath');
    return '';
  }
  
  const basePath = getBasePath();
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
};

/**
 * Returns the correct path for static images
 * @param {string} filename - The image filename
 * @param {string} [category='general'] - Category subfolder
 * @returns {string} The complete path to the image
 */
export const getImagePath = (filename, category = 'general') => {
  if (!filename) {
    console.error('Missing filename parameter in getImagePath');
    return '';
  }
  
  const basePath = getBasePath();
  return `${basePath}/images/${category}/${filename}`;
};
