<template>
  <div class="home-page">
    <!-- Hero Section -->
    <!-- Hero Section with Background Video -->
<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="hero-content" style="visibility: visible; opacity: 1;">
      <h1 style="visibility: visible;">Creating Digital Experiences <br>That Inspire</h1>
      <p class="lead" style="visibility: visible;">We build beautiful worlds and incredible stories. Bringing exciting new content to the people.</p>
      <div class="hero-buttons">
        <a href="#services" class="btn btn-primary">Our Services</a>
        <a href="#work" class="btn btn-secondary">View Our Work</a>
      </div>
    </div>
  </div>
</section>
    
    <!-- Features Section -->
    <section id="services" class="features">
      <div class="container">
        <h2 class="section-title text-center">What We Do</h2>
        <p class="section-subtitle text-center">We offer comprehensive digital solutions to meet your business needs</p>
        
        <div class="row">
          <div class="column-4 column-tablet-6 column-mobile-4">
            <div class="feature-card">
              <div class="feature-icon">ðŸŽ¨</div>
              <h3>Design</h3>
              <p>Beautiful, user-centered design that communicates your brand effectively.</p>
            </div>
          </div>
          
          <div class="column-4 column-tablet-6 column-mobile-4">
            <div class="feature-card">
              <div class="feature-icon">ðŸ’»</div>
              <h3>Development</h3>
              <p>Clean, efficient code that brings your designs to life with flawless functionality.</p>
            </div>
          </div>
          
          <div class="column-4 column-tablet-6 column-mobile-4">
            <div class="feature-card">
              <div class="feature-icon">ðŸ“ˆ</div>
              <h3>Strategy</h3>
              <p>Data-driven strategies to increase your online presence and drive growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Work Section -->
    <section id="work" class="work">
      <div class="container">
        <h2 class="section-title text-center">Featured Projects</h2>
        <p class="section-subtitle text-center">Some of our recent work</p>
        
        <div class="row">
          <div class="column-6 column-tablet-8 column-mobile-4">
            <div class="project-card">
              <div class="project-image">
                <!-- Placeholder for project image -->
                <div class="placeholder-image" style="background-color: #eee; height: 300px;"></div>
              </div>
              <div class="project-info">
                <h3>Project Title</h3>
                <p>Brief description of the project and what was accomplished.</p>
                <router-link to="/work/project-1" class="btn btn-outline">View Project</router-link>
              </div>
            </div>
          </div>
          
          <div class="column-6 column-tablet-8 column-mobile-4">
            <div class="project-card">
              <div class="project-image">
                <!-- Placeholder for project image -->
                <div class="placeholder-image" style="background-color: #eee; height: 300px;"></div>
              </div>
              <div class="project-info">
                <h3>Project Title</h3>
                <p>Brief description of the project and what was accomplished.</p>
                <router-link to="/work/project-2" class="btn btn-outline">View Project</router-link>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <router-link to="/work" class="btn btn-primary">View All Work</router-link>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to start your project?</h2>
          <p>We'd love to hear about your business and how we can help you succeed.</p>
          <button class="btn btn-light">Get in Touch</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Video Background */
.video-background {
  position: relative;
  width: 100%;
  height: 100vh;
}

.video-background .video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
}

.video-background .video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Hero section */
.hero {
  padding: calc(var(--header-height) + var(--spacing-4xl)) 0 var(--spacing-4xl);
  background-color: var(--background-alt);
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-5xl);
}

.hero .lead {
  margin-bottom: var(--spacing-xl);
  color: var(--secondary-color);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}

/* Features section */
.features {
  padding: var(--spacing-4xl) 0;
}

.section-title {
  margin-bottom: var(--spacing-md);
}

.section-subtitle {
  max-width: 600px;
  margin: 0 auto var(--spacing-2xl);
  color: var(--secondary-color);
}

.feature-card {
  background-color: var(--background-light);
  border-radius: 8px;
  padding: var(--spacing-xl);
  height: 100%;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.feature-card h3 {
  margin-bottom: var(--spacing-sm);
}

/* Work section */
.work {
  padding: var(--spacing-4xl) 0;
  background-color: var(--background-alt);
}

.project-card {
  margin-bottom: var(--spacing-xl);
  background-color: var(--background-light);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.project-info {
  padding: var(--spacing-lg);
}

.project-info h3 {
  margin-bottom: var(--spacing-sm);
}

.project-info p {
  margin-bottom: var(--spacing-lg);
}

/* Call to action */
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

/* Buttons */
.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-primary {
  background-color: var(--accent-color);
  color: var(--light-text);
  border: none;
}

.btn-primary:hover {
  background-color: var(--primary-color);
  color: var(--light-text);
}

.btn-secondary {
  background-color: transparent;
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
}

.btn-secondary:hover {
  background-color: var(--accent-color);
  color: var(--light-text);
}

.btn-light {
  background-color: var(--light-text);
  color: var(--accent-color);
  border: none;
}

.btn-light:hover {
  background-color: rgba(255,255,255,0.9);
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

.btn-outline:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: var(--font-size-4xl);
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .feature-card {
    margin-bottom: var(--spacing-lg);
  }
}
</style>



