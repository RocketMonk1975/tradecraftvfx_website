<template>
  <div class="hero-carousel">
    <base-carousel 
      :item-count="images.length"
      :current-index="currentIndex"
      :autoplay="true"
      :interval="interval"
      prev-aria-label="Previous image"
      next-aria-label="Next image"
      @prev-item="prevSlide"
      @next-item="nextSlide"
      @goto-item="goToSlide"
    >
      <!-- Image Slides -->
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="carousel-slide"
        :class="{ active: currentIndex === index }"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      
      <!-- Overlay for text readability -->
      <div class="carousel-overlay"></div>
      
      <!-- Content (passed via slot) -->
      <template #content>
        <div class="carousel-content">
          <slot></slot>
        </div>
      </template>
    </base-carousel>
  </div>
</template>

<script>
import BaseCarousel from './BaseCarousel.vue';

export default {
  name: 'HeroImageCarousel',
  components: {
    BaseCarousel
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 5000 // 5 seconds by default
    }
  },
  data() {
    return {
      currentIndex: 0,
      timer: null
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    this.stopCarousel();
  },
  methods: {
    startCarousel() {
      // Only start the carousel if there are multiple images
      if (this.images.length > 1) {
        this.timer = setInterval(() => {
          this.nextSlide();
        }, this.interval);
      }
    },
    stopCarousel() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      // Stop the auto-cycling when user manually selects a slide
      this.stopCarousel();
      
      // Go to selected slide
      this.currentIndex = index;
      
      // Restart carousel after a brief pause
      setTimeout(() => {
        this.startCarousel();
      }, 5000);
    }
  }
}
</script>

<style scoped>
.hero-carousel {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out, transform 8s ease-out;
  transform: scale(1.02);
  z-index: 0;
}

.carousel-slide.active {
  opacity: 1;
  z-index: 1;
  transform: scale(1.0);
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 2;
  pointer-events: none;
}

.carousel-content {
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-end;
  color: white;
  z-index: 10;
  width: 100%;
  animation: fadeIn 0.5s ease;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
