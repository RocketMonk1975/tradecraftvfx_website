<template>
  <div class="hero-carousel">
    <!-- Navigation Arrows -->
    <button @click="prevSlide" class="carousel-nav carousel-prev" aria-label="Previous image">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    
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
    <div class="carousel-content">
      <slot></slot>
    </div>
    
    <!-- Next button -->
    <button @click="nextSlide" class="carousel-nav carousel-next" aria-label="Next image">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    
    <!-- Indicators at bottom -->
    <div v-if="images.length > 1" class="carousel-indicators">
      <button 
        v-for="(_, index) in images" 
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: currentIndex === index }"
        class="carousel-indicator"
        :aria-label="`Go to image ${index + 1}`"
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
}

/* Navigation Arrows */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0,0,0,0.2);
  border: none;
  color: white;
  cursor: pointer;
  width: min(40px, 5vw);
  height: min(40px, 8vh);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: all 0.3s ease;
  border-radius: 0;
  padding: 0;
}

.carousel-nav:hover {
  opacity: 1;
}

.carousel-prev {
  left: 20px;
}

.carousel-next {
  right: 20px;
}

/* Indicators */
.carousel-indicators {
  position: absolute;
  bottom: calc(5vh + 20px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: max(4px, 0.4vw);
  z-index: 10;
}

.carousel-indicator {
  width: min(30px, 4vw);
  height: 3px;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.carousel-indicator.active {
  background-color: #ff8243; /* Mango color for active indicator */
  width: min(50px, 6vw); /* Make active indicator wider */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .carousel-nav {
    width: 30px;
    height: 30px;
  }
  
  .carousel-nav svg {
    width: 20px;
    height: 20px;
  }
  
  .carousel-indicators {
    bottom: 30px;
    gap: 3px;
  }
  
  .carousel-prev {
    left: 10px;
  }
  
  .carousel-next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .carousel-nav {
    width: 25px;
    height: 25px;
  }
  
  .carousel-nav svg {
    width: 16px;
    height: 16px;
  }
  
  .carousel-indicators {
    bottom: 20px;
    gap: 2.4px;
  }
  
  .carousel-prev {
    left: 5px;
  }
  
  .carousel-next {
    right: 5px;
  }
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.carousel-content {
  animation: fadeIn 0.5s ease;
}
</style>
