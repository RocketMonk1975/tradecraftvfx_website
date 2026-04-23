<template>
  <div class="page privacypage">
    <!-- Orange hero section with animated title -->
    <div class="orange-hero-wrapper">
      <section class="dream-big-hero">
        <div class="container dream-big-container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <h1 class="dream-big-text">PRIVACY POLICY</h1>
            <p>How we collect, use, and protect your information.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>

    <section class="section privacy-content">
      <div class="container">
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.1" :threshold="0.2">
          <h2>Introduction</h2>
          <p class="lead-text">Tradecraft VFX respects your privacy and is committed to protecting your personal data. This policy explains what information we collect, how we use it, and your rights regarding it — whether you're a client, a prospective client, or someone who signed up to hear new music from Tradecraft Radio.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.2" :threshold="0.2">
          <h2>Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>Contact information you provide directly — name, email address, phone number, company</li>
            <li>Email addresses submitted via the Tradecraft Radio signup form</li>
            <li>Project briefs, creative materials, and files shared with us as part of a client engagement</li>
            <li>Technical data — IP address, browser type, device information, and usage data collected automatically when you visit our website</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.3" :threshold="0.2">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to enquiries and manage client projects</li>
            <li>Send Tradecraft Radio updates and new music notifications to subscribers who have opted in</li>
            <li>Communicate about services, proposals, and project deliverables</li>
            <li>Improve our website and understand how visitors engage with our content</li>
            <li>Meet our legal and financial obligations</li>
          </ul>
          <p>We do not sell your data to third parties. We do not use your data for advertising purposes on external platforms without your explicit consent.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.4" :threshold="0.2">
          <h2>Tradecraft Radio Email List</h2>
          <p>If you sign up to receive Tradecraft Radio notifications, your email address is stored securely and used only to notify you of new music releases and Tradecraft news. You can unsubscribe at any time by clicking the unsubscribe link in any email we send, or by contacting us directly.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.5" :threshold="0.2">
          <h2>Third-Party Services</h2>
          <p>We use third-party tools including website analytics, email distribution, and payment processing. These services operate under their own privacy policies. We only share the minimum data necessary for each service to function. Current third-party services we use may include Google Analytics, Netlify, and payment processors specified in project agreements.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.6" :threshold="0.2">
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, disclosure, alteration, or loss. Client project files and creative materials are handled with confidentiality as standard.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.7" :threshold="0.2">
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for marketing communications at any time</li>
            <li>Data portability where applicable</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:info@tradecraftvfx.vn">info@tradecraftvfx.vn</a>.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.8" :threshold="0.2">
          <h2>Changes to This Policy</h2>
          <p>We may update this policy from time to time. Any changes will be posted on this page with a revised date. Continued use of our website or services after changes are posted constitutes acceptance of the updated policy.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.9" :threshold="0.2">
          <h2>Contact</h2>
          <p>For any questions about this privacy policy or how we handle your data, contact us at <a href="mailto:info@tradecraftvfx.vn">info@tradecraftvfx.vn</a>.</p>
        </ScrollReveal>

        <p class="policy-date">Last Updated: April 23, 2026</p>
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
