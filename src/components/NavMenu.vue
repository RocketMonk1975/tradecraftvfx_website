<template>
  <div class="navigation">
    <!-- Menu Toggle Button (visible on all devices) -->
    <button 
      class="menu-toggle" 
      :class="{ 'active': isMenuOpen, 'on-orange': isOnOrangeSection }"
      @click="toggleMenu"
      aria-label="Toggle navigation menu"
    >
      <div class="Line1"></div>
      <div class="Line2"></div>
    </button>

    <!-- Side Navigation Panel with overlay (similar to Droga5) -->
    <div class="side-nav" :class="{ 'open': isMenuOpen }">
      <div class="side-nav-overlay" @click="closeMenu"></div>
      <div class="side-nav-content">
        <div class="side-nav-header">
          <h2>MENU</h2>
          <button class="close-menu" @click="closeMenu" aria-label="Close menu">
            <span></span>
            <span></span>
          </button>
        </div>
        
        <nav class="nav-links">
          <ul>
            <li :style="`--i:1`">
              <router-link to="/" @click="closeMenu">HOME</router-link>
            </li>
            <li :style="`--i:2`">
              <router-link to="/about" @click="closeMenu">ABOUT</router-link>
            </li>
            <li :style="`--i:3`">
              <router-link to="/work" @click="closeMenu">OUR WORK</router-link>
            </li>
            <li :style="`--i:4`">
              <router-link to="/services" @click="closeMenu">SERVICES</router-link>
            </li>
            <li :style="`--i:5`">
              <router-link to="/contact" @click="closeMenu">CONTACT</router-link>
            </li>
            <li :style="`--i:6`" class="secondary-link">
              <router-link to="/privacy" @click="closeMenu">PRIVACY</router-link>
            </li>
            <li :style="`--i:7`" class="secondary-link">
              <router-link to="/terms" @click="closeMenu">TERMS</router-link>
            </li>
          </ul>
        </nav>

        <div class="side-nav-footer">
          <div class="social-links">
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-3.1 3-1.532 0-1.48-1.2-3.286-1.2-1.91 0-2.552 1.2-4.063 1.2-1.05 0-1.821-.535-2.411-1.215-2.107-2.449-3.866-8.805-.386-13.006 1.054-1.269 2.629-2.132 4.228-2.132 1.675 0 2.471 1.132 3.585 1.132.987 0 1.018-.545 3.664-.545 2.501 0 2.931 1.375 3.769 1.882"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      isMenuOpen: false,
      scrollPosition: 0,
      isScrolledPastOrange: false,
    }
  },
  computed: {
    isOnOrangeSection() {
      // True when we're on a hero page AND on the orange portion
      if (!this.$route) return false;
      
      // Only show white navigation elements when on these pages AND in the orange section
      return (this.$route.path === '/about' || this.$route.path === '/work' || this.$route.path === '/services') && !this.isScrolledPastOrange;
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      
      // Toggle the no-scroll class on the body
      if (this.isMenuOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.classList.remove('no-scroll');
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      
      // Check if we've scrolled past the orange hero section
      // On pages with orange hero sections
      if (this.$route && (this.$route.path === '/about' || this.$route.path === '/work' || this.$route.path === '/services')) {
        // 80vh is the height of our orange background (in percentage of viewport height)
        const orangeSectionHeight = window.innerHeight * 0.8;
        // We want isScrolledPastOrange to be FALSE when at the top (in the orange section)
        // and TRUE when scrolled down (past the orange section)
        this.isScrolledPastOrange = this.scrollPosition > orangeSectionHeight * 0.7; // Switch at 70% of the way down
      } else {
        // Force true on all other pages to ensure orange menu items
        this.isScrolledPastOrange = true;
      }
    }
  },
  mounted() {
    // Initialize scroll handler immediately to set correct colors on page load
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Ensure body scroll is restored when component is destroyed
    document.body.classList.remove('no-scroll');
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
/* Menu Toggle Button - Droga5 style */
.menu-toggle {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9000; /* High but below the sidebar */
  opacity: 1;
  transition: opacity 0.3s ease;
  margin-right: 0.5rem;
}

/* Hide the menu toggle when sidebar is open */
.side-nav.open ~ .menu-toggle,
.navigation:has(.side-nav.open) .menu-toggle {
  opacity: 0;
  visibility: hidden;
}

.menu-toggle .Line1,
.menu-toggle .Line2 {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ff8243; /* Default orange color */
  transition: transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
}

/* White hamburger menu when on orange sections */
.menu-toggle.on-orange .Line1,
.menu-toggle.on-orange .Line2 {
  background-color: white;
}

.menu-toggle.active .Line1 {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle.active .Line2 {
  transform: translateY(-6px) rotate(-45deg);
}

/* Side Navigation */
.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 10500; /* Increased to be above everything else */
  pointer-events: none;
  visibility: hidden;
}

.side-nav.open {
  visibility: visible;
  pointer-events: all;
}

.side-nav-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.side-nav.open .side-nav-overlay {
  opacity: 1;
}

.side-nav-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  max-width: 90vw;
  background-color: #1f3a4d; /* Using exact color instead of var to ensure opacity */
  color: white;
  box-shadow: -5px 0 25px rgba(0,0,0,0.3);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
}

.side-nav.open .side-nav-content {
  transform: translateX(0);
}

/* Side Nav Header */
.side-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.side-nav-header h2 {
  margin: 0;
  font-size: 1rem;
  letter-spacing: 2px;
  opacity: 0.7;
}

/* Close Button */
.close-menu {
  position: relative;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.close-menu span {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
}

.close-menu span:first-child {
  transform: rotate(45deg);
}

.close-menu span:last-child {
  transform: rotate(-45deg);
}

/* Nav Links */
.nav-links {
  flex-grow: 1;
}

.nav-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: calc(0.05s * var(--i, 0));
}

.side-nav.open .nav-links li {
  opacity: 1;
  transform: translateY(0);
}

.nav-links a {
  display: inline-block;
  font-family: var(--font-heading); /* Restore original font variable */
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff; /* Keep explicit hex code instead of named color */
  text-decoration: none;
  position: relative;
  text-shadow: 0px 1px 2px rgba(0,0,0,0.2); /* Keep subtle text shadow for better visibility */
  margin: 5px 0; /* Keep margin for better spacing */
}

.secondary-link a {
  font-size: 1.25rem;
  opacity: 0.8;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #ff8243 !important;
}

.nav-links a:hover::after,
.nav-links a.router-link-active {
  color: #ff8243 !important;
  font-weight: bold;
}

.nav-links a.router-link-active::after {
  width: 100%;
}

/* Social Links */
.side-nav-footer {
  margin-top: auto;
  padding-top: 2rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  color: white;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.social-links a:hover {
  opacity: 1;
}

/* Body Scroll Prevention */
.no-scroll {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}

/* Mobile Optimizations */
@media (max-width: 767px) {
  .side-nav-content {
    padding: 1.5rem;
    background-color: rgba(31, 58, 77, 0.97); /* Slightly more opaque background */
  }
  
  .nav-links a {
    font-size: 1.5rem;
    padding: 8px 0; /* Increase touch target size */
    display: block; /* Make links full width for easier tapping */
    letter-spacing: 0px; /* Match original design */
    font-weight: 600; /* Match original weight */
  }
  
  .secondary-link a {
    font-size: 1rem;
    opacity: 0.8; /* Match original opacity */
  }
  
  /* Fix for Android text rendering without changing font appearance */
  .nav-links ul {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Ensure active links maintain accent color */
  .nav-links a.router-link-active {
    color: #ff8243 !important;
  }
}
</style>
