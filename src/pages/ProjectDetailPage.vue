<template>
  <div class="project-detail">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-image">
        <img :src="getImagePath(project.heroImage)" :alt="project.title">
      </div>
      <div class="hero-overlay">
        <div class="container">
          <ScrollReveal>
            <h1 class="project-title">{{ project.title }}</h1>
            <div class="project-category">{{ project.category }}</div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Project Overview -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="column-8 column-tablet-12">
            <ScrollReveal>
              <div class="project-description">
                <h2>Overview</h2>
                <div class="description-content" v-html="project.description"></div>
              </div>
            </ScrollReveal>
          </div>
          <div class="column-4 column-tablet-12">
            <ScrollReveal direction="right">
              <div class="project-meta">
                <div class="meta-item">
                  <h4>Client</h4>
                  <p>{{ project.client }}</p>
                </div>
                <div class="meta-item">
                  <h4>Year</h4>
                  <p>{{ project.year }}</p>
                </div>
                <div class="meta-item">
                  <h4>Services</h4>
                  <ul class="services-list">
                    <li v-for="(service, index) in project.services" :key="index">
                      {{ service }}
                    </li>
                  </ul>
                </div>
                <div class="meta-item" v-if="project.link">
                  <h4>Link</h4>
                  <p><a :href="project.link" target="_blank" rel="noopener">View Project</a></p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <!-- Media Gallery -->
    <section class="section gallery-section">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Gallery</h2>
        </ScrollReveal>
        
        <div class="gallery-grid">
          <ScrollReveal v-for="(item, index) in project.gallery" :key="index" :delay="index * 0.1">
            <div class="gallery-item" @click="openLightbox(index)">
              <img 
                v-if="item.type === 'image'" 
                :src="getImagePath(item.src)" 
                :alt="item.caption || project.title"
                class="gallery-image"
              >
              <div 
                v-else-if="item.type === 'video'" 
                class="gallery-video-wrapper"
              >
                <img :src="getImagePath(item.poster)" :alt="item.caption || project.title">
                <div class="video-play-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.5)"/>
                    <path d="M10 8l6 4-6 4V8z" fill="#fff"/>
                  </svg>
                </div>
              </div>
              <div class="gallery-caption" v-if="item.caption">{{ item.caption }}</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="section results-section" v-if="project.results">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Results</h2>
        </ScrollReveal>
        
        <div class="row">
          <div v-for="(result, index) in project.results" :key="index" class="column-3 column-tablet-6 column-mobile-12">
            <ScrollReveal :delay="index * 0.1">
              <div class="result-card">
                <div class="result-value">{{ result.value }}</div>
                <div class="result-label">{{ result.label }}</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="section related-projects">
      <div class="container">
        <ScrollReveal>
          <h2 class="section-title">Related Projects</h2>
        </ScrollReveal>
        
        <div class="row">
          <div v-for="(relatedProject, index) in relatedProjects" :key="index" class="column-4 column-tablet-6 column-mobile-12">
            <ScrollReveal :delay="index * 0.1">
              <div class="related-project-card">
                <router-link :to="{ name: 'ProjectDetail', params: { id: relatedProject.id } }">
                  <div class="related-project-image">
                    <img :src="getImagePath(relatedProject.thumbnail)" :alt="relatedProject.title">
                  </div>
                  <div class="related-project-info">
                    <h3>{{ relatedProject.title }}</h3>
                    <p>{{ relatedProject.category }}</p>
                  </div>
                </router-link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Project -->
    <section class="next-project">
      <router-link :to="{ name: 'ProjectDetail', params: { id: nextProject.id } }" class="next-project-link">
        <div class="next-project-content">
          <div class="next-label">Next Project</div>
          <h3 class="next-title">{{ nextProject.title }}</h3>
        </div>
        <div class="next-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M14 5l7 7-7 7M21 12H3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </router-link>
    </section>

    <!-- Lightbox -->
    <div class="lightbox" v-if="lightboxActive" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <!-- Image Lightbox -->
        <img 
          v-if="currentLightboxItem.type === 'image'" 
          :src="getImagePath(currentLightboxItem.src)" 
          :alt="currentLightboxItem.caption || project.title"
          class="lightbox-image"
        >
        
        <!-- Video Lightbox -->
        <div v-else-if="currentLightboxItem.type === 'video'" class="lightbox-video-container">
          <VideoPlayer 
            :src="currentLightboxItem.src" 
            :poster="getImagePath(currentLightboxItem.poster)" 
            :controls="true"
            :autoplay="true"
          />
        </div>
        
        <!-- Lightbox Caption -->
        <div class="lightbox-caption" v-if="currentLightboxItem.caption">
          {{ currentLightboxItem.caption }}
        </div>
        
        <!-- Lightbox Controls -->
        <button class="lightbox-close" @click="closeLightbox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
          </svg>
        </button>
        
        <button class="lightbox-prev" v-if="lightboxIndex > 0" @click.stop="prevLightboxItem">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
          </svg>
        </button>
        
        <button class="lightbox-next" v-if="lightboxIndex < project.gallery.length - 1" @click.stop="nextLightboxItem">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from '../components/ScrollReveal.vue';
import VideoPlayer from '../components/VideoPlayer.vue';
import { gsap } from 'gsap';
import projects from '../data/projects.js';

export default {
  name: 'ProjectDetailPage',
  components: {
    ScrollReveal,
    VideoPlayer
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      lightboxActive: false,
      lightboxIndex: 0
    }
  },
  computed: {
    project() {
      return projects.find(p => p.id === this.id) || {};
    },
    relatedProjects() {
      return projects
        .filter(p => p.id !== this.id && p.category === this.project.category)
        .slice(0, 3);
    },
    nextProject() {
      const currentIndex = projects.findIndex(p => p.id === this.id);
      if (currentIndex < 0 || currentIndex === projects.length - 1) {
        return projects[0];
      }
      return projects[currentIndex + 1];
    },
    currentLightboxItem() {
      if (this.project.gallery && this.project.gallery.length) {
        return this.project.gallery[this.lightboxIndex];
      }
      return { type: 'image', src: '' };
    }
  },
  methods: {
    getImagePath(imageName) {
      if (!imageName) return '';
      if (imageName.startsWith('http')) return imageName;
      return import.meta.env.BASE_URL + imageName;
    },
    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxActive = true;
      document.body.classList.add('no-scroll');
      
      // Animate lightbox opening
      gsap.fromTo('.lightbox', 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
    },
    closeLightbox() {
      gsap.to('.lightbox', {
        opacity: 0, 
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          this.lightboxActive = false;
          document.body.classList.remove('no-scroll');
        }
      });
    },
    prevLightboxItem() {
      if (this.lightboxIndex > 0) {
        this.lightboxIndex--;
      }
    },
    nextLightboxItem() {
      if (this.lightboxIndex < this.project.gallery.length - 1) {
        this.lightboxIndex++;
      }
    }
  },
  mounted() {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add keyboard navigation for lightbox
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    handleKeydown(e) {
      if (!this.lightboxActive) return;
      
      switch (e.key) {
        case 'Escape':
          this.closeLightbox();
          break;
        case 'ArrowLeft':
          this.prevLightboxItem();
          break;
        case 'ArrowRight':
          this.nextLightboxItem();
          break;
      }
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  height: 80vh;
  min-height: 500px;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5));
  display: flex;
  align-items: flex-end;
  padding-bottom: 100px;
}

.project-title {
  color: white;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.project-category {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Project Overview */
.project-description {
  margin-bottom: var(--spacing-xl);
}

.project-meta {
  background-color: var(--color-light-bg);
  padding: var(--spacing-lg);
  border-radius: 8px;
}

.meta-item {
  margin-bottom: var(--spacing-md);
}

.meta-item:last-child {
  margin-bottom: 0;
}

.meta-item h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.services-list li {
  padding: 0.25rem 0;
}

.meta-item a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.meta-item a:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

/* Gallery Section */
.gallery-section {
  background-color: var(--color-light-bg);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  margin-top: var(--spacing-xl);
}

.gallery-item {
  position: relative;
  grid-column: span 4;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:nth-child(3n+1) {
  grid-column: span 6;
}

.gallery-item:nth-child(3n+2) {
  grid-column: span 3;
}

.gallery-item:nth-child(3n+3) {
  grid-column: span 3;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.9rem;
}

.gallery-video-wrapper {
  position: relative;
}

.gallery-video-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;
}

.gallery-item:hover .video-play-button {
  transform: translate(-50%, -50%) scale(1.1);
}

/* Results Section */
.results-section {
  background-color: var(--color-primary);
  color: white;
}

.result-card {
  text-align: center;
  padding: var(--spacing-lg);
}

.result-value {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.result-label {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

/* Related Projects */
.related-project-card {
  margin-bottom: var(--spacing-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.related-project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.related-project-image {
  border-radius: 8px;
  overflow: hidden;
  height: 200px;
}

.related-project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.related-project-card:hover .related-project-image img {
  transform: scale(1.05);
}

.related-project-info {
  padding: var(--spacing-md) 0;
}

.related-project-info h3 {
  margin-bottom: 0.25rem;
}

/* Next Project */
.next-project {
  background-color: var(--color-light-bg);
}

.next-project-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-2xl) var(--spacing-lg);
  color: var(--color-primary);
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.next-project-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.next-label {
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.next-title {
  font-size: 1.5rem;
  margin: 0;
}

.next-arrow {
  transition: transform 0.3s ease;
}

.next-project-link:hover .next-arrow {
  transform: translateX(10px);
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-image {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
}

.lightbox-video-container {
  width: 80vw;
  max-width: 1200px;
}

.lightbox-caption {
  color: white;
  text-align: center;
  padding: var(--spacing-sm) 0;
  max-width: 80%;
  margin: 0 auto;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  background: none;
  border: none;
  color: white;
  position: absolute;
  cursor: pointer;
  padding: 15px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  opacity: 1;
}

.lightbox-close {
  top: 20px;
  right: 20px;
}

.lightbox-prev {
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.lightbox-next {
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .project-title {
    font-size: 2.5rem;
  }
  
  .gallery-item {
    grid-column: span 6 !important;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 60vh;
  }
  
  .project-title {
    font-size: 2rem;
  }
  
  .gallery-item {
    grid-column: span 12 !important;
  }
  
  .lightbox-video-container {
    width: 95vw;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 50vh;
    min-height: 300px;
  }
  
  .hero-overlay {
    padding-bottom: 50px;
  }
  
  .project-title {
    font-size: 1.5rem;
  }
  
  .result-value {
    font-size: 2rem;
  }
  
  .next-title {
    font-size: 1.2rem;
  }
}
</style>
