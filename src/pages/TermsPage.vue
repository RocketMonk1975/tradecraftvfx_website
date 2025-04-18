<template>
  <div class="page termspage">
    <!-- Orange hero section with animated title -->
    <div class="orange-hero-wrapper">
      <section class="dream-big-hero">
        <div class="container dream-big-container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <h1 class="dream-big-text">TERMS OF SERVICE</h1>
            <p>Our Commitment to Professional Excellence</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
    
    <section class="section terms-content">
      <div class="container">
        <h2>Agreement to Terms</h2>
        <p class="lead-text">Welcome to TradeCraft VFX. By accessing our website or using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>
        
        <h2>Services</h2>
        <p>TradeCraft VFX provides visual effects, animation, and digital content creation services for film, television, and commercial projects. Our services include but are not limited to:</p>
        <ul>
          <li>3D modeling and animation</li>
          <li>Compositing and visual effects</li>
          <li>Motion graphics</li>
          <li>Color grading</li>
          <li>Concept design and previsualization</li>
        </ul>
        
        <h2>Project Agreements</h2>
        <p>All client projects require a separate project agreement outlining specific deliverables, timelines, and payment terms. These project agreements will incorporate these Terms of Service by reference.</p>
        
        <h2>Intellectual Property</h2>
        <p>Unless otherwise specified in a project agreement:</p>
        <ul>
          <li>TradeCraft VFX retains ownership of all working files and source materials created during production.</li>
          <li>Upon full payment, clients receive a license to use the final deliverables as specified in the project agreement.</li>
          <li>TradeCraft VFX reserves the right to showcase work in our portfolio and promotional materials unless a non-disclosure agreement is in place.</li>
        </ul>
        
        <h2>Payment Terms</h2>
        <p>Standard payment terms include:</p>
        <ul>
          <li>50% deposit to commence work</li>
          <li>Remaining balance due upon project completion</li>
          <li>Late payments may incur additional fees</li>
        </ul>
        <p>Specific payment arrangements will be outlined in each project agreement.</p>
        
        <h2>Revisions and Changes</h2>
        <p>Initial project quotes include a specified number of revision rounds. Additional revisions or scope changes may incur additional charges at our standard rates.</p>
        
        <h2>Cancellation</h2>
        <p>If a project is canceled by the client, payment is required for all work completed up to the cancellation date. Deposits are non-refundable.</p>
        
        <h2>Limitation of Liability</h2>
        <p>TradeCraft VFX is not liable for any indirect, consequential, or incidental damages arising from the use of our services or deliverables.</p>
        
        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Updated terms will be posted on this page.</p>
        
        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of the state of California, without regard to its conflict of law principles.</p>
        
        <h2>Contact Us</h2>
        <p>If you have questions about these terms, please contact us at <a href="mailto:legal@tradecraftvfx.com">legal@tradecraftvfx.com</a>.</p>
        
        <p class="policy-date">Last Updated: April 18, 2025</p>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollReveal from '@/components/ScrollReveal.vue';

export default {
  name: 'TermsPage',
  components: {
    ScrollReveal
  }
}
</script>

<style scoped>
/* Ensure the entire page has the same black background to prevent flashes during load */
.termspage {
  background-color: #000;
  position: relative;
  z-index: 2;
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

/* Make all sections positioned relative to page and properly layered */
.termspage section {
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

/* Terms content section (below the hero) */
.terms-content {
  background-color: #000;
  color: white;
  padding: var(--spacing-3xl) 0;
}

/* Content section styling */
.section h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-xl);
  position: relative;
  display: inline-block;
  color: white;
}

.section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--color-primary);
}

.section p, .section ul, .section li {
  color: white;
}

.lead-text {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: var(--spacing-xl);
}

.section ul {
  margin-bottom: var(--spacing-xl);
  padding-left: 2rem;
}

.section li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.policy-date {
  margin-top: 3rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .dream-big-text {
    font-size: 64px;
  }
  
  .dream-big-hero p {
    font-size: 1rem;
  }
  
  .section h2 {
    font-size: 2rem;
  }
  
  .lead-text {
    font-size: 1.2rem;
  }
}
</style>
