/**
 * Utility functions for handling paths consistently across the application
 */

/**
 * Returns the correct video path based on environment (local vs GitHub Pages)
 * @param {string} filename - The filename of the video
 * @returns {string} The complete path to the video
 */
export const getVideoPath = (filename) => {
  // Determine base path based on hostname
  const basePath = window.location.hostname === 'localhost' 
    ? '' 
    : '/tradecraftvfx_website';
  
  return `${basePath}/videos/Homepage/reels/WEB_optimized_mp4/${filename}`;
};

/**
 * Returns the complete path for any asset based on environment
 * @param {string} path - The relative path from public directory
 * @returns {string} The complete path to the asset
 */
export const getAssetPath = (path) => {
  const basePath = window.location.hostname === 'localhost' 
    ? '' 
    : '/tradecraftvfx_website';
  
  return `${basePath}${path}`;
};
