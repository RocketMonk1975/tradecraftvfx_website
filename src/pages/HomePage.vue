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
                  <source :src="getCorrectPath(videoSources.landscape.src)" type="video/mp4" />
                </video>
                <div class="mill-reel-title">{{ videoSources.landscape.title }}</div>
              </div>
            </ScrollReveal>
            
            <!-- Third Reel Item - Portrait Format (9:16) -->
            <ScrollReveal direction="up" :distance="50" :duration="1.2" :delay="0.3" :threshold="0.2">
              <div class="mill-reel-item portrait" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
                <video class="mill-reel-video" muted preload="none" loop @loadeddata="handleVideoLoaded($event)">
                  <source :src="getCorrectPath(videoSources.portrait.src)" type="video/mp4" />
                </video>
                <div class="mill-reel-title">{{ videoSources.portrait.title }}</div>
              </div>
            </ScrollReveal>
          </div>
          
          <!-- Right Column -->
          <div class="mill-right-column">
            <!-- Logo Item at the top right-->
            <ScrollReveal direction="down" :distance="30" :duration="1" :delay="0.2" :threshold="0.2">
              <div class="mill-logo-item">
                <div class="tradecraft-logo">
                  <img src="/images/SVG/Asset 3.svg" alt="TradeCraft VFX Logo" class="tradecraft-logo-image">
                </div>
              </div>
            </ScrollReveal>
            
            <!-- Second Reel Item - Square Format (1:1) -->
            <ScrollReveal direction="up" :distance="50" :duration="1.2" :delay="0.5" :threshold="0.2">
              <div class="mill-reel-item square" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
                <video class="mill-reel-video" muted preload="none" loop @loadeddata="handleVideoLoaded($event)">
                  <source :src="getCorrectPath(videoSources.square.src)" type="video/mp4" />
                </video>
                <div class="mill-reel-title">{{ videoSources.square.title }}</div>
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

export default {
  name: 'HomePage',
  components: {
    VideoCarousel,
    ScrollReveal
  },
  methods: {
    // Get correct path depending on environment
    getCorrectPath(path) {
      // For GitHub Pages, prefix with repository name
      if (window.location.hostname === 'rocketmonk1975.github.io') {
        return '/tradecraftvfx_website' + path;
      }
      // For local development, use the path as is
      return path;
    },
    
    playVideo(event) {
      const video = event.currentTarget.querySelector('video');
      if (video) {
        // Add a slight delay to mimic The Mill site behavior
        setTimeout(() => {
          video.play()
            .catch(e => console.log('Video play prevented:', e));
        }, 50);
      }
    },
    pauseVideo(event) {
      const video = event.currentTarget.querySelector('video');
      if (video) {
        video.pause();
      }
    },
    handleVideoLoaded(event) {
      // Mark videos as loaded to trigger animations
      const container = event.target.closest('.mill-reel-item');
      if (container) {
        container.classList.add('loaded');
      }
    },
    // Update video format with the next video in the collection
    updateVideoSource(format) {
      // Get current index and increment it
      let nextIndex = (this.videoSources[format].index + 1) % this.allVideos.length;
      
      // Update the video source and title
      this.videoSources[format] = {
        src: this.allVideos[nextIndex].src,
        title: this.allVideos[nextIndex].title,
        index: nextIndex
      };
    },
    // Handle scroll events to cycle through videos
    handleScroll() {
      // Throttle scroll events
      if (this.isScrolling) return;
      
      this.isScrolling = true;
      
      // Update a different video format based on scroll direction
      if (window.scrollY > this.lastScrollY) {
        // Scrolling down
        this.updateVideoSource('landscape');
      } else {
        // Scrolling up
        this.updateVideoSource('portrait');
      }
      
      // Every third scroll, update the square video
      this.scrollCount++;
      if (this.scrollCount % 3 === 0) {
        this.updateVideoSource('square');
      }
      
      // Store current scroll position
      this.lastScrollY = window.scrollY;
      
      // Reset throttle after delay
      setTimeout(() => {
        this.isScrolling = false;
      }, 500);
    }
  },
  created() {
    // Add scroll event listener when component is created
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    // Remove scroll event listener when component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      // Scroll tracking properties
      lastScrollY: 0,
      isScrolling: false,
      scrollCount: 0,
      basePath: '/tradecraftvfx_website/',
      // All available web-optimized videos with their titles
      allVideos: [
        {
          src: '/videos/Homepage/reels/WEB_optimized_mp4/Tradecraft Sizzlreel.mp4',
          title: 'TradeCraft VFX Sizzle Reel'
        },
        {
          src: '/videos/Homepage/reels/WEB_optimized_mp4/Thank-You Reel.mp4',
          title: 'Thank You Showcase'
        },
        {
          src: '/videos/Homepage/reels/WEB_optimized_mp4/Iss Case Study Assets.mp4',
          title: 'I.S.S.'
        },
        {
          src: '/videos/Homepage/reels/WEB_optimized_mp4/Rocket Reel 2021.mp4',
          title: 'TradeCraft VFX Reel 2021'
        },
        {
          src: '/videos/Homepage/reels/WEB_optimized_mp4/Creed3 Casestudy .mp4',
          title: 'Creed 3'
        }
      ],
      // Current video sources for each format
      videoSources: {
        landscape: {
          src: '/videos/Homepage/reels/WEB_optimized_mp4/Tradecraft Sizzlreel.mp4',
          title: 'TradeCraft VFX Sizzle Reel',
          index: 0
        },
        portrait: {
          src: '/videos/Homepage/reels/WEB_optimized_mp4/Thank-You Reel.mp4',
          title: 'Thank You Showcase',
          index: 1
        },
        square: {
          src: '/videos/Homepage/reels/WEB_optimized_mp4/Rocket Reel 2021.mp4',
          title: 'TradeCraft VFX Reel 2021',
          index: 3
        }
      },
      services: [
        {
          id: 1,
          icon: '🎨',
          title: 'Concept Design',
          description: 'Creative concept art and visualization for films and games.'
        },
        {
          id: 2,
          icon: '🎬',
          title: '3D Animation',
          description: 'Advanced 3D modeling and animation for immersive experiences.'
        },
        {
          id: 3,
          icon: '✨',
          title: 'Visual Effects',
          description: 'Professional VFX for film, television and digital media.'
        }
      ],
      projects: [
        {
          id: 1,
          title: 'Project Alpha',
          category: 'Visual Effects',
          image: import.meta.env.BASE_URL + 'placeholder.jpg'
        },
        {
          id: 2,
          title: 'Project Beta',
          category: 'Animation',
          image: import.meta.env.BASE_URL + 'placeholder.jpg'
        }
      ]
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


