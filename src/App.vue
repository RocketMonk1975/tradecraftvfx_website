<template>
  <div class="app">
    <header class="header">    <div class="container-fluid">
      <div class="header-content">
        <div class="logo">
          <router-link to="/" class="logo-container">
            <!-- ABOUT PAGE -->
            <template v-if="$route && $route.path === '/about'">
              <!-- Top of page (orange hero) - show white logo -->
              <img v-if="scrollPosition < (window.innerHeight * 0.6)" src="/images/SVG/Asset 2.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Bottom of page - show orange logo -->
              <img v-else src="/images/SVG/Asset 3.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Tagline follows same logic -->
              <span class="tagline" :class="{'on-orange': scrollPosition < (window.innerHeight * 0.6)}">ENTERTAINMENT ENGINEERED</span>
            </template>
            
            <!-- WORK PAGE -->
            <template v-else-if="$route && $route.path === '/work'">
              <!-- Top of page (orange hero) - show white logo -->
              <img v-if="scrollPosition < (window.innerHeight * 0.6)" src="/images/SVG/Asset 2.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Bottom of page - show orange logo -->
              <img v-else src="/images/SVG/Asset 3.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Tagline follows same logic -->
              <span class="tagline" :class="{'on-orange': scrollPosition < (window.innerHeight * 0.6)}">ENTERTAINMENT ENGINEERED</span>
            </template>
            
            <!-- SERVICES PAGE -->
            <template v-else-if="$route && $route.path === '/services'">
              <!-- Top of page (orange hero) - show white logo -->
              <img v-if="scrollPosition < (window.innerHeight * 0.6)" src="/images/SVG/Asset 2.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Bottom of page - show orange logo -->
              <img v-else src="/images/SVG/Asset 3.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Tagline follows same logic -->
              <span class="tagline" :class="{'on-orange': scrollPosition < (window.innerHeight * 0.6)}">ENTERTAINMENT ENGINEERED</span>
            </template>
            
            <!-- CONTACT PAGE -->
            <template v-else-if="$route && $route.path === '/contact'">
              <!-- Top of page (orange hero) - show white logo -->
              <img v-if="scrollPosition < (window.innerHeight * 0.6)" src="/images/SVG/Asset 2.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Bottom of page - show orange logo -->
              <img v-else src="/images/SVG/Asset 3.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Tagline follows same logic -->
              <span class="tagline" :class="{'on-orange': scrollPosition < (window.innerHeight * 0.6)}">ENTERTAINMENT ENGINEERED</span>
            </template>
            
            <!-- PRIVACY PAGE -->
            <template v-else-if="$route && $route.path === '/privacy'">
              <!-- Top of page (orange hero) - show white logo -->
              <img v-if="scrollPosition < (window.innerHeight * 0.6)" src="/images/SVG/Asset 2.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Bottom of page - show orange logo -->
              <img v-else src="/images/SVG/Asset 3.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Tagline follows same logic -->
              <span class="tagline" :class="{'on-orange': scrollPosition < (window.innerHeight * 0.6)}">ENTERTAINMENT ENGINEERED</span>
            </template>
            
            <!-- TERMS PAGE -->
            <template v-else-if="$route && $route.path === '/terms'">
              <!-- Top of page (orange hero) - show white logo -->
              <img v-if="scrollPosition < (window.innerHeight * 0.6)" src="/images/SVG/Asset 2.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Bottom of page - show orange logo -->
              <img v-else src="/images/SVG/Asset 3.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <!-- Tagline follows same logic -->
              <span class="tagline" :class="{'on-orange': scrollPosition < (window.innerHeight * 0.6)}">ENTERTAINMENT ENGINEERED</span>
            </template>
            
            <!-- HOME PAGE Special Handling -->
            <template v-else-if="$route && $route.path === '/'">
              <img src="/images/SVG/Asset 3.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <span class="tagline">ENTERTAINMENT ENGINEERED</span>
            </template>
            
            <!-- ALL OTHER PAGES - always show orange logo -->
            <template v-else>
              <img src="/images/SVG/Asset 3.svg" alt="TradeCraft VFX Logo" class="logo-image">
              <span class="tagline">ENTERTAINMENT ENGINEERED</span>
            </template>
          </router-link>
        </div>
        <NavMenu ref="navMenu" />
      </div>
    </div></header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="container footer-container">
        <!-- Left section: Logo and policy links -->
        <div class="footer-left">
          <div class="footer-logo">
            <img src="/images/SVG/Asset 2.svg" alt="TradeCraft VFX Logo" class="footer-logo-image">
          </div>
          <div class="footer-links">
            <router-link to="/privacy" class="policy-link">Privacy Policy</router-link>
            <router-link to="/terms" class="policy-link">Terms of Service</router-link>
          </div>
        </div>
        
        <!-- Center section: Copyright -->
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} TradeCraft VFX. All rights reserved.
        </div>
        
        <!-- Right section: Social media links -->
        <div class="footer-social">
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue';

export default {
  components: {
    NavMenu
  },
  name: 'App',
  data() {
    return {
      basePath: '/',
      mobileMenuOpen: false,
      scrollPosition: 0,
      window: window
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      document.body.classList.toggle('no-scroll', this.mobileMenuOpen);
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.classList.remove('no-scroll');
    },
    handleScroll() {
      // Just update the scroll position - all logic now happens in the template
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    // Add scroll listener
    window.addEventListener('scroll', this.handleScroll);
    
    // The route watcher with immediate:true will handle the initial check
    // No need for complex interval checks anymore
    
    // Add fade-in animation for the header on initial page load
    document.querySelector('.header').classList.add('fade-in');
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
/* Import base styles */
@import './assets/styles/base.css';

/* Import base styles */
@import './assets/styles/base.css';
@import './assets/styles/animations.css';

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap');

/* App Layout */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  background-color: #000;
  color: #fff;
}

/* Ensure black background on html and body */
html, body {
  background-color: #000;
  margin: 0;
  padding: 0;
}

.main-content {
  flex: 1;
  padding-top: 140px; /* Add padding to account for fixed header height */
}

/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px; /* Match the header content height */
  background-color: transparent;
  z-index: 100;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.header.fade-in {
  opacity: 1;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px; /* Increased height to accommodate larger logo */
  padding: 1rem 1.5rem;
  width: 100%;
}

.logo {
  padding-left: 0.5rem;
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  min-width: 40px; /* Ensure minimum width on small screens */
}

.tagline {
  color: #ff8243; /* Default is orange */
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 20px;
  white-space: nowrap;
  transition: color 0.6s ease;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

/* White tagline when on orange section */
.tagline.on-orange {
  color: white;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
}

.logo-image {
  height: 102px; /* Reduced by 15% from 120px */
  width: auto;
  object-fit: contain;
  transition: opacity 0.6s ease;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3));
}

/* We no longer need these filter styles since we're using different SVG files */
/* .logo-container.on-orange .logo-image {
  filter: brightness(0) invert(1);
} */

.logo a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
  text-shadow: 0px 1px 3px rgba(0,0,0,0.5);
}

.logo a:hover {
  opacity: 0.8;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo a {
  color: white;
  text-shadow: 0px 1px 3px rgba(0,0,0,0.5);
}

.navigation {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: var(--spacing-lg);
}

.nav-links a {
  color: var(--color-secondary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.nav-links a:hover {
  color: var(--color-primary);
}

.nav-links a.router-link-active {
  color: var(--color-primary);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
}

.mobile-menu-toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--color-primary);
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  background-color: white;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 99;
}

.mobile-menu.active {
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav-links {
  list-style: none;
  padding: var(--spacing-md);
}

.mobile-nav-links li {
  margin-bottom: var(--spacing-md);
}

.mobile-nav-links a {
  display: block;
  font-size: 1.2rem;
  padding: var(--spacing-sm) 0;
  color: var(--color-secondary);
  font-weight: 600;
}

/* Footer Styles */
.footer {
  background-color: var(--color-primary);
  color: white;
  padding: 20px 0;
  margin-top: 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
}

/* Left section with logo and policy links */
.footer-left {
  display: flex;
  align-items: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.footer-logo-image {
  height: 40px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1); /* Ensures SVG is white */
}

.footer-links {
  display: flex;
  align-items: center;
}

.policy-link {
  color: rgba(255, 255, 255, 0.8);
  margin-right: 20px;
  font-size: 0.85rem;
  text-decoration: none;
}

.policy-link:hover {
  color: white;
  text-decoration: underline;
}

/* Center copyright section */
.copyright {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  flex: 1;
}

/* Right social media section */
.footer-social {
  display: flex;
  justify-content: flex-end;
}

.social-link {
  margin-left: 20px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.85rem;
}

.social-link:hover {
  color: white;
  text-decoration: underline;
}

/* Responsive footer adjustments */
@media (max-width: 992px) {
  .footer-container {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .footer-left, .footer-social {
    width: 100%;
    justify-content: center;
  }
  
  .social-link {
    margin: 0 10px;
  }
  
  .footer-left {
    flex-direction: column;
  }
  
  .footer-logo {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .footer-links {
    justify-content: center;
  }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
  }
  
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-logo, .footer-links, .footer-social {
    margin-bottom: var(--spacing-md);
  }
  
  .footer-social {
    justify-content: center;
  }
  
  .social-link {
    margin: 0 var(--spacing-sm);
  }
}

.no-scroll {
  overflow: hidden;
}

/* Mobile-specific styles */
@media (max-width: 767px) {
  .site-header {
    height: 60px;
  }
  
  .logo img {
    height: 30px;
  }
}
</style>









