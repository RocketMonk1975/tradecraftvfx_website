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
  // Check if running locally or on GitHub Pages
  return window.location.hostname === 'localhost' ? '' : '/tradecraftvfx_website';
};

/**
 * Returns the correct video path based on environment (local vs GitHub Pages)
 * @param {string} filename - The filename of the video
 * @param {string} [directory='Homepage/reels/WEB_optimized_mp4'] - Optional directory within videos folder
 * @returns {string} The complete path to the video
 */
export const getVideoPath = (filename, directory = 'Homepage/reels/WEB_optimized_mp4') => {
  if (!filename) {
    console.error('Missing filename parameter in getVideoPath');
    return '';
  }
  
  const basePath = getBasePath();
  const normalizedFilename = filename.trim();
  
  return `${basePath}/videos/${directory}/${normalizedFilename}`;
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
