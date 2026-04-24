<template>
  <div class="artist-profile-page" v-if="artist">

    <!-- Hero -->
    <div class="orange-hero-wrapper">
      <div class="orange-background"></div>
      <div class="hero-image-wrapper">
        <img :src="artist.image" :alt="artist.name" class="hero-artist-image" />
        <div class="hero-image-overlay"></div>
      </div>
      <section class="page-header">
        <div class="container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <span class="hero-genre-label">{{ artist.genre }}</span>
            <h1 class="artists-hero-text">{{ artist.name }}</h1>
            <p class="hero-tagline">{{ artist.tagline }}</p>
          </ScrollReveal>
        </div>
      </section>
    </div>

    <!-- Bio -->
    <section class="page-content bio-section">
      <div class="container bio-container">
        <ScrollReveal direction="left" :distance="50" :duration="1" :delay="0.1" :threshold="0.2">
          <h2 class="section-title section-title-accent">ABOUT</h2>
        </ScrollReveal>
        <div class="bio-grid">
          <div class="bio-text">
            <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.2" :threshold="0.2">
              <p v-for="(paragraph, i) in bioParagraphs" :key="i" class="bio-paragraph">{{ paragraph }}</p>
            </ScrollReveal>
          </div>
          <div class="bio-sidebar">
            <ScrollReveal direction="right" :distance="40" :duration="0.8" :delay="0.3" :threshold="0.2">
              <div class="sidebar-card">
                <div class="sidebar-image-wrapper">
                  <img :src="artist.image" :alt="artist.name" class="sidebar-image" />
                </div>
                <div class="sidebar-meta">
                  <div class="meta-row">
                    <span class="meta-label">GENRE</span>
                    <span class="meta-value">{{ artist.genre }}</span>
                  </div>
                  <div class="meta-row" v-if="artist.subgenre">
                    <span class="meta-label">STYLE</span>
                    <span class="meta-value">{{ artist.subgenre }}</span>
                  </div>
                  <div class="meta-row">
                    <span class="meta-label">STATUS</span>
                    <span class="meta-value meta-orange">{{ artist.status }}</span>
                  </div>
                  <div class="meta-row">
                    <span class="meta-label">LABEL</span>
                    <span class="meta-value">Tradecraft Radio</span>
                  </div>
                </div>
                <div class="sidebar-socials">
                  <a :href="artist.socials.instagram" class="social-btn" aria-label="Instagram">IG</a>
                  <a :href="artist.socials.tiktok" class="social-btn" aria-label="TikTok">TK</a>
                  <a :href="artist.socials.soundcloud" class="social-btn" aria-label="SoundCloud">SC</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    <!-- Music Coming Soon -->
    <section class="page-content music-section">
      <div class="container">
        <ScrollReveal direction="left" :distance="50" :duration="1" :delay="0.1" :threshold="0.2">
          <h2 class="section-title section-title-accent">MUSIC</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" :distance="30" :duration="0.8" :delay="0.2" :threshold="0.2">
          <div class="coming-soon-music">
            <div class="waveform">
              <span v-for="n in 24" :key="n" class="wave-bar" :style="`--h: ${20 + Math.random() * 60}%; animation-delay: ${n * 0.06}s`"></span>
            </div>
            <p class="coming-soon-label">FIRST RELEASE COMING SOON</p>
            <p class="coming-soon-sub">Sign up to Tradecraft Radio to be notified when the music drops.</p>
            <router-link to="/artists" class="notify-btn">GET NOTIFIED →</router-link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Back to roster -->
    <section class="back-section">
      <div class="container">
        <router-link to="/artists" class="back-link">← BACK TO ROSTER</router-link>
      </div>
    </section>

  </div>

  <!-- 404 state -->
  <div v-else class="not-found">
    <div class="container">
      <h1>Artist not found.</h1>
      <router-link to="/artists">← Back to roster</router-link>
    </div>
  </div>
</template>

<script>
import ScrollReveal from '../components/ScrollReveal.vue';
import { getArtistById } from '../data/artists.js';

export default {
  name: 'ArtistProfilePage',
  components: { ScrollReveal },
  props: ['id'],
  computed: {
    artist() {
      return getArtistById(this.id || this.$route.params.id);
    },
    bioParagraphs() {
      return this.artist ? this.artist.bio.split('\n\n').filter(p => p.trim()) : [];
    }
  }
}
</script>

<style scoped>
.artist-profile-page {
  background-color: #000;
}

/* ── Hero ── */
.orange-hero-wrapper {
  height: 80vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.orange-background {
  position: absolute;
  inset: 0;
  background-color: var(--color-primary);
  z-index: 0;
}

.hero-image-wrapper {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-artist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0.35;
}

.hero-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.1) 100%);
}

.page-header {
  position: relative;
  z-index: 2;
  padding: calc(var(--header-height) + 30px) 0 30px;
  height: 100%;
  display: flex;
  align-items: center;
}

.page-header .container {
  padding-left: 10%;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
}

.hero-genre-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.artists-hero-text {
  font-size: 104px;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-style: italic;
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem;
  line-height: 1;
  color: white;
}

.hero-tagline {
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 300;
  opacity: 0.85;
  color: white;
  margin: 0;
  max-width: 500px;
}

/* ── Bio ── */
.page-content {
  padding: 5rem 0;
  background-color: #000;
}

.bio-container {
  max-width: 1200px;
}

.section-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 4px;
  color: rgba(255,255,255,0.4);
  margin-bottom: 2.5rem;
}

.section-title-accent {
  border-left: 3px solid var(--color-primary);
  padding-left: 1rem;
  color: rgba(255,255,255,0.5);
}

.bio-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 4rem;
  align-items: start;
}

.bio-paragraph {
  color: rgba(255,255,255,0.75);
  font-size: 1.05rem;
  line-height: 1.85;
  margin-bottom: 1.5rem;
}

/* ── Sidebar ── */
.sidebar-card {
  background: #0d0d0d;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  overflow: hidden;
}

.sidebar-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
}

.sidebar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(20%);
  transition: filter 0.3s;
}

.sidebar-card:hover .sidebar-image {
  filter: grayscale(0%);
}

.sidebar-meta {
  padding: 1.25rem;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.meta-label {
  font-size: 0.7rem;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.3);
  text-transform: uppercase;
}

.meta-value {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  text-align: right;
}

.meta-orange {
  color: var(--color-primary);
}

.sidebar-socials {
  display: flex;
  padding: 1rem 1.25rem;
  gap: 8px;
}

.social-btn {
  flex: 1;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: rgba(255,255,255,0.5);
  border: 1px solid rgba(255,255,255,0.1);
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}

.social-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* ── Music section ── */
.music-section {
  border-top: 1px solid rgba(255,255,255,0.04);
}

.coming-soon-music {
  text-align: center;
  padding: 3rem 0;
}

.waveform {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 60px;
  margin-bottom: 2rem;
}

.wave-bar {
  display: block;
  width: 3px;
  height: var(--h);
  background: var(--color-primary);
  opacity: 0.4;
  border-radius: 2px;
  animation: wave 1.4s ease-in-out infinite alternate;
}

@keyframes wave {
  from { transform: scaleY(0.3); }
  to   { transform: scaleY(1); }
}

.coming-soon-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.coming-soon-sub {
  color: rgba(255,255,255,0.4);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.notify-btn {
  display: inline-block;
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  border: 1px solid var(--color-primary);
  padding: 0.75rem 2rem;
  transition: background 0.2s, color 0.2s;
}

.notify-btn:hover {
  background: var(--color-primary);
  color: white;
}

/* ── Back link ── */
.back-section {
  padding: 2rem 0 4rem;
  background: #000;
}

.back-link {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.35);
  text-decoration: none;
  padding-left: 10%;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--color-primary);
}

/* ── Not found ── */
.not-found {
  padding: 10rem 0;
  text-align: center;
  color: white;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .bio-grid {
    grid-template-columns: 1fr;
  }

  .sidebar-card {
    max-width: 400px;
    margin: 0 auto;
  }

  .artists-hero-text {
    font-size: 60px;
  }
}

@media (max-width: 480px) {
  .artists-hero-text {
    font-size: 42px;
  }
}
</style>
