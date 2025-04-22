<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <VideoCarousel />
    </section>

    <!-- Company Description Section - Mill Style -->
    <section class="mill-style-description">
      <div class="mill-description-container">
        <div class="mill-description-content">
          <p>Tradecraft VFX is a full-service creative content studio where human ingenuity meets cutting-edge technology. As creative pioneers, we harness the power of AI to augment our artistic vision, enabling us to push creative and technical boundaries further than ever before. By integrating AI into our workflows, we significantly enhance our efficiency, allowing our artists to focus on what they do best—creating breathtaking visual experiences.</p>
        </div>
      </div>
    </section>

    <!-- Services section removed as requested -->

    <!-- Featured Work Section - The Mill Style -->
    <section id="work" class="mill-style-work-section">
      <div class="work-container">
        <!-- Reels Grid - Exact Mill Style with Offset -->
        <div class="mill-reels-grid">
          <!-- Left Column -->
          <div class="mill-left-column">
            <!-- First Reel Item - Landscape Format (16:9) -->
            <ScrollReveal direction="up" :distance="50" :duration="1.2" :delay="0.1" :threshold="0.2">
              <div class="mill-reel-item landscape" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
                <video class="mill-reel-video" muted preload="none" loop @loadeddata="handleVideoLoaded($event)">
                  <source :src="getVideoSrc(videoSources.landscape.filename)" type="video/mp4" />
                </video>
                <div class="mill-reel-title">{{ videoSources.landscape.title }}</div>
              </div>
            </ScrollReveal>
            
            <!-- Third Reel Item - Portrait Format (9:16) -->
            <ScrollReveal direction="up" :distance="50" :duration="1.2" :delay="0.3" :threshold="0.2">
              <div class="mill-reel-item portrait" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
                <video class="mill-reel-video" muted preload="none" loop @loadeddata="handleVideoLoaded($event)">
                  <source :src="getVideoSrc(videoSources.portrait.filename)" type="video/mp4" />
                </video>
                <div class="mill-reel-title">{{ videoSources.portrait.title }}</div>
              </div>
            </ScrollReveal>

            <!-- Project Videos - Left Column (first 3 completed projects) -->
            <ScrollReveal v-for="(video, index) in projectVideos.slice(0, 3)" :key="'left-' + index"
                          direction="up" :distance="50" :duration="1.2" :delay="0.3 + (index * 0.1)" :threshold="0.2">
              <div class="mill-reel-item landscape" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
                <video class="mill-reel-video" muted preload="none" loop @loadeddata="handleVideoLoaded($event)">
                  <source :src="getVideoSrc(video.filename)" type="video/mp4" />
                </video>
                <div class="mill-reel-title">{{ video.title }}</div>
              </div>
            </ScrollReveal>
          </div>
          
          <!-- Right Column -->
          <div class="mill-right-column">
            <!-- Logo Item at the top right-->
            <ScrollReveal direction="down" :distance="30" :duration="1" :delay="0.2" :threshold="0.2">
              <div class="mill-logo-item">
                <div class="tradecraft-logo">
                  <img :src="getAssetPath('/images/SVG/Asset 3.svg')" alt="TradeCraft VFX Logo" class="tradecraft-logo-image">
                </div>
              </div>
            </ScrollReveal>
            
            <!-- Second Reel Item - Square Format (1:1) -->
            <ScrollReveal direction="up" :distance="50" :duration="1.2" :delay="0.5" :threshold="0.2">
              <div class="mill-reel-item square" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
                <video class="mill-reel-video" muted preload="none" loop @loadeddata="handleVideoLoaded($event)">
                  <source :src="getVideoSrc(videoSources.square.filename)" type="video/mp4" />
                </video>
                <div class="mill-reel-title">{{ videoSources.square.title }}</div>
              </div>
            </ScrollReveal>

            <!-- Project Videos - Right Column (remaining 1 video only, as we now have 4 total) -->
            <ScrollReveal v-for="(video, index) in projectVideos.slice(3)" :key="'right-' + index"
                          direction="up" :distance="50" :duration="1.2" :delay="0.5 + (index * 0.1)" :threshold="0.2">
              <div class="mill-reel-item square" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
                <video class="mill-reel-video" muted preload="none" loop @loadeddata="handleVideoLoaded($event)">
                  <source :src="getVideoSrc(video.filename)" type="video/mp4" />
                </video>
                <div class="mill-reel-title">{{ video.title }}</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        <!-- Bottom Navigation -->
        <div class="mill-bottom-nav">
          <!-- Direct animation implementation instead of ScrollReveal for better reliability -->
          <div class="animated-button">
            <router-link to="/work" class="mill-nav-link">VIEW ALL WORK</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VideoCarousel from '../components/VideoCarousel.vue';
import ScrollReveal from '../components/ScrollReveal.vue';
import { getVideoPath, getAssetPath } from '../utils/paths.js';
import { projects, getProjectById } from '../data/projects';

export default {
  name: 'HomePage',
  components: {
    VideoCarousel,
    ScrollReveal
  },
  methods: {

    
    /**
     * Play a video when hovering over its container
     * @param {Event} event - The mouseenter event
     */
    playVideo(event) {
      const container = event.currentTarget;
      const videoElement = container.querySelector('video');
      const thumbnailElement = container.querySelector('.mill-reel-thumbnail');
      
      if (videoElement) {
        // Hide thumbnail if it exists
        if (thumbnailElement) {
          thumbnailElement.style.display = 'none';
        }
        videoElement.play().catch(e => console.log('Video play prevented:', e));
      }
      this.setActiveVideoFormat(event.currentTarget);
    },
    
    /**
     * Pause video on mouseleave
     * @param {Event} event - The mouseleave event
     */
    pauseVideo(event) {
      const container = event.currentTarget;
      const videoElement = container.querySelector('video');
      const thumbnailElement = container.querySelector('.mill-reel-thumbnail');
      
      if (videoElement) {
        videoElement.pause();
        
        // Show thumbnail again if it exists
        if (thumbnailElement) {
          thumbnailElement.style.display = 'block';
        }
      }
    },
    
    /**
     * Determine which video format is active based on container class
     * @param {HTMLElement} container - The video container element
     */
    setActiveVideoFormat(container) {
      if (container.classList.contains('landscape')) {
        this.activeVideoFormat = 'landscape';
      } else if (container.classList.contains('portrait')) {
        this.activeVideoFormat = 'portrait';
      } else if (container.classList.contains('square')) {
        this.activeVideoFormat = 'square';
      }
    },
    /**
     * Update video format with the next video in the collection
     * @param {string} format - The video format to update (landscape, portrait, square)
     */
    updateVideoSource(format) {
      // Only proceed if the video has been loaded
      if (!this.videosLoaded[format]) return;
      
      // Get the next index for this format
      this.currentVideoIndices[format] = this.getNextVideoIndex(this.currentVideoIndices[format]);
      const newVideo = this.allVideos[this.currentVideoIndices[format]];
      
      // Update the source
      this.videoSources[format] = {
        filename: newVideo.filename,
        title: newVideo.title
      };
    },
    
    /**
     * Get the next video index in the collection
     * @param {number} currentIndex - The current index
     * @returns {number} The next index
     */
    getNextVideoIndex(currentIndex) {
      return (currentIndex + 1) % this.allVideos.length;
    },
    /**
     * Handle the video loaded event to update UI state
     * @param {Event} event - The loadeddata event
     */
    handleVideoLoaded(event) {
      const videoElement = event.target;
      videoElement.poster = ''; // Remove poster once video is loaded
    },
    
    /**
     * Mark a video format as loaded based on container class
     * @param {HTMLElement} container - The video container element
     */
    markVideoAsLoaded(container) {
      if (container.classList.contains('landscape')) {
        this.videosLoaded.landscape = true;
      } else if (container.classList.contains('portrait')) {
        this.videosLoaded.portrait = true;
      } else if (container.classList.contains('square')) {
        this.videosLoaded.square = true;
      }
    },
    /**
     * Handle scroll events to cycle through videos
     */
    handleScroll() {
      // Clear any existing timer
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
      }
      
      // Only proceed if we're allowed to cycle videos
      if (!this.canCycleVideos) return;
      
      // Get current scroll position and determine direction
      const currentScrollPosition = window.scrollY;
      const scrollingDown = this.determineScrollDirection(currentScrollPosition);
      
      // Apply cooldown to prevent too frequent cycling
      this.applyCycleCooldown();
      
      // Update video sources based on scroll direction
      this.cycleVideos(scrollingDown);
    },
    
    /**
     * Determine scroll direction and update last position
     * @param {number} currentPosition - Current scroll position
     * @returns {boolean} Whether scrolling down (true) or up (false)
     */
    determineScrollDirection(currentPosition) {
      const scrollingDown = currentPosition > this.lastScrollPosition;
      this.lastScrollPosition = currentPosition;
      return scrollingDown;
    },
    
    /**
     * Apply cooldown to prevent too frequent video cycling
     */
    applyCycleCooldown() {
      this.canCycleVideos = false;
      setTimeout(() => {
        this.canCycleVideos = true;
      }, this.cycleCooldown);
    },
    
    /**
     * Cycle through videos with a staggered effect
     * @param {boolean} scrollingDown - Direction of scroll
     */
    cycleVideos(scrollingDown) {
      // Order formats based on scroll direction
      const formats = scrollingDown 
        ? ['landscape', 'portrait', 'square']
        : ['square', 'portrait', 'landscape'];
      
      // Ensure all videos are loaded first
      if (!this.areAllVideosLoaded(formats)) return;
      
      // Apply staggered updates to each format
      this.applyStaggeredUpdates(formats);
    },
    
    /**
     * Check if all video formats are loaded
     * @param {Array<string>} formats - List of video formats to check
     * @returns {boolean} Whether all specified formats are loaded
     */
    areAllVideosLoaded(formats) {
      return formats.every(format => this.videosLoaded[format]);
    },
    
    /**
     * Apply staggered updates to each video format
     * @param {Array<string>} formats - List of video formats to update
     */
    applyStaggeredUpdates(formats) {
      formats.forEach((format, index) => {
        setTimeout(() => {
          this.updateVideoSource(format);
        }, index * 150); // Stagger by 150ms per video for more responsive feel
      });
    },
    
    /**
     * Get the correct video source URL for a video
     * @param {string} filename - The filename of the video
     * @returns {string} The complete path to the video
     */
    getVideoSrc(filename) {
      // For files that already have their full path specified
      if (filename.startsWith('videos/')) {
        return filename.startsWith('/') ? filename : `/${filename}`;
      }
      // For files that use the old path structure
      return getVideoPath(filename);
    },
    /**
     * Generate random project images for carousel video thumbnails
     */
    generateRandomThumbnails() {
      // Get all project images from projects.js
      const allImages = [];
      projects.forEach(project => {
        if (project.images && project.images.length > 0) {
          allImages.push(...project.images);
        }
      });
      
      // Randomly select 3 images
      this.randomProjectImages = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * allImages.length);
        this.randomProjectImages.push(allImages[randomIndex]);
      }
    },
  },
  created() {
    // Add scroll event listener when component is created
    window.addEventListener('scroll', this.handleScroll);
    
    // Generate random project images for carousel video thumbnails
    this.generateRandomThumbnails();
  },
  unmounted() {
    // Remove scroll event listener when component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      // Video playback state
      activeVideoFormat: null,
      canCycleVideos: true,
      cycleCooldown: 1000, // 1 second cooldown between cycles
      lastScrollPosition: 0,
      scrollTimer: null,

      // Random project images for carousel video thumbnails
      randomProjectImages: [],

      // Track video loading status
      videosLoaded: {
        landscape: false,
        portrait: false,
        square: false
      },
      
      // Track indices for video cycling
      currentVideoIndices: {
        landscape: 0,
        portrait: 1,
        square: 2
      },

      // Project videos (only completed projects, no carousel videos)
      projectVideos: [
        // Completed projects only
        { 
          id: 'elevation',
          filename: 'videos/our_work/Elevation/Low/Elevation Full.mp4',
          title: 'Elevation - Visual Effects'
        },
        { 
          id: 'creed-3',
          filename: 'videos/our_work/Creed3/Low/Creed3 Full.mp4',
          title: 'Creed 3 - Boxing Effects'
        },
        { 
          id: 'wings-and-a-prayer',
          filename: 'videos/our_work/WingsAndaPrayer/Low/Wingsandaprayer Full.mp4',
          title: 'Wings and a Prayer'
        },
        { 
          id: 'iss',
          filename: 'videos/our_work/ISS/Low/I.S.S. Movie Asset Reel.mp4',
          title: 'Space Station - Zero Gravity VFX'
        }
      ],
      // Available video sources for each format - using the same sources as the project videos
      videoSources: {
        landscape: { 
          filename: 'Homepage/reels/Low/Tradecraft Og Reel.mp4',
          title: 'TradeCraft VFX Original Reel'
        },
        portrait: { 
          filename: 'Homepage/reels/Low/Tradecraft Sizzl Reel.mp4',
          title: 'TradeCraft VFX Sizzle Reel'
        },
        square: { 
          filename: 'Homepage/reels/Low/Tradecraft Thanx Reel.mp4',
          title: 'Thank You Showcase'
        }
      },
      // All available videos for cycling
      allVideos: [
        // Homepage Carousel Videos
        { 
          filename: 'Homepage/reels/Low/Tradecraft Og Reel.mp4',
          title: 'TradeCraft VFX Original Reel'
        },
        { 
          filename: 'Homepage/reels/Low/Tradecraft Sizzl Reel.mp4',
          title: 'TradeCraft VFX Sizzle Reel'
        },
        { 
          filename: 'Homepage/reels/Low/Tradecraft Thanx Reel.mp4',
          title: 'Thank You Showcase'
        },
        // Project Detail Videos
        { 
          filename: 'Creed3 Casestudy .mp4',
          title: 'Creed 3 - Boxing Effects'
        },
        { 
          filename: 'Iss Case Study Assets.mp4',
          title: 'Space Station - Zero Gravity VFX'
        },
        { 
          filename: 'Elevator Pitch Reup.mp4',
          title: 'Elevator Pitch'
        },
        { 
          filename: 'Elevation Full.mp4',
          title: 'Elevation - Visual Effects'
        },
        { 
          filename: 'Wings and a Prayer.mp4',
          title: 'Wings and a Prayer'
        }
      ],
      // Sample projects removed - using data from projects.js instead
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: var(--color-light-bg);
  text-align: center;
  width: 100%;
  max-width: 100vw;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  color: white;
  text-shadow: 0px 2px 4px rgba(0,0,0,0.5);
}

h1 {
  margin-bottom: var(--spacing-md);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
  text-shadow: 0px 2px 3px rgba(0,0,0,0.4);
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}

.absolute-buttons {
  position: absolute;
  bottom: 10%;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  display: flex;
  justify-content: center;
}

.section {
  padding: var(--spacing-3xl) 0;
  background-color: #000;
  color: #fff;
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: #fff;
}

.service-card {
  background: #111;
  border-radius: 8px;
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  height: 100%;
  text-align: center;
  color: #fff;
  border: 1px solid #222;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.bg-light {
  background-color: #0a0a0a;
}

.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 300px;
  margin-bottom: var(--spacing-lg);
  border: 1px solid #222;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  padding: var(--spacing-md);
  color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: all var(--transition-speed);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-card:hover .project-overlay {
  opacity: 1;
  transform: translateY(0);
}

/* Company Description Section */
.company-description {
  padding: var(--spacing-3xl) 0;
  background-color: #000;
  border-bottom: 1px solid #111;
}

.description-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  font-size: 1.32rem; /* Increased by 10% from 1.2rem */
  line-height: 1.8;
  color: #fff;
  text-align: center;
}

.description-content p {
  margin-bottom: var(--spacing-xl);
  font-family: var(--font-body);
}

.description-content p:first-child {
  font-size: 1.43rem; /* Increased by 10% from 1.3rem */
  color: #fff;
}

.description-content p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .description-content {
    padding: 0 var(--spacing-lg);
    font-size: 1.21rem; /* Increased by 10% from 1.1rem */
  }
  
  .description-content p:first-child {
    font-size: 1.32rem; /* Increased by 10% from 1.2rem */
  }
}

/* Mill Style Text */
.mill-style-description {
  padding: 5rem 0;
  background-color: #000;
  color: #fff;
  text-align: center;
}

.mill-description-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.mill-description-content p {
  margin: 0 auto;
  font-family: 'Georgia', serif;
  font-size: 1.5rem;
  line-height: 1.6;
  font-weight: 300;
  max-width: 900px;
  color: #fff;
  text-align: center;
}

@media (max-width: 768px) {
  .mill-description-content p {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
  
  .mill-style-description {
    padding: 3rem 0;
  }
}

/* Mill Style Work Section */
.mill-style-work-section {
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.work-container {
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
}

.mill-reels-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense; /* This helps fill in gaps created by different sized items */
  width: 100%;
  gap: 20px;
  padding: 20px;
  background-color: #000;
}

.mill-left-column, .mill-right-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
}

.mill-left-column {
  padding-top: 0;
}

.mill-right-column {
  padding-top: 150px; /* Fixed offset instead of percentage */
}

/* This duplicate class declaration has been removed */

.mill-logo-item {
  aspect-ratio: 16/9;
  height: auto;
  background-color: #111;
}

.mill-reel-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1), 
              transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
  will-change: transform, opacity;
  pointer-events: none; /* Ensures clicks pass through to container */
}

/* Thumbnail styling */
.mill-reel-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2; /* Ensure it's above the video */
  transition: opacity 0.4s ease;
}

/* Initial loading state styling */
.mill-reel-item {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  cursor: pointer;
  background-color: #111;
  transition: transform 0.3s ease;
}

/* Different aspect ratio formats */
.mill-reel-item.landscape {
  aspect-ratio: 16/9;
}

.mill-reel-item.portrait {
  aspect-ratio: 9/16;
  grid-row: span 2; /* Makes portrait videos take up 2 row spaces in the grid */
}

.mill-reel-item.square {
  aspect-ratio: 1/1;
}

/* When video is loaded, apply more polished transitions */
.mill-reel-item.loaded .mill-reel-video {
  transition: opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1),
              transform 1s cubic-bezier(0.33, 1, 0.68, 1);
}

/* Mill-style subtle zoom on hover */
.mill-reel-item:hover {
  transform: scale(1.01);
}

.mill-reel-item:hover .mill-reel-video {
  opacity: 1;
  transform: scale(1.04);
}

/* Add dark overlay gradient for better text visibility */
.mill-reel-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  z-index: 1;
  opacity: 0.7;
  transition: opacity 0.4s ease;
}

.mill-reel-item:hover::after {
  opacity: 0.9;
}

.mill-reel-title {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  font-size: 1.25rem;
  color: #fff;
  z-index: 2;
  font-weight: 400;
  letter-spacing: 0.75px;
  opacity: 0.9;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  transform: translateY(5px);
  transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1),
              opacity 0.5s cubic-bezier(0.33, 1, 0.68, 1);
}

.mill-reel-item:hover .mill-reel-title {
  opacity: 1;
  transform: translateY(0);
}

.mill-logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  padding: 2rem;
}

.tradecraft-logo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tradecraft-logo-image {
  width: 80%;
  max-width: 220px;
  height: auto;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}

.mill-bottom-nav {
  padding: 4rem 0 5rem;
  text-align: center;
  background-color: #000;
  width: 100%;
  display: block;
  position: relative;
  z-index: 5;
  overflow: visible;
}

.mill-nav-link {
  display: inline-block;
  padding: 0.8rem 2.5rem;
  border: 1px solid #fff;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.mill-nav-link:hover {
  background-color: #fff;
  color: #000;
}

/* Animated button styles */
.animated-button {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUpIn 1s ease-out 0.5s forwards;
}

@keyframes fadeUpIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .mill-reels-grid {
    grid-template-columns: 1fr;
  }
}

/* Button styles */
.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-speed);
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-secondary {
  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
  color: white;
}

.btn-light {
  background-color: white;
  color: var(--color-primary);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: var(--spacing-2xl) 0;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
.hero-bg-video {
  position: absolute;
  top: 45%;
  left: 40%; /* Moved even further left for perfect alignment */
  min-width: 120%; /* Significantly increased to fully eliminate any gap */
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
  opacity: 0.8;
  pointer-events: none;
}

.hero-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1;
}
</style>


