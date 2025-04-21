<template>
  <div class="video-carousel">
    <!-- Navigation Arrows -->
    <button @click="prevVideo" class="carousel-nav carousel-prev" aria-label="Previous video">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    
    <!-- Video Container -->
    <div class="carousel-container">
      <!-- Video Background with Overlay -->
      <div class="video-bg-overlay"></div>
      <video class="hero-bg-video" ref="videoElement" autoplay loop playsinline preload="auto">
        <source :src="getVideoSrc(currentVideoIndex)" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    
    <!-- Video Content (Title, Subtitle) -->
    <div class="carousel-content">
      <h1 class="carousel-title">{{ videos[currentVideoIndex].title }}</h1>
      <p class="carousel-subtitle">{{ videos[currentVideoIndex].subtitle }}</p>
    </div>
    
    <!-- Navigation Arrows -->
    <button @click="nextVideo" class="carousel-nav carousel-next" aria-label="Next video">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button 
        v-for="(video, index) in videos" 
        :key="index"
        @click="goToVideo(index)"
        :class="{ active: index === currentVideoIndex }"
        class="carousel-indicator"
        :aria-label="`Go to video ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script>
import { getVideoPath } from '../utils/paths.js';

export default {
  name: 'VideoCarousel',
  mounted() {
    // Initialize video playback
    setTimeout(() => {
      if (this.$refs.videoElement) {
        this.$refs.videoElement.currentTime = 0; // Ensure video starts from beginning
        this.$refs.videoElement.play().catch(error => {
          console.warn('Autoplay prevented:', error);
        });
      }
    }, 500);
    
    // Add event listener for window resize
    window.addEventListener('resize', this.handleResize);
  },
  
  unmounted() {
    // Remove resize listener when component is destroyed
    window.removeEventListener('resize', this.handleResize);
  },
  
  data() {
    return {
      currentVideoIndex: 0,
      videos: [
        {
          filename: 'Tradecraft Sizzlreel.mp4',
          title: 'TradeCraft VFX Sizzle Reel',
          subtitle: 'Highlights of our creative visual effects journey'
        },
        {
          filename: 'Thank-You Reel.mp4',
          title: 'Thank You Showcase',
          subtitle: 'A special thank you to our clients and partners'
        },
        {
          filename: 'Iss Case Study Assets.mp4',
          title: 'I.S.S.',
          subtitle: 'Authentic zero-gravity VFX for the International Space Station'
        },
        {
          filename: 'Rocket Reel 2021.mp4',
          title: 'TradeCraft VFX Reel 2021',
          subtitle: 'Showcasing our best work from 2021'
        },
        {
          filename: 'Creed3 Casestudy .mp4',
          title: 'Creed 3',
          subtitle: 'Creating compelling boxing sequences with impact effects'
        }
      ]
    };
  },
  methods: {
    /**
     * Get the correct video source URL for the given index
     * @param {number} index - Index of the video in the videos array
     * @returns {string} Complete video URL with correct path
     */
    getVideoSrc(index) {
      return getVideoPath(this.videos[index].filename);
    },
    
    /**
     * Handle video end event to auto-advance to next video
     */
    videoEnded() {
      this.nextVideo();
    },
    
    /**
     * Advance to the next video in the carousel
     */
    nextVideo() {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
      this.resetVideo();
    },
    
    /**
     * Go to the previous video in the carousel
     */
    prevVideo() {
      this.currentVideoIndex = (this.currentVideoIndex - 1 + this.videos.length) % this.videos.length;
      this.resetVideo();
    },
    
    /**
     * Jump to a specific video by index
     * @param {number} index - The index to jump to
     */
    goToVideo(index) {
      this.currentVideoIndex = index;
      this.resetVideo();
    },
    
    /**
     * Reset and restart the current video
     */
    resetVideo() {
      this.$nextTick(() => {
        if (this.$refs.videoElement) {
          const video = this.$refs.videoElement;
          video.currentTime = 0;
          video.pause();
          video.load();
          video.play().catch(error => {
            console.warn('Error playing video:', error);
          });
        }
      });
    },
    
    /**
     * Handle window resize events
     */
    handleResize() {
      // Handle responsive behavior if needed
    }
  }
};
</script>

<style>
.video-carousel {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

.carousel-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% center; /* True horizontal centering */
  z-index: 0;
  opacity: 1;
  pointer-events: none;
}

.video-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 1;
  pointer-events: none;
}

.carousel-content {
  position: absolute;
  bottom: 60px; /* Moved closer to indicators, which are at calc(5vh + 20px) */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  z-index: 5;
  opacity: 0; /* Completely invisible when not hovered */
  transition: opacity 0.8s ease; /* Slower fade transition for more dramatic effect */
}

.video-carousel:hover .carousel-content {
  opacity: 1; /* Fully visible on hover */
}

.carousel-title {
  font-size: 2.5rem;
  margin-bottom: 0.4rem; /* Reduced by 60% from original 1rem */
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Lato', sans-serif;
  font-weight: 900; /* Black weight */
  font-style: italic;
}

.carousel-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  text-shadow: 0px 2px 3px rgba(0,0,0,0.4);
}

@media (max-width: 768px) {
  .carousel-content {
    bottom: 40px; /* Moved closer to indicators for tablet screens */
  }

  .carousel-title {
    font-size: 2rem;
    margin-bottom: 0.3rem; /* Reduced by 60% from original 0.75rem */
  }
  
  .carousel-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .carousel-content {
    bottom: 30px; /* Moved closer to indicators for mobile screens */
  }

  .carousel-title {
    font-size: 1.5rem;
    margin-bottom: 0.2rem; /* Reduced by 60% from original 0.5rem */
  }
  
  .carousel-subtitle {
    font-size: 1rem;
  }
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

@media (max-width: 768px) {
  .carousel-nav {
    width: 30px;
    height: 30px;
  }
  
  .carousel-nav svg {
    width: 20px;
    height: 20px;
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

@media (max-width: 768px) {
  .carousel-prev {
    left: 10px;
  }
  
  .carousel-next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .carousel-prev {
    left: 5px;
  }
  
  .carousel-next {
    right: 5px;
  }
}

/* Indicators */
.carousel-indicators {
  position: absolute;
  bottom: calc(5vh + 20px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: max(4px, 0.4vw); /* Reduced by 60% from original 10px, 1vw */
  z-index: 10;
}

@media (max-width: 768px) {
  .carousel-indicators {
    bottom: 30px;
    gap: 3px; /* Reduced by 60% from original 8px */
  }
}

@media (max-width: 480px) {
  .carousel-indicators {
    bottom: 20px;
    gap: 2.4px; /* Reduced by 60% from original 6px */
  }
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

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.carousel-content {
  animation: fadeIn 0.5s ease;
}
</style>
