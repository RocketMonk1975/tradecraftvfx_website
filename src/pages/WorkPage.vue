<template>
  <div class="work-page">
    <section class="page-header">
      <div class="container">
        <h1>Our Work</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="column-4 column-tablet-6 column-mobile-12" v-for="project in projects" :key="project.id">
            <div class="project-card">
              <img :src="project.image" :alt="project.title" class="project-image">
              <div class="project-overlay">
                <h3>{{ project.title }}</h3>
                <p>{{ project.category }}</p>
              </div>
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
          image: '/placeholder.jpg'
        },
        {
          id: 2,
          title: 'Project Beta',
          category: 'Animation',
          image: '/placeholder.jpg'
        },
        {
          id: 3,
          title: 'Project Gamma',
          category: '3D Modeling',
          image: '/placeholder.jpg'
        }
      ]
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

.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 250px;
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
</style>
