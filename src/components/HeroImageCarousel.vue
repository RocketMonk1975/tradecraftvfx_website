<template>
  <div class="hero-carousel">
    <div 
      v-for="(image, index) in images" 
      :key="index"
      class="carousel-slide"
      :class="{ active: currentIndex === index }"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="carousel-overlay"></div>
    <div class="carousel-content">
      <slot></slot>
    </div>
    
    <!-- Navigation dots (only shown if multiple images) -->
    <div v-if="images.length > 1" class="carousel-nav">
      <button 
        v-for="(_, index) in images" 
        :key="index"
        class="nav-dot"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
        :aria-label="`View slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroImageCarousel',
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
}

.carousel-content {
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-end;
  color: white;
  z-index: 10;
}

/* Navigation dots */
.carousel-nav {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 20;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-dot.active {
  background-color: #ffffff;
  transform: scale(1.2);
}

.nav-dot:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-dot {
    width: 10px;
    height: 10px;
  }
  
  .carousel-nav {
    bottom: 15px;
    gap: 8px;
  }
}
</style>
