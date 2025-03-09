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
            </div>
          </div>
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
          image: '/placeholder.jpg'
        },
        {
          id: 2,
          title: 'Project Beta',
          category: 'Animation',
          image: '/placeholder.jpg'
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
  background-color: var(--color-light-bg);
  padding: var(--spacing-2xl) 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
  font-family: var(--font-heading);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-xl);
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}

.section {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-item {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.project-card {
  position: relative;
  border-radius: 8px;
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
  padding: 2rem;
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

.bg-alt {
  background-color: var(--color-light-bg);
}

/* Button styles */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-black);
}

.btn-secondary {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: white;
}
</style>
