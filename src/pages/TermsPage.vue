<template>
  <div class="page termspage">
    <!-- Orange hero section with animated title -->
    <div class="orange-hero-wrapper">
      <section class="dream-big-hero">
        <div class="container dream-big-container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <h1 class="dream-big-text">TERMS OF SERVICE</h1>
            <p>Please read these terms carefully before using our services.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>

    <section class="section terms-content">
      <div class="container">
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.1" :threshold="0.2">
          <h2>Agreement to Terms</h2>
          <p class="lead-text">By accessing the Tradecraft VFX website or engaging our services — including music video production, music production, mastering, artist development, and visual effects — you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.2" :threshold="0.2">
          <h2>Services</h2>
          <p>Tradecraft VFX provides music and visual production services, including but not limited to:</p>
          <ul>
            <li>Music video production (AI-generated visuals, Unreal Engine 5 environments, social content)</li>
            <li>Music production and AI-assisted composition</li>
            <li>Audio mastering for streaming, sync licensing, and distribution</li>
            <li>Artist development and release strategy</li>
            <li>Visual effects production for film and television</li>
            <li>3D modelling, animation, compositing, and previsualization</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.3" :threshold="0.2">
          <h2>Project Agreements</h2>
          <p>All client engagements require a separate project agreement outlining specific deliverables, timelines, and payment terms. These project agreements incorporate these Terms of Service by reference. Work does not commence until a project agreement is signed and the deposit is received.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.4" :threshold="0.2">
          <h2>Intellectual Property</h2>
          <p>Unless otherwise specified in a project agreement:</p>
          <ul>
            <li>Tradecraft VFX retains ownership of all working files, source materials, AI prompts, and production assets created during production.</li>
            <li>Upon receipt of full payment, clients receive a licence to use the final deliverables as specified in the project agreement.</li>
            <li>Music produced under artist development agreements is subject to separate publishing and master recording terms outlined in the artist agreement.</li>
            <li>Tradecraft VFX reserves the right to showcase completed work in our portfolio and promotional materials unless a non-disclosure agreement is in place.</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.5" :threshold="0.2">
          <h2>Payment Terms</h2>
          <p>Our standard payment structure is:</p>
          <ul>
            <li>50% deposit required to commence work</li>
            <li>Remaining 50% due upon final delivery</li>
            <li>Multi-release and artist development retainers may be arranged on a monthly payment schedule — terms outlined in the project agreement</li>
            <li>Late payments may incur additional fees at our standard rate</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.6" :threshold="0.2">
          <h2>Revisions and Scope Changes</h2>
          <p>Project quotes include a specified number of revision rounds. Additional revisions or scope changes beyond the agreed brief may incur additional charges. Any changes to deliverables, timelines, or creative direction must be agreed in writing before work proceeds.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.7" :threshold="0.2">
          <h2>Cancellation</h2>
          <p>If a project is cancelled by the client, payment is required for all work completed up to the cancellation date. Deposits are non-refundable. For ongoing artist development retainers, a minimum 30-day written notice is required to cancel.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.8" :threshold="0.2">
          <h2>Tradecraft Radio &amp; Artist Roster</h2>
          <p>Artists signed to the Tradecraft Radio label or enrolled in our artist development programme are subject to separate artist agreements. Email signup for Tradecraft Radio notifications constitutes consent to receive updates about new music releases and Tradecraft news. You may unsubscribe at any time.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.9" :threshold="0.2">
          <h2>Limitation of Liability</h2>
          <p>Tradecraft VFX is not liable for any indirect, consequential, or incidental damages arising from the use of our services or deliverables, including but not limited to streaming platform decisions, sync licensing outcomes, or audience growth results.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="1.0" :threshold="0.2">
          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Updated terms will be posted on this page with a revised date.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="1.1" :threshold="0.2">
          <h2>Governing Law</h2>
          <p>These terms are governed by the laws of the State of California, without regard to its conflict of law principles.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="1.2" :threshold="0.2">
          <h2>Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:info@tradecraftvfx.vn">info@tradecraftvfx.vn</a>.</p>
        </ScrollReveal>

        <p class="policy-date">Last Updated: April 23, 2026</p>
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
