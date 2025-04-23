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
 * @param {string} filename - The filename of the video
 * @param {string} [directory='Homepage/reels/Low'] - Optional directory within videos folder
 * @returns {string} The complete path to the video
 */
export const getVideoPath = (filename, directory = 'Homepage/reels/Low') => {
  if (!filename) {
    console.error('Missing filename parameter in getVideoPath');
    return '';
  }
  
  // Ensure we have a clean filename
  const normalizedFilename = filename.trim();
  
  // Handle case where a full path is provided
  if (normalizedFilename.startsWith('/videos/')) {
    return normalizedFilename; // Already a complete path
  }
  
  // Handle case where the path starts with 'videos/'
  if (normalizedFilename.startsWith('videos/')) {
    return `/${normalizedFilename}`; // Add leading slash
  }
  
  // Standard case: build the path
  return `/videos/${directory}/${normalizedFilename}`;
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
