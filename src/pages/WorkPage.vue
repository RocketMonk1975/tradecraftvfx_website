<template>
  <div class="work-page">
    <section class="page-header">
      <div class="container">
        <ScrollReveal>
          <h1>Our Work</h1>
        </ScrollReveal>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <ScrollReveal>
          <div class="section-intro">
            <h2>Featured Projects</h2>
            <p>Explore our portfolio of visual effects, animations, and interactive experiences.</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div class="featured-video">
            <VideoPlayer 
              src="videos/sample.mp4"
              poster="images/video-poster.svg"
              title="Project Showcase"
              description="A compilation of our best visual effects work"
              :controls="true"
              :overlay="true"
              :muted="true"
            />
          </div>
        </ScrollReveal>
        
        <div class="projects-grid">
          <ScrollReveal :stagger="0.1">
            <div class="row">
              <div class="column-4 column-tablet-6 column-mobile-12" v-for="(project, index) in projects" :key="index">
                <div class="project-card">
                  <div class="project-image">
                    <img :src="getImagePath(project.image)" :alt="project.title">
                    <div class="project-overlay">
                      <button class="view-button" @click="openProject(project)">View Project</button>
                    </div>
                  </div>
                  <div class="project-info">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.category }}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    
    <!-- Project Modal -->
    <transition name="fade">
      <div class="project-modal" v-if="selectedProject" @click="closeProject">
        <div class="modal-content" @click.stop>
          <button class="close-button" @click="closeProject">&times;</button>
          <div class="modal-header">
            <h2>{{ selectedProject.title }}</h2>
            <span class="project-category">{{ selectedProject.category }}</span>
          </div>
          <div class="modal-body">
            <img :src="getImagePath(selectedProject.image)" :alt="selectedProject.title" class="modal-image">
            <div class="project-description">
              <p>{{ selectedProject.description }}</p>
              <div class="project-meta">
                <div class="meta-item">
                  <strong>Client:</strong> {{ selectedProject.client }}
                </div>
                <div class="meta-item">
                  <strong>Year:</strong> {{ selectedProject.year }}
                </div>
                <div class="meta-item">
                  <strong>Services:</strong> {{ selectedProject.services.join(', ') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ScrollReveal from '../components/ScrollReveal.vue';
import VideoPlayer from '../components/VideoPlayer.vue';

export default {
  name: 'WorkPage',
  components: {
    ScrollReveal,
    VideoPlayer
  },
  data() {
    return {
      selectedProject: null,
      projects: [
        {
          title: 'Cinematic VFX',
          category: 'Film',
          image: 'placeholder.jpg',
          description: 'Advanced visual effects for a sci-fi feature film, including environment extensions, particle systems, and character enhancements.',
          client: 'Universal Pictures',
          year: '2023',
          services: ['VFX Compositing', '3D Modeling', 'Animation']
        },
        {
          title: 'Product Launch',
          category: 'Commercial',
          image: 'placeholder.jpg',
          description: 'High-end 3D product visualization and animation for a major tech company\'s flagship product launch.',
          client: 'Tech Innovations Co.',
          year: '2023',
          services: ['3D Modeling', 'Animation', 'Lighting']
        },
        {
          title: 'Interactive Experience',
          category: 'Installation',
          image: 'placeholder.jpg',
          description: 'Interactive museum installation featuring real-time visual effects and user-responsive animations.',
          client: 'Modern Art Museum',
          year: '2022',
          services: ['Interactive Design', 'Real-time VFX', 'Animation']
        },
        {
          title: 'Game Cinematic',
          category: 'Gaming',
          image: 'placeholder.jpg',
          description: 'Stunning game cinematic trailer with photorealistic environments and character animations.',
          client: 'Epic Games',
          year: '2022',
          services: ['Character Animation', 'Environment Design', 'VFX']
        },
        {
          title: 'Music Video Effects',
          category: 'Music',
          image: 'placeholder.jpg',
          description: 'Creative visual effects and motion graphics for an award-winning artist\'s music video.',
          client: 'Universal Music',
          year: '2021',
          services: ['VFX', 'Motion Graphics', 'Color Grading']
        },
        {
          title: 'VR Experience',
          category: 'Virtual Reality',
          image: 'placeholder.jpg',
          description: 'Immersive virtual reality experience with interactive elements and environmental effects.',
          client: 'VR World',
          year: '2021',
          services: ['VR Development', '3D Environments', 'Interactive Design']
        }
      ]
    };
  },
  methods: {
    getImagePath(imageName) {
      return import.meta.env.BASE_URL + imageName;
    },
    openProject(project) {
      this.selectedProject = project;
      document.body.classList.add('no-scroll');
    },
    closeProject() {
      this.selectedProject = null;
      document.body.classList.remove('no-scroll');
    }
  }
}
</script>

<style scoped>
.page-header {
  background-color: var(--color-primary);
  color: white;
  padding: calc(var(--header-height) + 50px) 0 50px;
  text-align: center;
}

.section-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
}

.featured-video {
  margin-bottom: var(--spacing-2xl);
}

.projects-grid {
  margin-top: var(--spacing-2xl);
}

.project-card {
  margin-bottom: var(--spacing-xl);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.project-image {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 250px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-button {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: var(--color-secondary);
}

.project-info {
  padding: var(--spacing-md) 0;
}

.project-info h3 {
  margin-bottom: var(--spacing-xs);
}

.project-info p {
  color: var(--color-secondary);
  font-size: 0.9rem;
}

/* Modal Styles */
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-md);
}

.modal-content {
  position: relative;
  background-color: white;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  border-radius: 8px;
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-secondary);
  z-index: 10;
}

.modal-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid #eee;
}

.project-category {
  display: inline-block;
  background-color: var(--color-light-bg);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-top: var(--spacing-xs);
}

.modal-body {
  padding: 0;
}

.modal-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.project-description {
  padding: var(--spacing-lg);
}

.project-meta {
  margin-top: var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.meta-item {
  margin-bottom: var(--spacing-sm);
}

/* Modal Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .modal-image {
    height: 250px;
  }
  
  .project-meta {
    grid-template-columns: 1fr;
  }
}
</style>
