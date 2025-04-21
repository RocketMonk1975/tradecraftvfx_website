<template>
  <div class="base-carousel">
    <!-- Navigation Arrows -->
    <button 
      @click="onPrevItem" 
      class="carousel-nav carousel-prev" 
      :aria-label="prevAriaLabel"
      v-if="showNavigation"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>

    <!-- Content is passed via slots -->
    <slot></slot>
    
    <!-- Navigation content passed via named slot -->
    <slot name="content"></slot>
    
    <!-- Next button -->
    <button 
      @click="onNextItem" 
      class="carousel-nav carousel-next" 
      :aria-label="nextAriaLabel"
      v-if="showNavigation"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    
    <!-- Indicators at bottom -->
    <div v-if="showIndicators && itemCount > 1" class="carousel-indicators">
      <button 
        v-for="index in itemCount" 
        :key="index - 1"
        @click="onGoToItem(index - 1)"
        :class="{ active: currentIndex === (index - 1) }"
        class="carousel-indicator"
        :aria-label="`Go to item ${index}`"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCarousel',
  props: {
    itemCount: {
      type: Number,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    },
    prevAriaLabel: {
      type: String,
      default: "Previous item"
    },
    nextAriaLabel: {
      type: String,
      default: "Next item"
    },
    showNavigation: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onPrevItem() {
      this.$emit('prev-item');
    },
    onNextItem() {
      this.$emit('next-item');
    },
    onGoToItem(index) {
      this.$emit('goto-item', index);
    }
  }
}
</script>

<style scoped>
/* Base Carousel Styling */
.base-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  background: rgba(0,0,0,0.4);
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
  background-color: var(--color-primary, #ff8243); /* Mango color for active indicator */
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
</style>
