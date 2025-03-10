<template>
  <div class="project-detail-page">
    <div v-if="project">
      <!-- Hero Section -->
      <section class="project-hero" :style="{ backgroundImage: `url(${project.heroImage || project.thumbnail})` }">
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
      </section>

      <!-- Project Overview -->
      <section class="project-overview">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8">
              <h2>OVERVIEW</h2>
              <p>{{ project.description }}</p>
              
              <div class="project-challenge-solution">
                <div class="challenge">
                  <h3>CHALLENGE</h3>
                  <p>{{ project.challenge }}</p>
                </div>
                <div class="solution">
                  <h3>SOLUTION</h3>
                  <p>{{ project.solution }}</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="project-services">
                <h3>SERVICES</h3>
                <ul>
                  <li v-for="service in project.services" :key="service">
                    {{ service }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Gallery -->
      <section class="project-gallery" v-if="project.images && project.images.length">
        <div class="container">
          <h2>GALLERY</h2>
          <div class="gallery-grid">
            <div 
              v-for="(image, index) in project.images" 
              :key="index" 
              class="gallery-item"
              :style="{ backgroundImage: `url(${image})` }"
            >
              <img :src="image" :alt="`${project.title} - Image ${index + 1}`" />
            </div>
          </div>
        </div>
      </section>

      <!-- Video Section -->
      <section class="project-video" v-if="project.videoUrl">
        <div class="container">
          <h2>PROJECT VIDEO</h2>
          <div class="video-container">
            <!-- Replace with actual video embed component -->
            <div class="video-placeholder">
              <a :href="project.videoUrl" target="_blank" rel="noopener noreferrer">
                Watch Project Video
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="project-navigation">
        <div class="container">
          <div class="nav-links">
            <router-link to="/work" class="back-to-work">
              ? Back to Work
            </router-link>
          </div>
        </div>
      </section>
    </div>

    <!-- Not Found State -->
    <div v-else class="project-not-found">
      <div class="container">
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <router-link to="/work" class="btn">
          View Our Work
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectById } from '../data/projects.js';

export default {
  name: 'ProjectDetailPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      project: null
    };
  },
  created() {
    this.loadProject();
  },
  watch: {
    id() {
      this.loadProject();
    }
  },
  methods: {
    loadProject() {
      this.project = getProjectById(this.id);
      
      // Update page title with project name
      if (this.project) {
        document.title = `${this.project.title} | TradeCraft VFX`;
      } else {
        document.title = 'Project Not Found | TradeCraft VFX';
      }
    }
  }
}
</script>

<style scoped>
.project-hero {
  min-height: 70vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  color: white;
  padding: 0;
}

.project-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
}

.project-header {
  position: relative;
  padding: 3rem 0;
  width: 100%;
}

.project-header h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.project-meta p {
  margin: 0;
}

.project-overview {
  padding: 5rem 0;
}

.project-challenge-solution {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.project-services {
  background-color: var(--color-light-bg);
  padding: 2rem;
}

.project-services ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-services li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.project-services li:last-child {
  border-bottom: none;
}

.project-gallery {
  padding: 5rem 0;
  background-color: var(--color-light-bg);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.gallery-item {
  aspect-ratio: 16/9;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.project-video {
  padding: 5rem 0;
}

.video-container {
  margin-top: 2rem;
  aspect-ratio: 16/9;
  background-color: #000;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-placeholder a {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.video-placeholder a:hover {
  background-color: var(--color-accent);
}

.project-navigation {
  padding: 3rem 0;
  border-top: 1px solid rgba(0,0,0,0.1);
}

.nav-links {
  display: flex;
  justify-content: space-between;
}

.back-to-work {
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 600;
  transition: color 0.3s ease;
}

.back-to-work:hover {
  color: var(--color-accent);
}

.project-not-found {
  padding: calc(var(--header-height) + 5rem) 0;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 2rem;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: var(--color-accent);
}

@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2.5rem;
  }
  
  .project-challenge-solution {
    grid-template-columns: 1fr;
  }
}
</style>
