<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1><TextReveal text="Creating Digital Experiences That Inspire" /></h1>
          <p class="lead">We build beautiful worlds and incredible stories.</p>
          <div class="hero-buttons">
            <a href="#services" class="btn btn-primary">Our Services</a>
            <a href="#work" class="btn btn-secondary">View Our Work</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Section -->
    <section id="services" class="section features">
      <div class="container">
        <h2 class="section-title text-center">Our Services</h2>
        <p class="section-subtitle text-center">We combine creative design with technical expertise</p>
        
        <div class="row stagger-items">
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
              <div class="feature-icon">✨</div>
              <h3>Visual Effects</h3>
              <p>Stunning visual effects that enhance storytelling and engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Recent Work Section -->
    <section id="work" class="section work">
      <div class="container">
        <h2 class="section-title text-center">Recent Work</h2>
        <p class="section-subtitle text-center">Check out our latest projects</p>
        
        <div class="row">
          <div class="column-6 column-tablet-12">
            <HoverImage src="/images/project1.jpg" alt="Project 1">
              <h3>Project Alpha</h3>
              <p>Visual effects for feature film</p>
            </HoverImage>
          </div>
          <div class="column-6 column-tablet-12">
            <HoverImage src="/images/project2.jpg" alt="Project 2">
              <h3>Project Beta</h3>
              <p>Character animation for game</p>
            </HoverImage>
          </div>
        </div>
      </div>
    </section>
    
    <!-- News Section -->
    <section class="section news">
      <div class="container">
        <h2 class="section-title text-center">Latest News</h2>
        <p class="section-subtitle text-center">Stay updated with our latest developments</p>
        
        <div class="row">
          <div v-for="(item, index) in news" :key="index" class="column-4 column-tablet-6 column-mobile-12">
            <div class="news-card">
              <div class="news-image">
                <img :src="item.image" :alt="item.title">
              </div>
              <div class="news-content">
                <span class="news-date">{{ item.date }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.excerpt }}</p>
                <a href="#" class="read-more">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to start your project?</h2>
          <p>Contact us today to discuss your ideas and requirements</p>
          <router-link to="/contact" class="btn btn-light">Get in Touch</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TextReveal from '../components/TextReveal.vue';
import HoverImage from '../components/HoverImage.vue';

export default {
  name: 'HomePage',
  components: {
    TextReveal,
    HoverImage
  },
  data() {
    return {
      news: [
        {
          title: 'New Studio Opening',
          excerpt: 'We are excited to announce the opening of our new studio in Los Angeles.',
          image: require('@/assets/images/news1.jpg'),
          date: 'Mar 15, 2025'
        },
        {
          title: 'Award Winning Project',
          excerpt: 'Our team has won a prestigious award for visual effects in Project Delta.',
          image: require('@/assets/images/news2.jpg'),
          date: 'Feb 20, 2025'
        },
        {
          title: 'Technology Partnership',
          excerpt: 'Announcing our new partnership with leading software provider.',
          image: require('@/assets/images/news3.jpg'),
          date: 'Jan 10, 2025'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Hero section */
.hero {
  padding: calc(var(--header-height, 80px) + var(--spacing-xl, 40px)) 0 var(--spacing-4xl, 80px);
  background-color: var(--background-alt, #f8f9fa);
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  margin-bottom: var(--spacing-lg, 20px);
  font-size: var(--font-size-5xl, 4rem);
}

.hero .lead {
  margin-bottom: var(--spacing-xl, 30px);
  color: var(--secondary-color, #6c757d);
  font-size: var(--font-size-xl, 1.25rem);
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md, 15px);
  justify-content: center;
}

/* Features section */
.features {
  padding: var(--spacing-4xl, 80px) 0;
}

.section-title {
  margin-bottom: var(--spacing-md, 15px);
  font-size: var(--font-size-3xl, 2.5rem);
}

.section-subtitle {
  max-width: 600px;
  margin: 0 auto var(--spacing-2xl, 50px);
  color: var(--secondary-color, #6c757d);
  font-size: var(--font-size-lg, 1.125rem);
}

.feature-card {
  background-color: var(--background-light, #ffffff);
  border-radius: 8px;
  padding: var(--spacing-xl, 30px);
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
  margin-bottom: var(--spacing-md, 15px);
}

.feature-card h3 {
  margin-bottom: var(--spacing-sm, 10px);
  font-size: var(--font-size-xl, 1.25rem);
}

/* Work section */
.work {
  padding: var(--spacing-4xl, 80px) 0;
  background-color: var(--background-alt, #f8f9fa);
}

/* News section */
.news {
  padding: var(--spacing-4xl, 80px) 0;
}

.news-card {
  background-color: var(--background-light, #ffffff);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.news-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: var(--spacing-lg, 20px);
}

.news-date {
  display: block;
  color: var(--secondary-color, #6c757d);
  margin-bottom: var(--spacing-xs, 5px);
  font-size: 0.875rem;
}

.news-content h3 {
  margin-bottom: var(--spacing-sm, 10px);
  font-size: var(--font-size-lg, 1.125rem);
}

.read-more {
  display: inline-block;
  margin-top: var(--spacing-sm, 10px);
  color: var(--accent-color, #0052cc);
  font-weight: 500;
  text-decoration: none;
}

/* CTA section */
.cta {
  padding: var(--spacing-3xl, 60px) 0;
  background-color: var(--accent-color, #0052cc);
  color: var(--light-text, #ffffff);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.cta h2 {
  color: var(--light-text, #ffffff);
  margin-bottom: var(--spacing-md, 15px);
}

.cta p {
  margin-bottom: var(--spacing-lg, 20px);
  opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero h1 {
    font-size: var(--font-size-4xl, 3rem);
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .feature-card, .news-card {
    margin-bottom: var(--spacing-lg, 20px);
  }
}
</style>
