<template>
  <div class="project-detail-page">
    <div v-if="project">
      <!-- Hero Section with Auto-playing Carousel -->
      <div class="hero-section-wrapper">
        <hero-image-carousel :images="heroImages">
          <div class="container">
            <div class="project-header">
              <h1>{{ project.title }}</h1>
              <div class="project-meta">
                <p><strong>Client:</strong> {{ project.client }}</p>
                <p><strong>Category:</strong> {{ project.category }}</p>
                <p><strong>Year:</strong> {{ project.date }}</p>
              </div>
            </div>
          </div>
        </hero-image-carousel>
        
        <!-- Coming Soon overlay for hero section if project is incomplete -->
        <div v-if="isIncompleteProject" class="coming-soon-section-overlay">
          <div class="coming-soon-badge">Coming Soon</div>
        </div>
      </div>

      <!-- Project Overview Section -->  
      <section class="section project-overview">
        <div class="container">
          <div class="row">
            <div class="column-10 column-tablet-12 offset-1 offset-tablet-0">
              <ScrollReveal>
                <h2 class="section-title">OVERVIEW</h2>
                <p class="lead-text">{{ project.description }}</p>
              </ScrollReveal>
              
              <ScrollReveal :delay="0.2">
                <h3 class="subsection-title">CHALLENGE</h3>
                <p class="lead-text">{{ project.challenge }}</p>
                
                <h3 class="subsection-title">SOLUTION</h3>
                <p class="lead-text">{{ project.solution }}</p>
              </ScrollReveal>
            </div>
          </div>
          
          <!-- Services Section -->  
          <div class="expertise-section">
            <ScrollReveal>
              <h2 class="section-title">SERVICES</h2>
            </ScrollReveal>
            
            <div class="expertise-grid">
              <ScrollReveal 
                v-for="(service, index) in project.services" 
                :key="service"
                direction="up" 
                :delay="0.1 * (index + 1)"
              >
                <div class="expertise-card">
                  <h3 class="expertise-title">{{ service }}</h3>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Gallery -->  
      <section class="section project-gallery" v-if="project.images && project.images.length">
        <div class="container">
          <ScrollReveal>
            <h2 class="section-title">GALLERY</h2>
          </ScrollReveal>
          
          <div class="gallery-grid-wrapper">
            <!-- Coming Soon overlay for gallery if project is incomplete -->
            <div v-if="isIncompleteProject" class="coming-soon-section-overlay">
              <div class="coming-soon-badge">Coming Soon</div>
            </div>
            
            <div class="gallery-grid">
              <ScrollReveal 
                v-for="(image, index) in project.images" 
                :key="index"
                :delay="0.1 * (index % 3)"
                direction="up"
              >
                <div class="gallery-item" :style="{ backgroundImage: `url(${fixImagePath(image)})` }">
                  <img :src="fixImagePath(image)" :alt="`${project.title} - Image ${index + 1}`" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <!-- Video Section -->  
      <section class="section project-video" v-if="project.videos || project.videoUrl || isIncompleteProject">
        <div class="container">
          <ScrollReveal>
            <h2 class="section-title">PROJECT VIDEO</h2>
          </ScrollReveal>
          
          <ScrollReveal :delay="0.2">
            <div class="video-container-wrapper">
              <!-- Coming Soon overlay for video if project is incomplete -->
              <div v-if="isIncompleteProject" class="coming-soon-section-overlay">
                <div class="coming-soon-badge">Coming Soon</div>
              </div>
              
              <div class="video-container">
                <!-- Embedded video player with controls -->
                <video
                  controls
                  playsinline
                  preload="metadata"
                  class="project-video-player"
                  :poster="fixImagePath(project.thumbnail || project.heroImage)"
                >
                  <!-- If using new video format with high/low options -->
                  <template v-if="project.videos">
                    <!-- MP4 (Low Quality) - Most compatible format -->
                    <source :src="fixVideoPath(project.videos.low)" type="video/mp4">
                    <!-- Use MP4 MIME type even for MOV to improve compatibility -->
                    <source :src="fixVideoPath(project.videos.high)" type="video/mp4">
                  </template>
                  <!-- Fallback for older video format -->
                  <template v-else-if="project.videoUrl">
                    <source :src="getVideoPath(project.videoUrl, 'projects')" type="video/mp4">
                  </template>
                  Your browser does not support the video tag.
                </video>
              </div>
              <!-- Video quality selector if both options available -->
              <div class="video-quality-selector" v-if="project.videos">
                <p>Quality: 
                  <span class="quality-option" @click="setVideoQuality('low')" :class="{ active: currentQuality === 'low' }">Low</span> | 
                  <span class="quality-option" @click="setVideoQuality('high')" :class="{ active: currentQuality === 'high' }">High</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <!-- Navigation -->
      <section class="section project-navigation">
        <div class="container">
          <ScrollReveal :delay="0.3">
            <div class="nav-links">
              <router-link to="/work" class="back-to-work">
                ← Back to Work
              </router-link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>

    <!-- Not Found State -->
    <div v-else class="project-not-found">
      <div class="container">
        <ScrollReveal>
          <h1 class="dream-big-text">Project Not Found</h1>
          <p class="lead-text">The project you're looking for doesn't exist or has been removed.</p>
          <router-link to="/work" class="btn">
            View Our Work
          </router-link>
        </ScrollReveal>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectById } from '../data/projects.js';
import { getVideoPath, getAssetPath } from '../utils/paths.js';
import HeroImageCarousel from '../components/HeroImageCarousel.vue';
import ScrollReveal from '../components/ScrollReveal.vue';

export default {
  name: 'ProjectDetailPage',
  components: {
    HeroImageCarousel,
    ScrollReveal
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      project: null,
      heroImages: [],
      currentQuality: 'low' // Default to low quality
    };
  },
  created() {
    this.loadProject();
  },
  mounted() {
    // Setup video player with error handling and debugging
    this.setupVideoErrorHandling();
  },
  watch: {
    id() {
      this.loadProject();
    }
  },
  methods: {
    // -----------------
    // Video Playback Methods
    // -----------------
    
    /**
     * Set up video error handling and debugging
     * Attaches event listeners to detect and log video playback issues
     */
    setupVideoErrorHandling() {
      this.$nextTick(() => {
        const videoElement = document.querySelector('.project-video-player');
        if (videoElement) {
          // Log successful loading
          videoElement.addEventListener('canplay', () => {
            console.log('Video loaded successfully:', videoElement.currentSrc);
          });
          
          // Log errors
          videoElement.addEventListener('error', (e) => {
            console.error('Video error:', videoElement.error);
            if (videoElement.error) {
              console.error('Error code:', videoElement.error.code);
              console.error('Error message:', videoElement.error.message);
            }
            console.error('Source URL:', videoElement.currentSrc);
          });
          
          // Try to identify the failure point
          const sources = videoElement.querySelectorAll('source');
          sources.forEach(source => {
            source.addEventListener('error', (e) => {
              console.error('Source failed to load:', source.src);
            });
          });
        }
      });
    },
    
    /**
     * Set video quality (high or low)
     * @param {string} quality - Quality level ('high' or 'low')
     */
    setVideoQuality(quality) {
      this.currentQuality = quality;
      const videoElement = document.querySelector('.project-video-player');
      
      if (videoElement) {
        try {
          console.log(`Switching to ${quality} quality video`);
          
          // Store current time and playing state
          const currentTime = videoElement.currentTime;
          const wasPlaying = !videoElement.paused;
          
          // Get video path with proper error handling
          let videoPath = '';
          if (quality === 'high' && this.project.videos?.high) {
            videoPath = this.fixVideoPath(this.project.videos.high);
          } else if (this.project.videos?.low) {
            videoPath = this.fixVideoPath(this.project.videos.low);
          }
          
          console.log(`New video path: ${videoPath}`);
          
          // Set the source with error handling
          if (!videoPath) {
            throw new Error(`Could not get ${quality} quality video path`);
          }
          
          // Create a new source element programmatically
          videoElement.innerHTML = '';
          const source = document.createElement('source');
          source.src = videoPath;
          source.type = 'video/mp4'; // Using MP4 MIME type for all videos for better compatibility
          videoElement.appendChild(source);
          
          // Add error handler to the source
          source.onerror = (e) => {
            console.error(`Error loading ${quality} quality video:`, e);
          };
          
          // Load the new source
          videoElement.load();
          
          // Restore playback position and state
          videoElement.currentTime = currentTime;
          if (wasPlaying) {
            const playPromise = videoElement.play();
            if (playPromise) {
              playPromise.catch(err => {
                console.warn('Auto-play was prevented:', err);
              });
            }
          }
        } catch (err) {
          console.error('Error setting video quality:', err);
        }
      }
    },
    // -----------------
    // Path Handling Methods
    // -----------------
    
    /**
     * Get the correct path for an asset (passthrough to utility function)
     * @param {string} path - Asset path
     * @returns {string} - Full path with environment adjustment
     */
    getAssetPath(path) {
      return getAssetPath(path);
    },
    
    /**
     * Get the correct path for a video (passthrough to utility function)
     * @param {string} filename - Video filename
     * @param {string} directory - Video directory
     * @returns {string} - Full video path with environment adjustment
     */
    getVideoPath(filename, directory) {
      return getVideoPath(filename, directory);
    },

    /**
     * Fix video paths to work on production site
     * @param {string} path - Original video path
     * @returns {string} - Corrected video path
     */
    fixVideoPath(path) {
      if (!path) return '';
      
      // If path already starts with /videos, it's ready to use
      if (path.startsWith('/videos/')) {
        return path;
      }
      
      // If path contains videos/ but doesn't start with /, add leading slash
      if (path.includes('videos/')) {
        return path.startsWith('/') ? path : `/${path}`;
      }
      
      // For any other case, assume it's a relative path and add /videos/ prefix
      return `/videos/${path}`;
    },
    
    /**
     * Fix image paths to work on production site
     * @param {string} path - Original image path
     * @returns {string} - Corrected image path
     */
    fixImagePath(path) {
      if (!path) return '';
      
      // If path already starts with /images, it's ready to use
      if (path.startsWith('/images/')) {
        return path;
      }
      
      // If path contains images/ but doesn't start with /, add leading slash
      if (path.includes('images/')) {
        return path.startsWith('/') ? path : `/${path}`;
      }
      
      // For any other case, assume it's a relative path and add /images/ prefix
      return `/images/${path}`;
    },
    
    // -----------------
    // Project Data Methods
    // -----------------
    
    /**
     * Load project data based on ID from URL parameters
     * This is the main entry point for loading project content
     */
    loadProject() {
      this.project = getProjectById(this.id);
      
      // If project is found, set up hero carousel images
      if (this.project) {
        this.setupHeroCarousel();
        // Reset to default quality
        this.currentQuality = 'low';
      }
    },
    
    /**
     * Set up the hero image carousel with available project images
     * Processes paths through fixImagePath for consistent handling
     */
    setupHeroCarousel() {
      // Start with hero image
      const images = [];
      
      // Add hero image first if available
      if (this.project.heroImage) {
        images.push(this.fixImagePath(this.project.heroImage));
      }
      
      // Add thumbnail as second image if different from hero
      if (this.project.thumbnail && this.project.thumbnail !== this.project.heroImage) {
        images.push(this.fixImagePath(this.project.thumbnail));
      }
      
      // Add all gallery images
      if (this.project.images && this.project.images.length) {
        this.project.images.forEach(image => {
          const fixedPath = this.fixImagePath(image);
          // Don't duplicate images already in the carousel
          if (!images.includes(fixedPath)) {
            images.push(fixedPath);
          }
        });
      }
      
      this.heroImages = images;
    }
  },
  computed: {
    /**
     * Determine if this project is incomplete (not yet done)
     * Used to display the 'Coming Soon' overlay on incomplete projects
     * @returns {boolean} Whether this is a project in progress
     */
    isIncompleteProject() {
      if (!this.project) return false;
      
      // All projects that should display the "Coming Soon" overlay on media sections
      const incompleteProjects = [
        // Feature Films
        'unfrosted', 'hidden-figures',
        // TV Series
        'the-continental', 'the-residence', 'the-originals', 'picard', 'pandora'
      ];
      
      return this.project.status === 'incomplete' || 
             this.project.status === 'coming-soon' || 
             incompleteProjects.includes(this.project.id);
    }
  }
}
</script>

<style scoped>
/* Ensure the entire page has the same black background to prevent flashes during load */
.project-detail-page {
  background-color: #000;
  color: white;
}

/* Hero header styling */
.project-header {
  position: relative;
  padding: 3rem 0;
  width: 100%;
  z-index: 10;
}

.project-header h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Lato', sans-serif;
  font-weight: 900; /* Black weight */
  letter-spacing: -0.02em;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.project-meta p {
  margin: 0;
  font-weight: 300;
}

/* Content section styling */
.section {
  background-color: #000;
  color: white;
  padding: var(--spacing-3xl) 0;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-xl);
  position: relative;
  display: inline-block;
  text-transform: uppercase;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--color-primary);
}

.lead-text {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: var(--spacing-xl);
}

.subsection-title {
  font-size: 1.4rem;
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
  position: relative;
  text-transform: uppercase;
}

/* Expertise/Services Section Styling */
.expertise-section {
  margin-top: var(--spacing-3xl);
  margin-bottom: 60px;
  padding-top: var(--spacing-2xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: var(--spacing-xl);
}

.expertise-card {
  background-color: #111;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-primary);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
  background-color: #1a1a1a;
}

.expertise-title {
  color: var(--color-primary);
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* Gallery grid styling */
.project-gallery {
  background-color: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: var(--spacing-xl);
}

.gallery-item {
  aspect-ratio: 16/9;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* Video section styling */
.project-video {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.video-container {
  margin-top: var(--spacing-xl);
  aspect-ratio: 16/9;
  background-color: #111;
  overflow: hidden;
  border-top: 1px solid var(--color-primary);
}

.project-video-player {
  width: 100%;
  height: 100%;
  background-color: #000;
}

.video-quality-selector {
  margin-top: 15px;
  text-align: right;
  color: #888;
  font-size: 14px;
}

.quality-option {
  cursor: pointer;
  padding: 3px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.quality-option:hover {
  color: var(--color-primary);
}

.quality-option.active {
  color: var(--color-primary);
  font-weight: bold;
}

.project-video-player:focus {
  outline: none;
  border: 2px solid var(--color-primary);
}

/* Custom video controls styling */
.project-video-player::-webkit-media-controls {
  background-color: rgba(0, 0, 0, 0.6);
}

.project-video-player::-webkit-media-controls-play-button,
.project-video-player::-webkit-media-controls-timeline,
.project-video-player::-webkit-media-controls-volume-slider {
  filter: brightness(1.2);
}

/* Navigation section */
.project-navigation {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-links {
  display: flex;
  justify-content: space-between;
}

.back-to-work {
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 600;
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;
  font-size: 1.1rem;
}

.back-to-work:hover {
  color: var(--color-accent);
  transform: translateX(-5px);
}

/* Not found state */
.project-not-found {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: white;
  text-align: center;
}

.dream-big-text {
  font-size: 64px;
  font-family: 'Lato', sans-serif;
  font-weight: 900; /* Black weight */
  font-style: italic;
  letter-spacing: -0.02em;
  margin: 0 0 1rem 0;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--color-primary);
  color: white;
  text-decoration: none;
  font-weight: 600;
  margin-top: 2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background-color: var(--color-accent);
  transform: translateY(-3px);
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .project-header h1 {
    font-size: 3rem;
  }
  
  .dream-big-text {
    font-size: 52px;
  }
}

@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .lead-text {
    font-size: 1.25rem;
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .dream-big-text {
    font-size: 42px;
  }
}

@media (max-width: 480px) {
  .project-header h1 {
    font-size: 2rem;
  }
  
  .dream-big-text {
    font-size: 32px;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .subsection-title {
    font-size: 1.2rem;
  }
  
  .lead-text {
    font-size: 1.1rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
/* Coming Soon overlay styles */
.hero-section-wrapper,
.gallery-grid-wrapper,
.video-container-wrapper {
  position: relative;
}

.coming-soon-section-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}

.coming-soon-badge {
  background-color: var(--color-primary);
  color: white;
  font-weight: bold;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1.5rem;
  transform: rotate(-10deg);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
