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
    
    <section class="section">
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
