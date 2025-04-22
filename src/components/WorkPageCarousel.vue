<template>
  <div class="carousel-container">
    <div 
      v-for="(image, index) in displayImages" 
      :key="`carousel-${index}`"
      class="carousel-image"
      :class="{ 'active': currentIndex === index }"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
  </div>
</template>

<script>
import { projects } from '../data/projects.js';

export default {
  name: 'WorkPageCarousel',
  data() {
    return {
      currentIndex: 0,
      displayImages: [],
      interval: null
    };
  },
  mounted() {
    this.collectImages();
    this.startCarousel();
  },
  beforeUnmount() {
    this.stopCarousel();
  },
  methods: {
    collectImages() {
      // Collect all project images, thumbnails, and hero images
      let allImages = [];
      
      projects.forEach(project => {
        // Skip placeholder projects or projects without real images
        const placeholderTitles = ['Unfrosted', 'Hidden Figures', 'The Continental', 'Picard', 'Pandora'];
        if (placeholderTitles.includes(project.title)) {
          return;
        }
        
        // Only add images from projects with actual content
        if (project.id === 'creed-3' || project.id === 'elevation' || project.id === 'wings-and-a-prayer' || project.id === 'iss') {
          // Add thumbnail if available and not a placeholder
          if (project.thumbnail && !project.thumbnail.includes('placeholder') && !this.isPlaceholderImage(project.thumbnail)) {
            allImages.push(project.thumbnail);
          }
          
          // Add hero image if available and not a placeholder
          if (project.heroImage && !project.heroImage.includes('placeholder') && !this.isPlaceholderImage(project.heroImage)) {
            allImages.push(project.heroImage);
          }
          
          // Add images from each project's gallery
          if (project.images && project.images.length) {
            const filteredImages = project.images
              .filter(img => !img.includes('placeholder') && !this.isPlaceholderImage(img))
              // Take more images from our completed projects
              .slice(0, 4);
            allImages = allImages.concat(filteredImages);
          }
        }
      });
      
      // Filter out any undefined or empty URLs
      allImages = allImages.filter(url => url && url.trim() !== '');
      
      // Shuffle the images for randomness
      this.displayImages = this.shuffleArray(allImages);
      
      // Preload images to prevent black frames
      this.preloadImages();
    },
    
    preloadImages() {
      // Preload all images to prevent black frames during transitions
      this.displayImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    },
    
    isPlaceholderImage(url) {
      // Check for common placeholder patterns
      const placeholderPatterns = [
        'placeholder',
        'no-image',
        'default.jpg',
        'default.png'
      ];
      
      return placeholderPatterns.some(pattern => url.toLowerCase().includes(pattern));
    },
    shuffleArray(array) {
      // Fisher-Yates shuffle algorithm
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },
    startCarousel() {
      // Only start carousel if we have images
      if (this.displayImages.length === 0) return;
      
      this.interval = setInterval(() => {
        // Ensure we have a valid next image before transitioning
        let nextIndex = (this.currentIndex + 1) % this.displayImages.length;
        this.currentIndex = nextIndex;
      }, 2000); // 2 seconds per image for a balanced pace
    },
    stopCarousel() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }
};
</script>

<style scoped>
.carousel-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: 1;
}

.carousel-image.active {
  opacity: 1;
}

/* Add dark overlay to make text readable */
.carousel-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
}
</style>
