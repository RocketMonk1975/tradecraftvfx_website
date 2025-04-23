<template>
  <div class="video-carousel">
    <base-carousel 
      :item-count="videos.length"
      :current-index="currentVideoIndex"
      :autoplay="false"
      prev-aria-label="Previous video"
      next-aria-label="Next video"
      @prev-item="prevVideo"
      @next-item="nextVideo"
      @goto-item="goToVideo"
    >
      <!-- Video Container -->
      <div class="carousel-container">
        <!-- Video Background with Overlay -->
        <div class="video-bg-overlay"></div>
        <video class="hero-bg-video" ref="videoElement" autoplay loop playsinline preload="auto">
          <source :src="getVideoPath(videos[currentVideoIndex].filename)" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      
      <!-- Video Content (Title, Subtitle) -->
      <template #content>
        <div class="carousel-content">
          <h1 class="carousel-title">{{ videos[currentVideoIndex].title }}</h1>
          <p class="carousel-subtitle">{{ videos[currentVideoIndex].subtitle }}</p>
        </div>
      </template>
    </base-carousel>
  </div>
</template>

<script>
import { getVideoPath } from '../utils/paths.js';
import BaseCarousel from './BaseCarousel.vue';

export default {
  name: 'VideoCarousel',
  components: {
    BaseCarousel
  },
  mounted() {
    // Initialize video playback
    setTimeout(() => {
      if (this.$refs.videoElement) {
        this.initVideoPlayback(this.$refs.videoElement);
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
          filename: 'Homepage/reels/Low/Tradecraft_Og_Reel.mp4',
          title: 'TradeCraft VFX Original Reel',
          subtitle: 'Showcasing our signature visual effects work'
        },
        {
          filename: 'Homepage/reels/Low/Tradecraft_Sizzl_Reel.mp4',
          title: 'TradeCraft VFX Sizzle Reel',
          subtitle: 'Highlights of our creative visual effects journey'
        },
        {
          filename: 'Homepage/reels/Low/Tradecraft_Thanx_Reel.mp4',
          title: 'Thank You Showcase',
          subtitle: 'A special thank you to our clients and partners'
        }
      ]
    };
  },
  methods: {
    /**
     * This method is kept for backward compatibility but we're using getVideoPath directly
     * in the template for better consistency across components
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
          this.initVideoPlayback(video);
        }
      });
    },

    /**
     * Initialize video playback with audio and handle fallbacks
     * @param {HTMLVideoElement} videoElement - The video element to play
     */
    initVideoPlayback(videoElement) {
      videoElement.muted = false; // Enable audio
      videoElement.volume = 0.7; // Set volume to 70%
      
      videoElement.play().catch(error => {
        console.warn('Video autoplay with sound prevented:', error);
        // If play with sound fails, try again muted and then unmute after user interaction
        videoElement.muted = true;
        videoElement.play().then(() => {
          // Try to unmute after play has started (requires user interaction)
          document.addEventListener('click', function enableAudio() {
            videoElement.muted = false;
            document.removeEventListener('click', enableAudio);
          }, { once: true });
        });
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

/* The navigation controls are now handled by BaseCarousel */

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.carousel-content {
  animation: fadeIn 0.5s ease;
}
</style>
