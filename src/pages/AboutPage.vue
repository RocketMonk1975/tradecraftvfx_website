<template>
  <div class="about-page">
    <!-- Full-screen hero section with "We Dream Big..." text -->
    <div class="orange-hero-wrapper">
      <section class="dream-big-hero">
        <div class="container dream-big-container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <h1 class="dream-big-text">WE DREAM BIG...</h1>
          </ScrollReveal>
        </div>
      </section>
    </div>
    
    <!-- About Content Section (below the orange hero) -->
    <section class="section about-content">
      <div class="container">
        <div class="row">
          <div class="column-10 column-tablet-12 offset-1 offset-tablet-0">
            <ScrollReveal>
              <h2 class="section-title">Tradecraft VFX: Redefining Visual Storytelling</h2>
              <p class="lead-text">Tradecraft VFX is a full-service creative content studio that seamlessly blends technical expertise with artistic vision to craft extraordinary visual experiences. Renowned for their ability to captivate audiences worldwide, they stand out in the industry through their innovative approach and relentless pursuit of excellence.</p>
            </ScrollReveal>
            
            <ScrollReveal :delay="0.2">
              <h3 class="subsection-title">A Team of Visionaries</h3>
              <p>At the heart of Tradecraft VFX is a team of exceptionally talented artists and technicians. Their collaborative spirit and human ingenuity allow them to transform bold ideas into stunning realities. By working closely together, they ensure that every project reflects uncompromising quality, pushing the boundaries of what's possible in visual storytelling.</p>
              
              <h3 class="subsection-title">Harnessing Cutting-Edge Technology</h3>
              <p>Tradecraft VFX leverages the latest advancements in technology to elevate their creative process. Staying ahead of the curve, they integrate cutting-edge tools into their workflow, enabling them to deliver groundbreaking visuals that redefine industry standards. This fusion of technology and creativity empowers them to bring even the most ambitious visions to life.</p>
              
              <h3 class="subsection-title">Passion and Dedication in Every Project</h3>
              <p>Whether it's a blockbuster feature film, a captivating commercial, or an immersive experience, Tradecraft VFX approaches each project with the same level of passion and dedication. Their meticulous attention to detail and commitment to excellence ensure that every frame they produce is a masterpiece, tailored to inspire and engage.</p>
            </ScrollReveal>
          </div>
        </div>
        
        <div class="expertise-section">
          <ScrollReveal>
            <h2 class="section-title">OUR EXPERTISE</h2>
          </ScrollReveal>
          
          <div class="expertise-grid">
            <!-- Top Row -->
            <ScrollReveal direction="up" :delay="0.1">
              <div class="expertise-card">
                <h3 class="expertise-title">3D ANIMATION & MODELING</h3>
                <p>Creating lifelike environments and characters with precision and artistry.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" :delay="0.2">
              <div class="expertise-card">
                <h3 class="expertise-title">VISUAL EFFECTS & COMPOSITING</h3>
                <p>Seamlessly integrating visual elements to create stunning realities.</p>
              </div>
            </ScrollReveal>
          </div>
          
          <!-- Bottom Row - Single Card -->
          <div class="expertise-bottom-row">
            <ScrollReveal direction="up" :delay="0.3">
              <div class="expertise-card">
                <h3 class="expertise-title">MOTION GRAPHICS</h3>
                <p>Bringing static designs to life with movement and dimension.</p>
              </div>
            </ScrollReveal>
          </div>
          <!-- Removed orange bottom border -->
        </div>
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
/* Ensure the entire page has the same black background to prevent flashes during load */
.about-page {
  background-color: #000;
}

/* Orange hero wrapper - this will contain the orange background */
.orange-hero-wrapper {
  background-color: var(--color-primary);
  height: 80vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

/* Dream big hero section with the text */
.dream-big-hero {
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0;
  width: 100%;
}

/* Make the about page relative to properly position content above the orange */
.about-page {
  position: relative;
  z-index: 2;
}

/* Make all sections positioned relative to page and properly layered */
.about-page section {
  position: relative;
  z-index: 10;
}

.dream-big-container {
  display: flex;
  align-items: center;
  height: 100vh;
  padding-top: var(--header-height);
  padding-left: 10%; /* Add left padding to match reference image positioning */
  box-sizing: border-box;
  justify-content: flex-start; /* Aligns content to the left */
  max-width: 100%; /* Override container's default max-width */
  width: 100%;
}

.dream-big-text {
  font-size: 104px;
  font-family: 'Lato', sans-serif;
  font-weight: 900; /* Black weight */
  font-style: italic;
  letter-spacing: -0.02em;
  margin: 0;
  position: relative;
  text-align: left;
  line-height: 1;
}

/* About content section (below the hero) */
.about-content {
  background-color: #000;
  color: white;
  padding: var(--spacing-3xl) 0;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-xl);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--color-primary);
}

.lead-text {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: var(--spacing-xl);
}

.section-subtitle {
  font-size: 1.75rem;
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.subsection-title {
  font-size: 1.4rem;
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
  position: relative;
}

/* Expertise Section Styling */
.expertise-section {
  margin-top: var(--spacing-3xl);
  margin-bottom: 60px; /* Add bottom margin to create space before footer */
  padding-top: var(--spacing-2xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: var(--spacing-xl);
}

.expertise-bottom-row {
  width: calc(50% - 10px);
  margin-top: 20px;
}

.expertise-bottom-border {
  width: 100%;
  height: 20px;
  background-color: var(--color-primary);
  margin-top: 40px;
}

.expertise-card {
  background-color: #111;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-primary);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
  background-color: #1a1a1a;
}

.expertise-title {
  color: var(--color-primary);
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
  font-weight: 700;
  letter-spacing: 0.5px;
}

.expertise-card p {
  margin: 0;
  font-weight: 300;
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .expertise-grid > div:nth-child(3) {
    grid-column: auto;
  }
}

/* Media queries for responsive design */
@media (max-width: 1200px) {
  .dream-big-text {
    font-size: 80px;
  }
}

@media (max-width: 768px) {
  .dream-big-text {
    font-size: 60px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .lead-text {
    font-size: 1.25rem;
  }
  
  .dream-big-container {
    padding-left: 20px; /* Add some padding on smaller screens */
  }
}

@media (max-width: 480px) {
  .dream-big-text {
    font-size: 42px;
  }
}
</style>

