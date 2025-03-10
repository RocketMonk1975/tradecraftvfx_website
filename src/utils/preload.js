/**
 * Utility to preload critical resources
 */

// List of critical image paths to preload
const criticalImages = [
  'placeholder.jpg',
  'logo.svg'
];

// List of critical fonts to preload
const criticalFonts = [
  // Add your font paths here
];

/**
 * Creates preload link elements for critical resources
 */
export const preloadCriticalResources = () => {
  const head = document.head;
  const basePath = import.meta.env.BASE_URL;
  
  // Preload critical images
  criticalImages.forEach(imagePath => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = `${basePath}${imagePath}`;
    head.appendChild(preloadLink);
  });
  
  // Preload critical fonts
  criticalFonts.forEach(fontPath => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'font';
    preloadLink.href = `${basePath}${fontPath}`;
    preloadLink.crossOrigin = 'anonymous';
    head.appendChild(preloadLink);
  });
};
