<template>
  <div class="about-page">
    <!-- Full-screen hero section with "We Dream Big..." text -->
    <div class="orange-hero-wrapper">
      <section class="dream-big-hero">
        <div class="container dream-big-container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <h1 class="dream-big-text">WE DREAM BIG...</h1>
            <p>Turning Epic Visions into Reality</p>
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
              <h2 class="section-title">We Build the Whole Thing</h2>
              <p class="lead-text">Tradecraft started in visual effects — feature films, streaming series, commercial work for Universal, Marvel, Netflix, and Warner Bros. We built an AI-enhanced production pipeline to stay competitive, and then realised that same pipeline could do something we actually wanted to do: make music and music videos for independent artists at a fraction of what it used to cost.</p>
            </ScrollReveal>

            <ScrollReveal :delay="0.2">
              <h3 class="subsection-title">Where We Come From</h3>
              <p class="lead-text">Our VFX credits run from Creed 3 to The Continental to Hidden Figures. We know what a real production pipeline looks like — and we know what it costs. That experience is what made us build a better one. Kling AI and ComfyUI for generative visuals, Unreal Engine 5 for environments, Blender and DaVinci Resolve for production finishing, Ableton Live and Suno AI for music — alongside a full suite of industry-standard VFX and post-production tools. The same level of craft, compressed into a workflow that moves at the speed of ideas.</p>

              <h3 class="subsection-title">What We're Building Now</h3>
              <p class="lead-text">We're in production on our first artist roster — Epoch Monk, ENIGMA, Diamonds, and Gen — and we're releasing original music under the Tradecraft Radio label. Every release is a proof of concept: what happens when a VFX studio applies its full pipeline to music video production. We're also making that pipeline available to independent artists and AI music producers who need cinematic visuals without a Hollywood budget.</p>

              <h3 class="subsection-title">The Bigger Picture</h3>
              <p class="lead-text">Every music video we produce points back here. Every track we release builds the brand. We're using our own work to demonstrate the pipeline — and using the pipeline to build something that compounds over time. Music, visuals, distribution, and audience growth, all under one roof.</p>
            </ScrollReveal>
          </div>
        </div>
        
        <div class="expertise-section">
          <ScrollReveal>
            <h2 class="section-title">OUR EXPERTISE</h2>
          </ScrollReveal>
          
          <div class="expertise-grid">
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
            
            <ScrollReveal direction="up" :delay="0.3">
              <div class="expertise-card">
                <h3 class="expertise-title">MUSIC VIDEO PRODUCTION</h3>
                <p>Cinematic music videos for independent artists and AI music producers — delivered in 7–10 days using Kling AI, Unreal Engine 5, and DaVinci Resolve.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" :delay="0.4">
              <div class="expertise-card">
                <h3 class="expertise-title">AI-ENHANCED CONTENT PIPELINE</h3>
                <p>A fully integrated production pipeline combining generative AI tools with industry-standard VFX software — built for speed without sacrificing quality.</p>
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
  margin: 0 0 0.5rem 0;
  position: relative;
  text-align: left;
  line-height: 1;
}

.dream-big-hero p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0;
  font-style: italic;
  font-weight: 300;
  opacity: 0.9;
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
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  margin-top: var(--spacing-xl);
}

/* Bottom border can still be used if needed */
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

