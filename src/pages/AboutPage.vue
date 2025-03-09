<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1>About Us</h1>
      </div>
    </section>
    
    <section class="page-content">
      <div class="container">
        <p>This is the about page content. This will be filled with actual content later.</p>
      </div>
    </section>
  </div>
<!-- Team Section with Background Image -->
<section class="section-with-bg bg-image bg-overlay" style="background-image: url('@/assets/images/team-bg.jpg');">
  <div class="container">
    <h2 class="section-title text-center">Our Team</h2>
    <p class="section-subtitle text-center">Meet the creative minds behind our stunning visual effects</p>
    
    <div class="row">
      <!-- Team members go here -->
      <div class="column-4 column-tablet-6 column-mobile-4">
        <div class="team-member">
          <div class="team-photo" style="background-image: url('@/assets/images/team-placeholder.jpg');"></div>
          <h3>John Doe</h3>
          <p class="team-role">VFX Supervisor</p>
          <p>Over 15 years of experience in creating stunning visual effects for major film productions.</p>
        </div>
      </div>
      
      <!-- More team members... -->
    </div>
  </div>
</section>\n

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.page-header {
  padding: calc(var(--header-height) + var(--spacing-2xl)) 0 var(--spacing-xl);
  background-color: var(--background-alt);
}

.page-content {
  padding: var(--spacing-2xl) 0;
}
/* Team section */
.team-member {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.team-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto var(--spacing-md);
  background-size: cover;
  background-position: center;
}

.team-role {
  color: var(--accent-color);
  margin-bottom: var(--spacing-md);
  font-weight: 500;
}\n
