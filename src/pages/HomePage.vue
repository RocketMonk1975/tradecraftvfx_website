<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg-overlay"></div>
      <video class="hero-bg-video" autoplay muted loop playsinline>
        <source :src="heroVideoSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="container">
        <div class="hero-content">
          <h1>Creating Digital Experiences That Inspire</h1>
          <p class="hero-subtitle">We build beautiful worlds and incredible stories.</p>
          <div class="hero-buttons">
            <a href="#services" class="btn btn-primary">Our Services</a>
            <a href="#work" class="btn btn-secondary">View Our Work</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="row">
          <div class="column-4 column-tablet-6 column-mobile-12" v-for="service in services" :key="service.id">
            <div class="service-card">
              <div class="service-icon">{{ service.icon }}</div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section id="work" class="section bg-light">
      <div class="container">
        <h2 class="section-title">Featured Work</h2>
        <div class="row">
          <div class="column-6 column-tablet-6 column-mobile-12" v-for="project in projects" :key="project.id">
            <div class="project-card">
              <img :src="project.image" :alt="project.title" class="project-image">
              <div class="project-overlay">
                <h3>{{ project.title }}</h3>
                <p>{{ project.category }}</p>
                <router-link to="/work" class="btn btn-light">View Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import heroVideo from '../assets/videos/hero-bg.mp4';

export default {
  name: 'HomePage',
  data() {
    return {
      heroVideoSrc: heroVideo,
      basePath: '/tradecraftvfx_website/',
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

.section {
  padding: var(--spacing-3xl) 0;
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.service-card {
  background: white;
  border-radius: 8px;
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  height: 100%;
  text-align: center;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.bg-light {
  background-color: var(--color-light-bg);
}

.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 300px;
  margin-bottom: var(--spacing-lg);
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
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
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


