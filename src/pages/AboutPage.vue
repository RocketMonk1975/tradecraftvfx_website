<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1>About Us</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="column-6 column-tablet-12">
            <h2>Our Story</h2>
            <p>TradeVFX was founded with a passion for creating extraordinary visual experiences. Our team combines technical expertise with artistic vision.</p>
            <p>With years of experience in the industry, we've worked on a variety of projects from feature films to commercials and video games.</p>
          </div>
          <div class="column-6 column-tablet-12">
            <div class="about-image">
              <img :src="getImagePath('placeholder.jpg')" alt="About TradeVFX">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      // The basePath will be automatically injected by Vite
    }
  },
  methods: {
    getImagePath(imageName) {
      // Use import.meta.env.BASE_URL which is automatically provided by Vite
      return import.meta.env.BASE_URL + imageName;
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

.about-image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}
</style>
