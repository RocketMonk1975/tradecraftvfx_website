<template>
  <div class="work-page">
    <section class="page-header">
      <div class="container">
        <h1>Our Work</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects" :key="project.id">
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
  name: 'WorkPage',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project Alpha',
          category: 'Visual Effects',
          image: 'require('@/assets/images/placeholder.jpg')'
        },
        {
          id: 2,
          title: 'Project Beta',
          category: 'Animation',
          image: 'require('@/assets/images/placeholder.jpg')'
        },
        {
          id: 3,
          title: 'Project Gamma',
          category: '3D Modeling',
          image: 'require('@/assets/images/placeholder.jpg')'
        },
        {
          id: 4,
          title: 'Project Delta',
          category: 'Motion Graphics',
          image: 'require('@/assets/images/placeholder.jpg')'
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-header {
  background-color: var(--background-dark);
  color: var(--light-text);
  padding: calc(var(--header-height) + var(--spacing-2xl)) 0 var(--spacing-2xl);
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
}

.project-card {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  height: 250px;
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
</style>

