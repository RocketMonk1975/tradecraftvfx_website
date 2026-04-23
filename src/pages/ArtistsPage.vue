<template>
  <div class="artists-page">
    <div class="orange-hero-wrapper">
      <!-- Orange background (fades out when carousel is ready) -->
      <div class="orange-background" :class="{ 'fade-out': showCarousel }"></div>

      <!-- Carousel placeholder — swap in ArtistsPageCarousel component when ready -->
      <div class="carousel-wrapper" :class="{ 'fade-in': showCarousel }"></div>

      <section class="page-header">
        <div class="container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <h1 class="artists-hero-text">ARTISTS IN DEVELOPMENT</h1>
            <p>Our first roster is live. New music drops soon.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>

    <!-- Artist Profiles -->
    <section class="page-content artist-profiles-section">
      <div class="container">
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.1" :threshold="0.2">
          <div class="artist-profiles-header">
            <span class="radio-label">TRADECRAFT RADIO</span>
            <h3 class="artist-profiles-title">MEET THE ROSTER</h3>
            <p class="artist-profiles-subtitle">Four artists. Four genres. One pipeline.</p>
          </div>
        </ScrollReveal>
        <div class="artist-profiles-grid">
          <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.2" :threshold="0.2">
            <div class="artist-profile-card">
              <div class="artist-profile-image">
                <svg class="artist-silhouette-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.08)"/>
                  <path d="M12 68c0-15.464 12.536-28 28-28s28 12.536 28 28" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <div class="artist-coming-soon-overlay"><span>COMING SOON</span></div>
              </div>
              <div class="artist-profile-info">
                <p class="artist-name">EPOCH MONK</p>
                <p class="artist-genre">DJ / Curator · All Genres</p>
                <p class="artist-status">In Production</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.3" :threshold="0.2">
            <div class="artist-profile-card">
              <div class="artist-profile-image">
                <svg class="artist-silhouette-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.08)"/>
                  <path d="M12 68c0-15.464 12.536-28 28-28s28 12.536 28 28" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <div class="artist-coming-soon-overlay"><span>COMING SOON</span></div>
              </div>
              <div class="artist-profile-info">
                <p class="artist-name">ENIGMA</p>
                <p class="artist-genre">West Coast Hip-Hop</p>
                <p class="artist-status">In Production</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.4" :threshold="0.2">
            <div class="artist-profile-card">
              <div class="artist-profile-image">
                <svg class="artist-silhouette-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.08)"/>
                  <path d="M12 68c0-15.464 12.536-28 28-28s28 12.536 28 28" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <div class="artist-coming-soon-overlay"><span>COMING SOON</span></div>
              </div>
              <div class="artist-profile-info">
                <p class="artist-name">DIAMONDS</p>
                <p class="artist-genre">Amapiano</p>
                <p class="artist-status">In Production</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.5" :threshold="0.2">
            <div class="artist-profile-card">
              <div class="artist-profile-image">
                <svg class="artist-silhouette-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.08)"/>
                  <path d="M12 68c0-15.464 12.536-28 28-28s28 12.536 28 28" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <div class="artist-coming-soon-overlay"><span>COMING SOON</span></div>
              </div>
              <div class="artist-profile-info">
                <p class="artist-name">GEN</p>
                <p class="artist-genre">Vietnamese-American Pop</p>
                <p class="artist-status">In Production</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Tradecraft Radio Signup -->
    <section class="radio-signup-section">
      <div class="container">
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.1" :threshold="0.2">
          <div class="radio-signup-inner">
            <span class="radio-label">TRADECRAFT RADIO</span>
            <h2 class="radio-signup-title">BE THE FIRST TO HEAR IT</h2>
            <p class="radio-signup-subtitle">New artists. New music. Dropping soon.<br>Get notified when we go live.</p>
            <form class="radio-signup-form" @submit.prevent="submitRadioSignup">
              <input type="email" v-model="radioEmail" placeholder="Enter your email address" class="radio-email-input" required />
              <button type="submit" class="radio-signup-btn">NOTIFY ME</button>
            </form>
            <p v-if="radioSignupSuccess" class="radio-signup-success">You're on the list. We'll be in touch.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- CTA back to Services -->
    <section class="page-content">
      <div class="container" style="text-align: center; padding: 3rem 0;">
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.1" :threshold="0.2">
          <p style="color: rgba(255,255,255,0.6); margin-bottom: 1.5rem;">Want to know how we build this? See our full production pipeline.</p>
          <router-link to="/services" class="cta-link">VIEW OUR SERVICES →</router-link>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollReveal from '../components/ScrollReveal.vue';

export default {
  name: 'ArtistsPage',
  components: { ScrollReveal },
  data() {
    return {
      radioEmail: '',
      radioSignupSuccess: false,
      showCarousel: false
    };
  },
  methods: {
    submitRadioSignup() {
      if (this.radioEmail) {
        this.radioSignupSuccess = true;
        this.radioEmail = '';
      }
    }
  }
}
</script>

<style scoped>
.artists-page {
  background-color: #000;
}

/* ── Hero — matches WorkPage exactly ── */
.orange-hero-wrapper {
  height: 80vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.orange-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  z-index: 1;
  transition: opacity 1s ease-in-out;
  opacity: 1;
}

.orange-background.fade-out {
  opacity: 0;
}

.carousel-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-wrapper.fade-in {
  opacity: 1;
}

.page-header {
  padding: calc(var(--header-height) + 30px) 0 30px;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
}

.page-header .container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10%;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
}

.artists-hero-text {
  font-size: 104px;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-style: italic;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem 0;
  position: relative;
  text-align: left;
  line-height: 1;
  color: white;
}

.page-header p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0;
  font-style: italic;
  font-weight: 300;
  opacity: 0.9;
  color: white;
}

.page-content {
  padding: 5rem 0;
  background-color: #000;
}

.artist-profiles-section {
  padding: 5rem 0;
}

.artist-profiles-header {
  text-align: center;
  margin-bottom: 3rem;
}

.radio-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--color-primary);
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.artist-profiles-title {
  font-size: 2.2rem;
  font-weight: 900;
  color: white;
  margin: 0.5rem 0;
  font-family: 'Lato', sans-serif;
}

.artist-profiles-subtitle {
  color: rgba(255,255,255,0.55);
  font-size: 1rem;
}

.artist-profiles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.artist-profile-card {
  background: #111;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  overflow: hidden;
}

.artist-profile-image {
  position: relative;
  aspect-ratio: 1;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.artist-silhouette-icon {
  width: 80px;
  height: 80px;
}

.artist-coming-soon-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.4);
}

.artist-coming-soon-overlay span {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  padding: 6px 12px;
}

.artist-profile-info {
  padding: 1.25rem;
}

.artist-name {
  font-size: 1rem;
  font-weight: 900;
  color: white;
  margin: 0 0 4px;
  letter-spacing: 1px;
  font-family: 'Lato', sans-serif;
}

.artist-genre {
  font-size: 0.8rem;
  color: var(--color-primary);
  margin: 0 0 4px;
}

.artist-status {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.4);
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.radio-signup-section {
  background: var(--color-primary);
  padding: 5rem 0;
}

.radio-signup-inner {
  text-align: center;
  max-width: 540px;
  margin: 0 auto;
}

.radio-signup-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin: 0.5rem 0 1rem;
  font-family: 'Lato', sans-serif;
}

.radio-signup-subtitle {
  color: rgba(255,255,255,0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.radio-signup-form {
  display: flex;
  gap: 0;
  max-width: 440px;
  margin: 0 auto;
}

.radio-email-input {
  flex: 1;
  padding: 0.85rem 1.25rem;
  font-size: 0.95rem;
  border: none;
  background: rgba(0,0,0,0.25);
  color: white;
  outline: none;
}

.radio-email-input::placeholder {
  color: rgba(255,255,255,0.5);
}

.radio-signup-btn {
  padding: 0.85rem 1.5rem;
  background: #000;
  color: white;
  border: none;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background 0.2s;
}

.radio-signup-btn:hover {
  background: #222;
}

.radio-signup-success {
  margin-top: 1rem;
  color: rgba(255,255,255,0.9);
  font-size: 0.9rem;
}

.cta-link {
  display: inline-block;
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  border: 1px solid var(--color-primary);
  padding: 0.85rem 2rem;
  transition: background 0.2s, color 0.2s;
}

.cta-link:hover {
  background: var(--color-primary);
  color: white;
}

@media (max-width: 768px) {
  .artists-hero-text {
    font-size: 50px;
  }
  .radio-signup-form {
    flex-direction: column;
  }
}
</style>
