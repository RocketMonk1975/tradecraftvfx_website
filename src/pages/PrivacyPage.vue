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
    
    <section class="section">
      <div class="container">
        <h2>Introduction</h2>
        <p class="lead-text">At TradeCraft VFX, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you visit our website or engage our services.</p>
        
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Contact information (name, email, phone number, company)</li>
          <li>Technical data (IP address, browser type, device information)</li>
          <li>Usage data (how you interact with our website)</li>
          <li>Marketing preferences</li>
        </ul>
        
        <h2>How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and manage our services</li>
          <li>Communicate with you about projects and services</li>
          <li>Improve our website and services</li>
          <li>Send relevant marketing communications (with your consent)</li>
        </ul>
        
        <h2>Data Security</h2>
        <p>We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h2>Third-Party Services</h2>
        <p>We may use third-party services such as analytics, payment processors, and marketing tools. These services may collect information sent by your browser as part of their functionality. They have their own privacy policies regarding the handling of your information.</p>
        
        <h2>Your Rights</h2>
        <p>Depending on your location, you may have rights regarding your personal data, including:</p>
        <ul>
          <li>Access to your personal data</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of your data</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
        </ul>
        
        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        
        <h2>Contact Us</h2>
        <p>If you have questions about this privacy policy, please contact us at <a href="mailto:privacy@tradecraftvfx.com">privacy@tradecraftvfx.com</a>.</p>
        
        <p class="policy-date">Last Updated: April 18, 2025</p>
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
.section {
  padding: 4rem 0;
}

/* Orange hero styles */
.orange-hero-wrapper {
  background-color: #ff8243;
  width: 100%;
  color: white;
}

.dream-big-hero {
  height: 100vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  padding-top: calc(var(--header-height) + 2rem);
  padding-bottom: 4rem;
}

.dream-big-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dream-big-text {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  line-height: 1.1;
}

.dream-big-container p {
  font-size: 2rem;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .dream-big-text {
    font-size: 2.5rem;
  }
  
  .dream-big-container p {
    font-size: 1.5rem;
  }
}

/* Content section styling */
.section h2 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #333;
}

.policy-date {
  margin-top: 3rem;
  font-style: italic;
  color: #666;
}
</style>
