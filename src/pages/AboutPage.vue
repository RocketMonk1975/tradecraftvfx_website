<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <ScrollReveal>
          <h1>About Us</h1>
        </ScrollReveal>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="column-6 column-tablet-12">
            <ScrollReveal direction="left" :delay="0.2">
              <h2>Our Story</h2>
              <p>TradeCraft VFX was founded with a passion for creating extraordinary visual experiences. Our team combines technical expertise with artistic vision.</p>
              <p>With years of experience in the industry, we've worked on a variety of projects from feature films to commercials and video games.</p>
            </ScrollReveal>
            
            <ScrollReveal direction="left" :delay="0.4">
              <div class="team-section">
                <h3>Our Expertise</h3>
                <ul class="expertise-list">
                  <li>3D Animation & Modeling</li>
                  <li>Visual Effects & Compositing</li>
                  <li>Motion Graphics</li>
                  <li>Character Animation</li>
                  <li>Virtual Reality Experiences</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <div class="column-6 column-tablet-12">
            <ScrollReveal direction="right" :delay="0.3">
              <div class="about-image">
                <img :src="getImagePath('placeholder.jpg')" alt="About TradeCraft VFX">
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" :delay="0.5">
              <div class="mission-section">
                <h3>Our Mission</h3>
                <p>We strive to push the boundaries of visual storytelling, creating immersive experiences that captivate and inspire audiences worldwide.</p>
                <p>By combining cutting-edge technology with artistic excellence, we bring visions to life with uncompromising quality.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        <ScrollReveal :stagger="0.1">
          <div class="values-section">
            <h2 class="text-center">Our Values</h2>
            <div class="row values-grid">
              <div class="column-3 column-tablet-6 column-mobile-12">
                <div class="value-card">
                  <h4>Innovation</h4>
                  <p>Pushing boundaries and exploring new technologies</p>
                </div>
              </div>
              <div class="column-3 column-tablet-6 column-mobile-12">
                <div class="value-card">
                  <h4>Quality</h4>
                  <p>Uncompromising attention to detail in every project</p>
                </div>
              </div>
              <div class="column-3 column-tablet-6 column-mobile-12">
                <div class="value-card">
                  <h4>Collaboration</h4>
                  <p>Working together to bring great ideas to life</p>
                </div>
              </div>
              <div class="column-3 column-tablet-6 column-mobile-12">
                <div class="value-card">
                  <h4>Creativity</h4>
                  <p>Finding artistic solutions to technical challenges</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollReveal from '../components/ScrollReveal.vue';

export default {
  name: 'AboutPage',
  components: {
    ScrollReveal
  },
  methods: {
    getImagePath(imageName) {
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

.page-header h1 {
  margin-bottom: 0;
}

.about-image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  margin-bottom: var(--spacing-lg);
}

.team-section, .mission-section {
  margin-top: var(--spacing-xl);
}

.expertise-list {
  list-style: none;
  padding: 0;
  margin-top: var(--spacing-md);
}

.expertise-list li {
  padding: var(--spacing-xs) 0;
  position: relative;
  padding-left: var(--spacing-lg);
}

.expertise-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
  font-size: 1.5rem;
}

.values-section {
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid #eee;
}

.values-grid {
  margin-top: var(--spacing-xl);
}

.value-card {
  background-color: var(--color-light-bg);
  padding: var(--spacing-lg);
  border-radius: 8px;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.value-card h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.text-center {
  text-align: center;
}
</style>

