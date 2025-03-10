<template>
  <div 
    class="video-container" 
    :class="{ 'is-playing': isPlaying, 'has-overlay': showOverlay }" 
    ref="videoContainer"
  >
    <!-- Video Overlay -->
    <div class="video-overlay" v-if="showOverlay">
      <div class="overlay-content">
        <h3 v-if="title">{{ title }}</h3>
        <p v-if="description">{{ description }}</p>
        <button class="play-button" @click="playVideo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
            <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Video Element -->
    <video 
      ref="videoElement"
      class="video-element" 
      :poster="poster ? getAssetPath(poster) : ''"
      :muted="muted"
      :loop="loop"
      :playsinline="playsinline"
      :autoplay="autoplay"
      @play="onPlay"
      @pause="onPause"
      @ended="onEnded"
    >
      <source :src="videoSrc" :type="videoType">
      Your browser does not support the video tag.
    </video>
    
    <!-- Video Controls -->
    <div class="video-controls" v-if="controls && isPlaying">
      <div class="progress-container" @click="seekVideo">
        <div class="progress-bar">
          <div class="progress-filled" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
      
      <div class="controls-buttons">
        <button class="control-button" @click="togglePlayPause">
          <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </button>
        
        <button class="control-button" @click="toggleMute">
          <svg v-if="muted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="currentColor"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="currentColor"/>
          </svg>
        </button>
        
        <button v-if="allowFullscreen" class="control-button" @click="toggleFullscreen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    src: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'video/mp4'
    },
    poster: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    playsinline: {
      type: Boolean,
      default: true
    },
    allowFullscreen: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isPlaying: false,
      showOverlay: true,
      progress: 0,
      videoSrc: ''
    }
  },
  computed: {
    videoType() {
      return this.type;
    }
  },
  mounted() {
    this.videoSrc = this.getAssetPath(this.src);
    
    // Set up progress tracking
    if (this.$refs.videoElement) {
      this.$refs.videoElement.addEventListener('timeupdate', this.updateProgress);
    }
    
    // Auto-hide controls when idle
    if (this.controls) {
      this.$refs.videoContainer.addEventListener('mousemove', this.showControls);
      this.$refs.videoContainer.addEventListener('mouseleave', this.hideControls);
    }

    // Initialize overlay based on props
    this.showOverlay = this.overlay;
    
    // Handle autoplay
    if (this.autoplay) {
      this.attemptAutoplay();
    }
  },
  beforeUnmount() {
    // Clean up event listeners
    if (this.$refs.videoElement) {
      this.$refs.videoElement.removeEventListener('timeupdate', this.updateProgress);
    }
    
    if (this.controls && this.$refs.videoContainer) {
      this.$refs.videoContainer.removeEventListener('mousemove', this.showControls);
      this.$refs.videoContainer.removeEventListener('mouseleave', this.hideControls);
    }
  },
  methods: {
    getAssetPath(path) {
      if (path.startsWith('http') || path.startsWith('//')) {
        return path;
      }
      return import.meta.env.BASE_URL + path;
    },
    playVideo() {
      const video = this.$refs.videoElement;
      if (video) {
        this.showOverlay = false;
        video.play();
      }
    },
    pauseVideo() {
      const video = this.$refs.videoElement;
      if (video) {
        video.pause();
      }
    },
    togglePlayPause() {
      if (this.isPlaying) {
        this.pauseVideo();
      } else {
        this.playVideo();
      }
    },
    toggleMute() {
      const video = this.$refs.videoElement;
      if (video) {
        video.muted = !video.muted;
        this.muted = video.muted;
      }
    },
    toggleFullscreen() {
      const container = this.$refs.videoContainer;
      
      if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    },
    updateProgress() {
      const video = this.$refs.videoElement;
      if (video) {
        this.progress = (video.currentTime / video.duration) * 100 || 0;
      }
    },
    seekVideo(e) {
      const video = this.$refs.videoElement;
      const progressBar = e.currentTarget;
      const position = (e.offsetX / progressBar.offsetWidth);
      video.currentTime = position * video.duration;
    },
    onPlay() {
      this.isPlaying = true;
      this.$emit('play');
    },
    onPause() {
      this.isPlaying = false;
      this.$emit('pause');
    },
    onEnded() {
      this.isPlaying = false;
      if (this.overlay) {
        this.showOverlay = true;
      }
      this.$emit('ended');
    },
    attemptAutoplay() {
      const video = this.$refs.videoElement;
      if (video) {
        // Most browsers require muted for autoplay
        video.muted = true;
        
        // Attempt to play
        const playPromise = video.play();
        
        // Handle autoplay restrictions
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Autoplay started successfully
              this.showOverlay = false;
            })
            .catch(error => {
              // Autoplay was prevented
              console.log('Autoplay prevented:', error);
              // Keep overlay visible
              this.showOverlay = true;
            });
        }
      }
    },
    showControls() {
      // Reset the hide timer when user moves mouse
      clearTimeout(this.hideControlsTimer);
      
      const controlsElement = this.$refs.videoContainer.querySelector('.video-controls');
      if (controlsElement) {
        controlsElement.classList.add('visible');
      }
      
      // Hide controls after 3 seconds of inactivity
      this.hideControlsTimer = setTimeout(() => {
        if (controlsElement) {
          controlsElement.classList.remove('visible');
        }
      }, 3000);
    },
    hideControls() {
      const controlsElement = this.$refs.videoContainer.querySelector('.video-controls');
      if (controlsElement) {
        controlsElement.classList.remove('visible');
      }
    }
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: #000;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.video-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.overlay-content {
  text-align: center;
  color: white;
  max-width: 80%;
}

.overlay-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.overlay-content p {
  margin-bottom: 2rem;
  opacity: 0.8;
}

.play-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.9;
}

.play-button:hover {
  transform: scale(1.1);
  opacity: 1;
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  z-index: 3;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-container:hover .video-controls,
.video-controls.visible {
  opacity: 1;
}

.progress-container {
  cursor: pointer;
  height: 8px;
  margin-bottom: 10px;
}

.progress-bar {
  height: 4px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress-filled {
  height: 100%;
  background-color: var(--color-primary, #3498db);
  transition: width 0.1s linear;
}

.controls-buttons {
  display: flex;
  align-items: center;
}

.control-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 15px;
  padding: 5px;
  transition: transform 0.2s ease;
}

.control-button:hover {
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .overlay-content h3 {
    font-size: 1.2rem;
  }
  
  .play-button svg {
    width: 40px;
    height: 40px;
  }
  
  .control-button svg {
    width: 20px;
    height: 20px;
  }
}
</style>
