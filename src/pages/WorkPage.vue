<template>
  <div class="work-page">
    <!-- Page Header with orange background wrapper -->
    <div class="orange-hero-wrapper">
      <!-- Orange background that fades out -->
      <div class="orange-background" :class="{ 'fade-out': showCarousel }"></div>
      
      <!-- Image carousel that fades in -->
      <div class="carousel-wrapper" :class="{ 'fade-in': showCarousel }">
        <WorkPageCarousel />
      </div>
      
      <section class="page-header">
        <div class="container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <h1 class="work-hero-text">OUR WORK...</h1>
            <p>Explore our portfolio of visual effects projects</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
    
    <!-- Project Filters -->
    <section class="project-filters">
      <div class="container">
        <div class="filter-options">
          <button 
            class="filter-btn" 
            :class="{ 'active': activeFilter === null }"
            @click="setFilter(null)"
          >
            All
          </button>
          <button 
            v-for="category in categories" 
            :key="category"
            class="filter-btn" 
            :class="{ 'active': activeFilter === category }"
            @click="setFilter(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Projects Grid -->
    <section class="projects-grid">
      <div class="container">
        <!-- Coming Soon messages for categories under development -->
        <div v-if="isComingSoonCategory" class="coming-soon-container">
          <div class="coming-soon-content">
            <h2>Coming Soon</h2>
            <p v-if="activeFilter === 'Commercial'">Our commercial projects will be available here shortly.</p>
            <p v-else-if="activeFilter === 'Architectural Visualization'">Our architectural visualization portfolio is being prepared and will be available soon.</p>
            <p v-else-if="activeFilter === 'Previsualization'">Our previsualization work samples are currently being finalized for display.</p>
            <div class="loading-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
        
        <!-- Regular projects grid -->
        <div v-else class="projects-container">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card"
          >
            <router-link :to="`/project/${project.id}`" class="project-link">
              <div class="project-thumbnail">
                <!-- Coming Soon overlay for incomplete projects -->
                <div v-if="isIncompleteProject(project)" class="coming-soon-overlay">
                  <div class="coming-soon-label">Coming Soon</div>
                </div>
                
                <!-- Video Preview for completed projects -->
                <div v-if="hasVideoPreview(project)" class="video-container">
                  <div class="thumbnail-placeholder" :style="{ backgroundImage: `url(${project.thumbnail || project.heroImage || project.images[0]})` }"></div>
                  <video 
                    class="project-video-preview hidden-video" 
                    :src="getVideoSource(project)" 
                    muted 
                    loop
                    preload="metadata"
                    @mouseenter="playVideo"
                    @mouseleave="pauseVideo"
                  ></video>
                  <div class="video-play-overlay">
                    <span class="play-icon">▶</span>
                  </div>
                </div>
                <!-- Static thumbnails for projects without videos -->
  <template v-if="project.title === 'Creed 3'">
    <div class="thumbnail-placeholder" style="background-image: url('/images/projects/creed3/Creed3_poster.jpg')">
      <!-- Updated with relative path -->
    </div>
  </template>
  <template v-else-if="project.title === 'Elevation'">
    <div class="thumbnail-placeholder" style="background-image: url('/images/projects/elevation/Elevation_poster.jpg')">
      <!-- Updated with relative path -->
    </div>
  </template>
  <template v-else-if="project.title === 'Wings and a Prayer'">
    <div class="thumbnail-placeholder" style="background-image: url('/images/projects/wingANDprayer/wingANDprayer.jpg')">
      <!-- Updated with relative path -->
    </div>
  </template>
  <template v-else-if="project.title === 'Unfrosted'">
    <div class="thumbnail-placeholder" style="background-color: #333; display: flex; align-items: center; justify-content: center;">
      <!-- Placeholder for Unfrosted until image is available -->
      <span style="color: white; font-weight: bold;">Unfrosted</span>
    </div>
  </template>
  <template v-else-if="project.title === 'Hidden Figures'">
    <div class="thumbnail-placeholder" style="background-color: #333; display: flex; align-items: center; justify-content: center;">
      <!-- Placeholder for Hidden Figures until image is available -->
      <span style="color: white; font-weight: bold;">Hidden Figures</span>
    </div>
  </template>
  <template v-else-if="project.title === 'I.S.S.'">
    <div class="thumbnail-placeholder" style="background-color: #000; display: flex; align-items: center; justify-content: center; background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/projects/ISS/ISS_thumbnail.jpg'); background-size: cover; background-position: center;">
      <!-- Using local ISS production still as thumbnail -->
      <span style="color: white; font-weight: bold; font-size: 1.5rem; text-shadow: 0 0 10px rgba(0,0,0,0.8);">I.S.S.</span>
    </div>
  </template>
  <template v-else-if="project.category === 'Feature Film'">
    <div class="thumbnail-placeholder" :style="{ backgroundImage: `url(${project.thumbnail})` }">
      <!-- Other Feature Films use dynamic paths -->
    </div>
  </template>
  <template v-else-if="project.title === 'The Continental'">
    <div class="thumbnail-placeholder" style="background-color: #1a1a1a; display: flex; align-items: center; justify-content: center;">
      <!-- Placeholder for The Continental -->
      <span style="color: #d4af37; font-weight: bold;">The Continental</span>
    </div>
  </template>
  <template v-else-if="project.title === 'The Residence'">
    <div class="thumbnail-placeholder" style="background-color: #1a1a1a; display: flex; align-items: center; justify-content: center;">
      <!-- Placeholder for The Residence -->
      <span style="color: #d4af37; font-weight: bold;">The Residence</span>
    </div>
  </template>
  <template v-else-if="project.title === 'The Originals'">
    <div class="thumbnail-placeholder" style="background-color: #1a1a1a; display: flex; align-items: center; justify-content: center;">
      <!-- Placeholder for The Originals -->
      <span style="color: #d4af37; font-weight: bold;">The Originals</span>
    </div>
  </template>
  <template v-else-if="project.title === 'Picard'">
    <div class="thumbnail-placeholder" style="background-color: #1a1a1a; display: flex; align-items: center; justify-content: center;">
      <!-- Placeholder for Picard -->
      <span style="color: #d4af37; font-weight: bold;">Picard</span>
    </div>
  </template>
  <template v-else-if="project.title === 'Pandora'">
    <div class="thumbnail-placeholder" style="background-color: #1a1a1a; display: flex; align-items: center; justify-content: center;">
      <!-- Placeholder for Pandora -->
      <span style="color: #d4af37; font-weight: bold;">Pandora</span>
    </div>
  </template>
  <template v-else>
    <div class="thumbnail-placeholder" :style="{ backgroundImage: `url(${project.thumbnail})` }">
      <!-- Placeholder for when images aren't available -->
      <div v-if="!project.thumbnail" class="no-image">
        <span>{{ project.title }}</span>
      </div>
    </div>
  </template>
</div>
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <div class="project-meta">
                  <span class="project-category">{{ project.category }}</span>
                  <span class="project-date">{{ project.date }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import ScrollReveal from '../components/ScrollReveal.vue';
import WorkPageCarousel from '../components/WorkPageCarousel.vue';

export default {
  name: 'WorkPage',
  components: {
    ScrollReveal,
    WorkPageCarousel
  },
  data() {
    return {
      projects,
      activeFilter: null,
      showCarousel: false
    };
  },
  computed: {
    categories() {
      // Custom ordered categories - always show these regardless of project existence
      const orderedCategories = [
        'Feature Film',
        'TV Series',
        'Commercial',
        'Architectural Visualization',
        'Previsualization'
      ];
      
      // Get unique categories from projects
      const existingCategories = [...new Set(projects.map(p => p.category))];
      
      // Always include our defined categories, even if they have no projects yet
      // Then add any other categories that might exist in projects but aren't in our predefined order
      return orderedCategories
        .concat(existingCategories.filter(category => !orderedCategories.includes(category)));
    },
    isComingSoonCategory() {
      // Define which categories should show the "Coming Soon" message
      const comingSoonCategories = ['Commercial', 'Architectural Visualization', 'Previsualization'];
      return comingSoonCategories.includes(this.activeFilter);
    },
    filteredProjects() {
      // Define priority projects that should appear first
      const priorityProjects = ['iss', 'creed-3', 'wings-and-a-prayer', 'elevation'];
      
      // Create a function to sort projects by priority
      const sortByPriority = (a, b) => {
        const aIndex = priorityProjects.indexOf(a.id);
        const bIndex = priorityProjects.indexOf(b.id);
        
        // If both are priority projects, sort by priority order
        if (aIndex !== -1 && bIndex !== -1) {
          return aIndex - bIndex;
        }
        // If only a is priority, it comes first
        if (aIndex !== -1) {
          return -1;
        }
        // If only b is priority, it comes first
        if (bIndex !== -1) {
          return 1;
        }
        // If neither are priority, maintain original order
        return 0;
      };
      
      // If no filter is active, return all projects sorted by priority
      if (this.activeFilter === null) {
        return [...projects].sort(sortByPriority);
      }
      
      // For categories with "Coming Soon" message, return empty array
      if (this.isComingSoonCategory) {
        return [];
      }
      
      // Otherwise, filter projects by the selected category and sort by priority
      return [...projects]
        .filter(project => project.category === this.activeFilter)
        .sort(sortByPriority);
    }
  },
  mounted() {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Wait for the orange background to display for half a second before showing the carousel
    setTimeout(() => {
      this.showCarousel = true;
    }, 500);
  },
  methods: {
    setFilter(category) {
      this.activeFilter = category;
    },
    
    hasVideoPreview(project) {
      // Check if project has video(s) available
      return (project.videos && (project.videos.high || project.videos.low)) || project.videoUrl;
    },
    
    isIncompleteProject(project) {
      // Check if project is incomplete and should show "Coming Soon"
      // All projects that should display the "Coming Soon" overlay on thumbnails
      const incompleteProjects = [
        // Feature Films
        'unfrosted', 'hidden-figures',
        // TV Series
        'the-continental', 'the-residence', 'the-originals', 'picard', 'pandora'
      ];
      return incompleteProjects.includes(project.id);
    },
    
    getVideoSource(project) {
      // Return the appropriate video source (preferring low quality for previews)
      if (project.videos) {
        return project.videos.low || project.videos.high;
      }
      return project.videoUrl;
    },
    
    playVideo(event) {
      const video = event.target;
      video.classList.remove('hidden-video');
      video.play();
    },
    
    pauseVideo(event) {
      const video = event.target;
      video.pause();
      video.classList.add('hidden-video');
    },
    getVideoPoster(id) {
      // Map project IDs to actual poster image paths
      if (id === 'mystic-echoes') {
        console.log('Getting poster for mystic-echoes');
        return '/images/projects/wingANDprayer/wingANDprayer.jpg';
      }
      if (id === 'stellar-odyssey') {
        console.log('Getting poster for stellar-odyssey');
        return '/images/projects/creed3/Creed3_poster.jpg';
      }
      if (id === 'quantum-realm') {
        console.log('Getting poster for quantum-realm');
        return '/images/projects/elevation/Elevation_poster.jpg';
      }
      console.log('No poster match for ID:', id);
      return '';
    },
    playVideo(event) {
      console.log('Play video triggered');
      const video = event.target;
      video.currentTime = 0;
      video.play();
    },
    pauseVideo(event) {
      console.log('Pause video triggered');
      const video = event.target;
      video.pause();
      video.currentTime = 0;
    }
  }
}

import { getVideoPath } from '../utils/paths.js';
</script>

<style scoped>
/* Orange hero wrapper - same approach as About page */
.orange-hero-wrapper {
  height: 80vh; /* Match the About page height */
  width: 100%;
  position: relative;
  overflow: hidden;
  overflow: hidden;
  z-index: 1;
}

.page-header {
  padding: calc(var(--header-height) + 30px) 0 30px;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
}

.page-header .container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10%; /* Match the About page padding */
  max-width: 100%; /* Override container's default max-width */
  width: 100%;
  box-sizing: border-box;
}

.work-hero-text {
  font-size: 104px;
  font-family: 'Lato', sans-serif;
  font-weight: 900; /* Black weight */
  font-style: italic;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem 0; /* Reduced bottom margin by 50% */
  position: relative;
  text-align: left;
  line-height: 1;
}

.page-header p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0;
  font-style: italic;
  font-weight: 300;
  opacity: 0.9;
}

/* Categories section with improved visibility */
.project-filters {
  padding: 1.25rem 0;
  background-color: #000;
  text-align: center;
  position: sticky; /* Make the filter bar sticky */
  top: 0; /* Stick to the top of the viewport */
  z-index: 100; /* Ensure it appears above other content */
}

.filter-options {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0.5rem 0;
}

.filter-btn {
  background: transparent;
  border: none;
  padding: 0.75rem 1rem; /* Increased padding for larger touch target */
  cursor: pointer;
  font-family: var(--font-heading);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  color: rgba(255,255,255,0.5);
  font-size: 1rem; /* Slightly larger font */
  transition: color 0.3s ease;
  min-height: 44px; /* Minimum height for touch targets */
  min-width: 44px; /* Minimum width for touch targets */
  display: inline-block;
}

.filter-btn::after {
  content: '';
  position: absolute;
  left: 1rem; /* Adjusted to align with text when padding is applied */
  right: 1rem; /* Added right position to match padding */
  bottom: 6px; /* Moved up slightly for better visibility */
  width: 0;
  height: 2px; /* Made thicker for better visibility */
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.filter-btn:hover {
  color: white;
}

.filter-btn:hover::after,
.filter-btn.active::after {
  width: calc(100% - 2rem); /* Adjusted to account for padding */
}

.filter-btn.active {
  font-weight: 700;
  color: white;
}

.projects-grid {
  padding: 4rem 0;
  background-color: #000;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns for a 3x2 grid */
  grid-template-rows: repeat(2, auto); /* Two rows for the 3x2 grid */
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: #111;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  overflow: hidden;
  border-radius: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 2px solid transparent;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  border-top: 2px solid var(--color-primary);
}

.project-link {
  display: block;
  text-decoration: none;
  color: white;
}

.project-thumbnail {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;
}

.thumbnail-placeholder {
  width: 100%;
  height: 100%;
  background-color: #222;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.video-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: #111;
}

.project-video-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease, opacity 0.3s ease;
  display: block;
  z-index: 1;
  background-color: #111;
}

.project-card:hover .project-video-preview {
  transform: scale(1.05);
}

.hidden-video {
  opacity: 0;
  z-index: 1;
  pointer-events: none;
}

.project-card:hover .hidden-video {
  opacity: 1;
  pointer-events: auto;
}

.video-play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.play-icon {
  font-size: 2.5rem;
  color: white;
  text-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.project-card:hover .video-play-overlay {
  opacity: 1;
}

.project-card:hover .thumbnail-placeholder {
  transform: scale(1.05);
}

.no-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.project-info {
  padding: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.project-info h3 {
  margin: 0;
  font-size: 1.5rem;
  color: white;
  font-weight: 500;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
}

.project-category {
  color: var(--color-primary);
  font-weight: 500;
}

.project-date {
  color: white;
  opacity: 0.7;
}

/* Coming Soon Styles */
.coming-soon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.coming-soon-content {
  background-color: #111;
  border-radius: 8px;
  padding: 4rem 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  border-top: 3px solid var(--color-primary);
  max-width: 600px;
  width: 100%;
}

.coming-soon-content h2 {
  font-size: 3rem;
  margin: 0 0 1rem;
  font-weight: 700;
  color: var(--color-primary);
  font-family: 'Lato', sans-serif;
  font-style: italic;
}

.coming-soon-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: white;
  opacity: 0.8;
}

/* Loading animation for Coming Soon */
.loading-indicator {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 2rem;
}

.loading-indicator span {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: var(--color-primary);
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;
}

.loading-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 1100px) {
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .projects-container {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
/* New styles for the animated orange background and carousel */
.orange-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  z-index: 1;
  transition: opacity 1s ease-in-out;
  opacity: 1;
}

.orange-background.fade-out {
  opacity: 0;
}

.carousel-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-wrapper.fade-in {
  opacity: 1;
}

/* Ensure the page header content is on top of both backgrounds */
.page-header {
  position: relative;
  z-index: 2;
}
/* Coming Soon overlay for incomplete project cards */
.coming-soon-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  pointer-events: none;
}

.coming-soon-label {
  background-color: var(--color-primary);
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-size: 1.2rem;
  transform: rotate(-15deg);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
