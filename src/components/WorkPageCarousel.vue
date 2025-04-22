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
        // Add thumbnail if available
        if (project.thumbnail) {
          allImages.push(project.thumbnail);
        }
        
        // Add hero image if available
        if (project.heroImage) {
          allImages.push(project.heroImage);
        }
        
        // Add first 2 images from each project's gallery (to avoid too many images)
        if (project.images && project.images.length) {
          allImages = allImages.concat(project.images.slice(0, 2));
        }
      });
      
      // Shuffle the images for randomness
      this.displayImages = this.shuffleArray(allImages);
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
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.displayImages.length;
      }, 3000); // 3 seconds per image including the cross-fade time
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
  transition: opacity 1s ease-in-out;
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
