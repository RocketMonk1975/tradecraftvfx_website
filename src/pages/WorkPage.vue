<template>
  <div class="work-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>OUR WORK</h1>
        <p>Explore our portfolio of visual effects projects</p>
      </div>
    </section>
    
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
                <div class="thumbnail-placeholder" :style="{ backgroundImage: `url(${project.thumbnail})` }">
                  <!-- Placeholder for when images aren't available -->
                  <div v-if="!project.thumbnail" class="no-image">
                    <span>{{ project.title }}</span>
                  </div>
                </div>
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

export default {
  name: 'WorkPage',
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
  methods: {
    setFilter(category) {
      this.activeFilter = category;
    }
  }
}
</script>

<style scoped>
.page-header {
  padding: calc(var(--header-height) + 50px) 0 50px;
  background-color: var(--color-primary);
  color: white;
  text-align: center;
}

.project-filters {
  padding: 2rem 0;
  background-color: var(--color-light-bg);
}

.filter-options {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-btn {
  background: transparent;
  border: none;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  font-family: var(--font-heading);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
}

.filter-btn::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.filter-btn:hover::after,
.filter-btn.active::after {
  width: 80%;
}

.filter-btn.active {
  font-weight: 700;
}

.projects-grid {
  padding: 4rem 0;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.project-link {
  display: block;
  text-decoration: none;
  color: var(--color-text);
}

.project-thumbnail {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.thumbnail-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--color-light-bg);
  background-size: cover;
  background-position: center;
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
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin: 0;
  font-size: 1.5rem;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-light-text);
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
