<template>
  <div class="home-page">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Creating Digital Experiences That Inspire</h1>
          <p class="hero-subtitle">We build beautiful worlds and incredible stories.</p>
          <div class="hero-buttons">
            <a href="#services" class="btn btn-primary">Our Services</a>
            <a href="#work" class="btn btn-secondary">View Our Work</a>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div class="service-item" v-for="service in services" :key="service.id">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="section bg-alt">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in featuredProjects" :key="project.id">
            <img :src="project.image" :alt="project.title" class="project-image">
            <div class="project-overlay">
              <h3>{{ project.title }}</h3>
              <p>{{ project.category }}</p>
              <router-link to="/work" class="btn btn-primary">View Project</router-link>
            </div>
          </div>
        </div>
        <div class="section-cta">
          <router-link to="/work" class="btn btn-secondary">View All Projects</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      services: [
        {
          id: 1,
          icon: '🎨',
          title: 'Concept Design',
          description: 'Creative concept art and visualization.'
        },
        {
          id: 2,
          icon: '🎬',
          title: '3D Animation',
          description: 'Advanced 3D modeling and animation.'
        },
        {
          id: 3,
          icon: '✨',
          title: 'Visual Effects',
          description: 'Professional effects for film and media.'
        }
      ],
      featuredProjects: [
        {
          id: 1,
          title: 'Project Alpha',
          category: 'Visual Effects',
          image: require('@/assets/images/placeholder.jpg')
        },
        {
          id: 2,
          title: 'Project Beta',
          category: 'Animation',
          image: require('@/assets/images/placeholder.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--background-alt);
  padding: var(--spacing-2xl) 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-md);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xl);
  color: var(--secondary-color);
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
  margin-bottom: var(--spacing-2xl);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.service-item {
  background-color: var(--background-light);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: center;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-lg);
}

.project-card {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  height: 300px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: var(--spacing-lg);
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-card:hover .project-overlay {
  transform: translateY(0);
  opacity: 1;
}

.section-cta {
  text-align: center;
  margin-top: var(--spacing-2xl);
}

.bg-alt {
  background-color: var(--background-alt);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-4xl);
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>


