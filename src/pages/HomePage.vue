<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Creating Digital Experiences That Inspire</h1>
          <p class="lead">We build beautiful worlds and incredible stories.</p>
          <div class="hero-buttons">
            <a href="#services" class="btn btn-primary">Our Services</a>
            <a href="#work" class="btn btn-secondary">View Our Work</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Section -->
    <section id="services" class="section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="row">
          <div class="column-4">
            <div class="card">
              <h3>3D Animation</h3>
              <p>Advanced 3D modeling and animation.</p>
            </div>
          </div>
          <div class="column-4">
            <div class="card">
              <h3>Visual Effects</h3>
              <p>Stunning visual effects for film and TV.</p>
            </div>
          </div>
          <div class="column-4">
            <div class="card">
              <h3>Motion Graphics</h3>
              <p>Creative motion graphics design.</p>
            </div>
          </div>
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
