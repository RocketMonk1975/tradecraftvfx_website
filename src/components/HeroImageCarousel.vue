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
  transition: opacity 1.5s ease;
}

.carousel-slide.active {
  opacity: 1;
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
</style>
