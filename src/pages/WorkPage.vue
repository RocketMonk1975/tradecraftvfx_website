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
            <HoverImage :src="project.image" :alt="project.title">
              <h3>{{ project.title }}</h3>
              <p>{{ project.category }}</p>
            </HoverImage>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HoverImage from '../components/HoverImage.vue'

export default {
  name: 'WorkPage',
  components: {
    HoverImage
  },
  data() {
    return {
      projects: [
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
        },
        {
          id: 3,
          title: 'Project Gamma',
          category: '3D Modeling',
          image: require('@/assets/images/placeholder.jpg')
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

.row {
  row-gap: var(--spacing-lg);
}
</style>
