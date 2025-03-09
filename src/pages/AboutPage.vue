<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1>About Us</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Our Story</h2>
            <p>TradeVFX was founded with a passion for creating extraordinary visual experiences. Our team combines technical expertise with artistic vision to deliver exceptional visual effects and animations.</p>
            
            <p>With years of experience in the industry, we've worked on a variety of projects from feature films to commercials and video games.</p>
            
            <h2>Our Mission</h2>
            <p>We strive to push the boundaries of what's possible in visual storytelling, bringing imagination to life through cutting-edge technology and creative innovation.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.page-header {
  background-color: var(--background-dark);
  color: var(--light-text);
  padding: calc(var(--header-height) + var(--spacing-2xl)) 0 var(--spacing-2xl);
  text-align: center;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-text h2 {
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-md);
}

.about-text p {
  margin-bottom: var(--spacing-lg);
}
</style>
