<template>
  <div class="work-page">
    <!-- Page Header with orange background wrapper -->
    <div class="orange-hero-wrapper">
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
        <div class="projects-container">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card"
          >
            <router-link :to="`/project/${project.id}`" class="project-link">
              <div class="project-thumbnail">
  <template v-if="project.title === 'Creed 3'">
    <div class="thumbnail-placeholder" style="background-image: url('https://raw.githubusercontent.com/RocketMonk1975/tradecraftvfx_website/main/public/images/projects/creed3/Creed3_poster.jpg')">
      <!-- Direct GitHub URL for Creed 3 -->
    </div>
  </template>
  <template v-else-if="project.title === 'Elevation'">
    <div class="thumbnail-placeholder" style="background-image: url('https://raw.githubusercontent.com/RocketMonk1975/tradecraftvfx_website/main/public/images/projects/elevation/Elevation_poster.jpg')">
      <!-- Direct GitHub URL for Elevation -->
    </div>
  </template>
  <template v-else-if="project.title === 'Wings and a Prayer'">
    <div class="thumbnail-placeholder" style="background-image: url('https://raw.githubusercontent.com/RocketMonk1975/tradecraftvfx_website/main/public/images/projects/wingANDprayer/wingANDprayer.jpg')">
      <!-- Direct GitHub URL for Wings and a Prayer -->
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
  <template v-else-if="project.category === 'Feature Film'">
    <div class="thumbnail-placeholder" :style="{ backgroundImage: `url(${project.thumbnail})` }">
      <!-- Other Feature Films use dynamic paths -->
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
import { projects } from '../data/projects.js';
import ScrollReveal from '../components/ScrollReveal.vue';

export default {
  name: 'WorkPage',
  components: {
    ScrollReveal
  },
  data() {
    return {
      projects: projects,
      activeFilter: null
    };
  },
  computed: {
    categories() {
      // Get unique categories
      const categories = this.projects.map(project => project.category);
      return [...new Set(categories)];
    },
    filteredProjects() {
      if (!this.activeFilter) {
        return this.projects;
      }
      return this.projects.filter(
        project => project.category === this.activeFilter
      );
    }
  },
  mounted() {
    console.log('WorkPage mounted with projects:', this.projects);
    // Log the Feature Film projects to see if they're identified correctly
    console.log('Feature Film projects:', this.projects.filter(p => p.category === 'Feature Film'));
  },
  methods: {
    setFilter(category) {
      this.activeFilter = category;
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
</script>

<style scoped>
/* Orange hero wrapper - same approach as About page */
.orange-hero-wrapper {
  background-color: var(--color-primary);
  height: 80vh; /* Match the About page height */
  width: 100%;
  position: relative;
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
  padding: 1.5rem 0;
  background-color: #000;
  text-align: center;
}

.filter-options {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.filter-btn {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: var(--font-heading);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.filter-btn::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.filter-btn:hover {
  color: white;
}

.filter-btn:hover::after,
.filter-btn.active::after {
  width: 100%;
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
  transition: transform 0.5s ease;
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
</style>
