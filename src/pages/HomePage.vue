<template>
  <div class="home-page">
    <!-- Hero Section with Fullscreen Video Background (Droga5-style) -->
    <section class="hero full-height">
      <div class="hero-background">
        <div class="video-container">
          <!-- Replace with your actual video path -->
          <video autoplay muted loop playsinline poster="@/assets/images/hero-poster.jpg">
            <source src="@/assets/videos/hero-video.mp4" type="video/mp4">
          </video>
        </div>
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Creating Digital<br>Experiences That<br>Inspire</h1>
          <p class="hero-subtitle">Visual effects studio creating extraordinary worlds</p>
          <div class="hero-buttons">
            <a href="#featured-work" class="btn btn-primary">View Our Work</a>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <span>Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>

    <!-- Featured Projects (Droga5-style grid) -->
    <section id="featured-work" class="featured-work">
      <div class="container">
        <h2 class="section-title">Featured Work</h2>
        
        <div class="project-grid">
          <!-- Project 1 - Large -->
          <div class="project-item large">
            <router-link to="/work/project1">
              <div class="project-image-container">
                <img src="@/assets/images/project1.jpg" alt="Project 1" class="project-image">
                <div class="project-overlay">
                  <div class="project-info">
                    <h3 class="project-title">Project Title</h3>
                    <p class="project-category">VFX / Animation</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          
          <!-- Project 2 - Medium -->
          <div class="project-item medium">
            <router-link to="/work/project2">
              <div class="project-image-container">
                <img src="@/assets/images/project2.jpg" alt="Project 2" class="project-image">
                <div class="project-overlay">
                  <div class="project-info">
                    <h3 class="project-title">Project Title</h3>
                    <p class="project-category">3D Modeling</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          
          <!-- Project 3 - Medium -->
          <div class="project-item medium">
            <router-link to="/work/project3">
              <div class="project-image-container">
                <img src="@/assets/images/project3.jpg" alt="Project 3" class="project-image">
                <div class="project-overlay">
                  <div class="project-info">
                    <h3 class="project-title">Project Title</h3>
                    <p class="project-category">Concept Art</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          
          <!-- Project 4 - Small -->
          <div class="project-item small">
            <router-link to="/work/project4">
              <div class="project-image-container">
                <img src="@/assets/images/project4.jpg" alt="Project 4" class="project-image">
                <div class="project-overlay">
                  <div class="project-info">
                    <h3 class="project-title">Project Title</h3>
                    <p class="project-category">Visual Effects</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          
          <!-- Project 5 - Small -->
          <div class="project-item small">
            <router-link to="/work/project5">
              <div class="project-image-container">
                <img src="@/assets/images/project5.jpg" alt="Project 5" class="project-image">
                <div class="project-overlay">
                  <div class="project-info">
                    <h3 class="project-title">Project Title</h3>
                    <p class="project-category">Animation</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        
        <div class="view-all-container">
          <router-link to="/work" class="btn btn-outline btn-lg">View All Work</router-link>
        </div>
      </div>
    </section>
    
    <!-- Services Section with Parallax -->
    <section class="services parallax-section">
      <div class="parallax-bg" style="background-image: url('@/assets/images/services-bg.jpg');"></div>
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        
        <div class="service-list">
          <div class="service-item" v-for="(service, index) in services" :key="index">
            <div class="service-number">{{ index + 1 }}</div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <router-link to="/services" class="btn btn-white">Learn More</router-link>
        </div>
      </div>
    </section>
    
    <!-- About Preview Section -->
    <section class="about-preview">
      <div class="container">
        <div class="row reveal-stagger-children" v-scroll-reveal>
          <div class="column-4 column-tablet-6 column-mobile-12">
            <div class="feature-card">
              <div class="feature-icon">🎨</div>
              <h3>Concept Design</h3>
              <p>Creative concept art and visualization to bring your ideas into reality.</p>
            </div>
          </div>
          
          <div class="column-4 column-tablet-6 column-mobile-12">
            <div class="feature-card">
              <div class="feature-icon">🎬</div>
              <h3>3D Animation</h3>
              <p>Advanced 3D modeling and animation that delivers visual impact.</p>
            </div>
          </div>
          
          <div class="column-4 column-tablet-6 column-mobile-12">
            <div class="feature-card">
              <div class="feature-icon">🎭</div>
              <h3>Visual Storytelling</h3>
              <p>Cohesive visual storytelling that engages your audience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Latest News -->
    <section class="news-section">
      <div class="container">
        <h2 class="section-title">Latest News</h2>
        
        <div class="row reveal-stagger-children" v-scroll-reveal>
          <div class="column-4 column-tablet-6 column-mobile-12">
            <div class="feature-card">
              <div class="feature-icon">🎨</div>
              <h3>Concept Design</h3>
              <p>Creative concept art and visualization to bring your ideas into reality.</p>
            </div>
          </div>
          
          <div class="column-4 column-tablet-6 column-mobile-12">
            <div class="feature-card">
              <div class="feature-icon">🎬</div>
              <h3>3D Animation</h3>
              <p>Advanced 3D modeling and animation that delivers visual impact.</p>
            </div>
          </div>
          
          <div class="column-4 column-tablet-6 column-mobile-12">
            <div class="feature-card">
              <div class="feature-icon">🎭</div>
              <h3>Visual Storytelling</h3>
              <p>Cohesive visual storytelling that engages your audience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="container">
        <div class="row align-center">
          <div class="column-8 column-tablet-10 column-mobile-12">
            <h2 class="cta-title">Ready to bring your vision to life?</h2>
            <p class="cta-text">Let's create something extraordinary together.</p>
          </div>
          <div class="column-4 column-tablet-12 column-mobile-12">
            <div class="cta-button-container">
              <router-link to="/contact" class="btn btn-primary btn-lg">Get in Touch</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      services: [
        { 
          title: '3D Animation', 
          description: 'High-quality 3D animation for film, television, and digital media.' 
        },
        { 
          title: 'Visual Effects', 
          description: 'Stunning visual effects that seamlessly integrate with live action footage.' 
        },
        { 
          title: 'Concept Art', 
          description: 'Creative concept art and visualization to bring your ideas into reality.' 
        },
        { 
          title: 'Motion Graphics', 
          description: 'Dynamic motion graphics design for videos and interactive media.' 
        }
      ],
      latestNews: [
        {
          id: '1',
          title: 'TradeVFX Joins Major Film Production',
          excerpt: 'Our team has been selected to create visual effects for an upcoming major film production.',
          image: '@/assets/images/news1.jpg',
          date: 'Mar 5, 2025'
        },
        {
          id: '2',
          title: 'New Studio Equipment Enhances Capabilities',
          excerpt: 'We've upgraded our studio with state-of-the-art equipment to enhance our VFX capabilities.',
          image: '@/assets/images/news2.jpg',
          date: 'Feb 20, 2025'
        },
        {
          id: '3',
          title: 'Award-Winning Designer Joins Our Team',
          excerpt: 'We're excited to welcome award-winning VFX designer John Smith to our creative team.',
          image: '@/assets/images/news3.jpg',
          date: 'Jan 15, 2025'
        }
      ]
    }
  },
  mounted() {
    this.initScrollAnimation();
  },
  methods: {
    initScrollAnimation() {
      // Simple scroll animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.project-item, .service-item, .news-item').forEach(item => {
        observer.observe(item);
      });
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero-title {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  opacity: 0.7;
  transition: opacity 0.3s;
  z-index: 1;
  cursor: pointer;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-indicator span {
  margin-bottom: 8px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Featured Work */
.featured-work {
  padding: var(--spacing-3xl) 0;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

.project-item {
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
}

.project-item.large {
  grid-column: span 4;
  grid-row: span 2;
}

.project-item.medium {
  grid-column: span 3;
  grid-row: span 1;
}

.project-item.small {
  grid-column: span 2;
  grid-row: span 1;
}

.project-image-container {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 75%; /* 4:3 aspect ratio */
}

.project-item.large .project-image-container {
  padding-bottom: 65%; /* Slightly different aspect ratio for large items */
}

.project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 30px;
}

.project-info {
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.project-title {
  margin-bottom: 5px;
}

.project-category {
  font-size: 0.9rem;
  opacity: 0.7;
}

.project-item:hover .project-image {
  transform: scale(1.05);
}

.project-item:hover .project-overlay {
  opacity: 1;
}

.project-item:hover .project-info {
  transform: translateY(0);
}

.view-all-container {
  margin-top: var(--spacing-xl);
  text-align: center;
}

/* Services Section */
.parallax-section {
  position: relative;
  padding: var(--spacing-3xl) 0;
  color: white;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-position: center;
  background-size: cover;
  z-index: -1;
  transform: translateZ(-1px) scale(2);
}

.parallax-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 21, 0.8);
  z-index: 0;
}

.parallax-section .container {
  position: relative;
  z-index: 1;
}

.service-list {
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.service-item {
  display: flex;
  margin-bottom: var(--spacing-lg);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.service-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-right: var(--spacing-md);
  line-height: 1;
  opacity: 0.5;
}

.service-content {
  flex: 1;
}

.service-content h3 {
  color: white;
  margin-bottom: var(--spacing-xs);
}

/* About Preview */
.about-preview {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-light-bg);
}

.about-text {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
}

.btn-text {
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.arrow {
  margin-left: 8px;
  transition: transform 0.2s;
}

.btn-text:hover .arrow {
  transform: translateX(5px);
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  height: 100%;
}

.grid-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* News Section */
.news-section {
  padding: var(--spacing-3xl) 0;
}

.news-item {
  margin-bottom: var(--spacing-xl);
  opacity: 0;
  transform: translateY(20px);
}

.news-image-container {
  position: relative;
  margin-bottom: var(--spacing-sm);
}

.news-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.news-date {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--color-primary);
  color: white;
  padding: 5px 15px;
  font-size: 0.9rem;
}

.news-title {
  font-size: 1.3rem;
  margin-bottom: var(--spacing-xs);
}

.news-excerpt {
  margin-bottom: var(--spacing-sm);
  font-size: 0.95rem;
}

.read-more {
  font-weight: 600;
}

/* Contact CTA */
.contact-cta {
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-primary);
  color: white;
}

.cta-title {
  color: white;
  margin-bottom: var(--spacing-xs);
}

.cta-text {
  font-size: 1.2rem;
  opacity: 0.9;
}

.cta-button-container {
  display: flex;
  justify-content: flex-end;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 4px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-accent);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #0046ad;
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
}

.btn-outline:hover {
  background-color: var(--color-accent);
  color: white;
  transform: translateY(-2px);
}

.btn-white {
  background-color: white;
  color: var(--color-primary);
}

.btn-white:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

.btn-lg {
  padding: 15px 40px;
  font-size: 1.1rem;
}

/* Animation utility */
.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.align-center {
  align-items: center;
}

/* Media Queries */
@media (max-width: 992px) {
  .hero-title {
    font-size: 4rem;
  }
  
  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .project-item.large,
  .project-item.medium,
  .project-item.small {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .cta-button-container {
    justify-content: flex-start;
    margin-top: var(--spacing-md);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .project-grid {
    grid-template-columns: 1fr;
  }
  
  .service-number {
    font-size: 2rem;
  }
}
</style>

