<template>
  <div class="work-page">
    <section class="page-header">
      <div class="container">
        <h1>Our Work</h1>
        <p class="lead">Selected projects that showcase our expertise</p>
      </div>
    </section>
    
    <section class="portfolio-filters">
      <div class="container">
        <div class="filters">
          <button 
            class="filter-btn" 
            :class="{ active: currentFilter === 'all' }" 
            @click="setFilter('all')"
          >
            All
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: currentFilter === 'web' }" 
            @click="setFilter('web')"
          >
            Web Design
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: currentFilter === 'branding' }" 
            @click="setFilter('branding')"
          >
            Branding
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: currentFilter === 'development' }" 
            @click="setFilter('development')"
          >
            Development
          </button>
        </div>
      </div>
    </section>
    
    <section class="portfolio">
      <div class="container">
        <div class="portfolio-grid">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="index" 
            class="portfolio-item"
          >
            <div class="project-card">
              <div class="project-image">
                <div class="placeholder-image" :style="`background-color: ${project.bgColor}; height: 300px;`"></div>
              </div>
              <div class="project-overlay">
                <h3>{{ project.title }}</h3>
                <p>{{ project.category }}</p>
                <router-link :to="`/work/${project.slug}`" class="btn btn-light">View Project</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="testimonials">
      <div class="container">
        <h2 class="text-center">What Our Clients Say</h2>
        <div class="testimonial-slider">
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"Working with this team was a game-changer for our business. They delivered a website that exceeded our expectations and has significantly improved our conversion rates."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <div class="placeholder-avatar"></div>
              </div>
              <div class="author-info">
                <h4>John Smith</h4>
                <p>CEO, Example Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Have a project in mind?</h2>
          <p>Let's create something amazing together.</p>
          <button class="btn btn-light">Get in Touch</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'WorkPage',
  setup() {
    const currentFilter = ref('all');
    
    const projects = [
      {
        title: 'Modern E-Commerce Platform',
        category: 'web',
        slug: 'ecommerce-platform',
        bgColor: '#e6f2ff'
      },
      {
        title: 'Brand Identity Redesign',
        category: 'branding',
        slug: 'brand-redesign',
        bgColor: '#f9e6ff'
      },
      {
        title: 'Custom CRM Development',
        category: 'development',
        slug: 'crm-development',
        bgColor: '#e6fff9'
      },
      {
        title: 'Corporate Website',
        category: 'web',
        slug: 'corporate-website',
        bgColor: '#fff6e6'
      },
      {
        title: 'Mobile App UI Design',
        category: 'web',
        slug: 'mobile-app-ui',
        bgColor: '#f0f0f0'
      },
      {
        title: 'E-commerce API Integration',
        category: 'development',
        slug: 'api-integration',
        bgColor: '#e6ffed'
      }
    ];
    
    const filteredProjects = computed(() => {
      if (currentFilter.value === 'all') {
        return projects;
      } else {
        return projects.filter(project => project.category === currentFilter.value);
      }
    });
    
    const setFilter = (filter) => {
      currentFilter.value = filter;
    };
    
    return {
      currentFilter,
      filteredProjects,
      setFilter
    };
  }
}
</script>

<style scoped>
.page-header {
  padding: calc(var(--header-height) + var(--spacing-2xl)) 0 var(--spacing-xl);
  background-color: var(--background-alt);
  text-align: center;
}

.page-header .lead {
  max-width: 700px;
  margin: 0 auto;
  color: var(--secondary-color);
}

.portfolio-filters {
  padding: var(--spacing-xl) 0;
}

.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.filter-btn {
  background: none;
  border: none;
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: color 0.3s;
  color: var(--secondary-color);
}

.filter-btn:hover {
  color: var(--accent-color);
}

.filter-btn.active {
  color: var(--accent-color);
  font-weight: 500;
  position: relative;
}

.filter-btn.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: var(--spacing-md);
  right: var(--spacing-md);
  height: 2px;
  background-color: var(--accent-color);
}

.portfolio {
  padding-bottom: var(--spacing-3xl);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.portfolio-item {
  position: relative;
}

.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  padding: var(--spacing-lg);
  text-align: center;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay h3 {
  margin-bottom: var(--spacing-xs);
  color: white;
}

.project-overlay p {
  margin-bottom: var(--spacing-md);
  opacity: 0.8;
}

.testimonials {
  padding: var(--spacing-3xl) 0;
  background-color: var(--background-alt);
}

.testimonial {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.testimonial-content {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--secondary-color);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: var(--spacing-lg);
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
}

.placeholder-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ccc;
}

.author-info h4 {
  margin: 0;
  font-size: var(--font-size-md);
}

.author-info p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--secondary-color);
}

.cta {
  padding: var(--spacing-3xl) 0;
  background-color: var(--accent-color);
  color: var(--light-text);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.cta h2 {
  color: var(--light-text);
  margin-bottom: var(--spacing-md);
}

.cta p {
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-light {
  background-color: var(--light-text);
  color: var(--accent-color);
  border: none;
}

.btn-light:hover {
  background-color: rgba(255,255,255,0.9);
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .testimonial-content {
    font-size: var(--font-size-md);
  }
}
</style>