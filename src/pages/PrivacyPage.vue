<template>
  <div class="page privacypage">
    <!-- Orange hero section with animated title -->
    <div class="orange-hero-wrapper">
      <section class="dream-big-hero">
        <div class="container dream-big-container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <h1 class="dream-big-text">PRIVACY POLICY</h1>
            <p>We Value and Protect Your Data</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
    
    <section class="section privacy-content">
      <div class="container">
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.1" :threshold="0.2">
          <h2>Introduction</h2>
          <p class="lead-text">At TradeCraft VFX, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you visit our website or engage our services.</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.2" :threshold="0.2">
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Contact information (name, email, phone number, company)</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data (how you interact with our website)</li>
            <li>Marketing preferences</li>
          </ul>
        </ScrollReveal>
        
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.3" :threshold="0.2">
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and manage our services</li>
            <li>Communicate with you about projects and services</li>
            <li>Improve our website and services</li>
            <li>Send relevant marketing communications (with your consent)</li>
          </ul>
        </ScrollReveal>
        
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.4" :threshold="0.2">
          <h2>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.5" :threshold="0.2">
          <h2>Third-Party Services</h2>
          <p>We may use third-party services such as analytics, payment processors, and marketing tools. These services may collect information sent by your browser as part of their functionality. They have their own privacy policies regarding the handling of your information.</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.6" :threshold="0.2">
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have rights regarding your personal data, including:</p>
          <ul>
            <li>Access to your personal data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
          </ul>
        </ScrollReveal>
        
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.7" :threshold="0.2">
          <h2>Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.8" :threshold="0.2">
          <h2>Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us via our contact page.</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.9" :threshold="0.2">
          <p class="policy-date">Last Updated: April 18, 2025</p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="1.0" :threshold="0.2">
          <p>If you have questions about this privacy policy, please contact us at <a href="mailto:privacy@tradecraftvfx.com">privacy@tradecraftvfx.com</a>.</p>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollReveal from '@/components/ScrollReveal.vue';

export default {
  name: 'PrivacyPage',
  components: {
    ScrollReveal
  }
}
</script>

<style scoped>
/* Ensure the entire page has the same black background to prevent flashes during load */
.privacypage {
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
.privacypage section {
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
  text-transform: uppercase;
}

.dream-big-hero p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0;
  font-style: italic;
  font-weight: 300;
  opacity: 0.9;
}

/* Privacy content section (below the hero) */
.privacy-content {
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
