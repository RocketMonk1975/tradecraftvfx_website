// Test script to verify video paths
import { getVideoPath, getAssetPath } from './utils/paths.js';

// Test paths for various video files
console.log('Testing video paths:');

// Carousel videos
console.log('Carousel video 1:', getVideoPath('Tradecraft Og Reel.mp4'));
console.log('Carousel video 2:', getVideoPath('Tradecraft Sizzl Reel.mp4'));
console.log('Carousel video 3:', getVideoPath('Tradecraft Thanx Reel.mp4'));

// Project videos
console.log('Elevation video:', getVideoPath('Elevation Full.mp4', 'our_work/Elevation/Low'));
console.log('Creed 3 video:', getVideoPath('Creed3 Full.mp4', 'our_work/Creed3/Low'));
console.log('Wings and a Prayer video:', getVideoPath('Wingsandaprayer Full.mp4', 'our_work/WingsAndaPrayer/Low'));
console.log('ISS video:', getVideoPath('I.S.S. Movie Asset Reel.mp4', 'our_work/ISS/Low'));

// Test direct path references (from HomePage.getVideoSrc)
const testGetVideoSrc = (filename) => {
  console.log(`Testing ${filename}:`);
  
  if (filename.startsWith('videos/')) {
    console.log(`  Result: /${filename}`);
  } else {
    console.log(`  Result: /videos/${filename}`);
  }
};

// Test with different kinds of paths
testGetVideoSrc('videos/Homepage/reels/Low/Tradecraft Og Reel.mp4');
testGetVideoSrc('Tradecraft Og Reel.mp4');
testGetVideoSrc('/videos/Homepage/reels/Low/Tradecraft Og Reel.mp4');

// Log information about our current environment
console.log('Current hostname:', window.location.hostname);
console.log('Base URL:', import.meta.env.BASE_URL);
