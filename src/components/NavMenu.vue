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
    <div class="side-nav" :class="{ 'open': isMenuOpen, 'mobile-nav': isMobileView() }">
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
      initialized: false,
    }
  },
  computed: {
    isOnOrangeSection() {
      if (!this.$route) return false;
      return this.isOrangeHeroPage && this.scrollPosition < (window.innerHeight * 0.6);
    },
    isOrangeHeroPage() {
      return ['About', 'Work', 'Services', 'Contact', 'Privacy', 'Terms'].includes(this.$route.name);
    }
  },
  methods: {
    isMobileView() {
      return window.innerWidth < 768;
    },
    handleResize() {
      // Force re-evaluate mobile view state
      this.$forceUpdate();
    },
    toggleMenu() {
      if (this.isMenuOpen) {
        this.closeMenu();
      } else {
        if (this.closeTimeoutId) {
          clearTimeout(this.closeTimeoutId);
          this.closeTimeoutId = null;
        }
        
        document.body.classList.add('no-scroll');
        this.isMenuOpen = true;
        
        const navElement = document.querySelector('.side-nav');
        if (navElement && navElement.classList.contains('closing')) {
          navElement.classList.remove('closing');
        }
      }
    },
    closeMenu() {
      document.querySelectorAll('.nav-links li').forEach((item, index) => {
        const reversedIndex = 7 - parseInt(item.style.getPropertyValue('--i')); 
        item.style.setProperty('--close-i', reversedIndex);
      });
      document.querySelector('.side-nav').classList.add('closing');
      
      this.closeTimeoutId = setTimeout(() => {
        this.isMenuOpen = false;
        document.body.classList.remove('no-scroll');
        document.querySelector('.side-nav').classList.remove('closing');
      }, 500); 
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      
      if (this.isOrangeHeroPage) {
        this.isScrolledPastOrange = this.scrollPosition >= (window.innerHeight * 0.6);
      } else {
        this.isScrolledPastOrange = true;
      }
    }
  },
  mounted() {
    // Add scroll event listener
    window.addEventListener('scroll', this.handleScroll);
    
    // Add resize event listener for mobile detection
    window.addEventListener('resize', this.handleResize);
    
    this.handleResize();
    this.handleScroll();
    
    // The menu toggle should be visible by default - no delay needed
    this.initialized = true;
  },
  beforeUnmount() {
    // Ensure body scroll is restored when component is destroyed
    document.body.classList.remove('no-scroll');
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
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
  margin-right: 0.5rem;
  opacity: 1; /* Always visible by default */
  transition: transform 0.6s ease, background-color 0.6s ease;
}

/* No longer needed since the menu is always visible */

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
  transition: transform 0.6s ease, opacity 0.6s ease, background-color 0.6s ease;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
}

/* Menu Toggle On Orange Section */
.menu-toggle.on-orange .Line1,
.menu-toggle.on-orange .Line2 {
  background-color: white !important; /* Force white with !important to override any other styles */
  opacity: 1;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.4));
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
  transition: visibility 0s linear 0.4s; /* Delay visibility change */
}

.side-nav.open {
  visibility: visible;
  pointer-events: all;
  transition: visibility 0s linear 0s; /* No delay when opening */
}

.side-nav-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1); /* Match sidebar animation timing */
}

.side-nav.open .side-nav-overlay {
  opacity: 1;
}

.side-nav-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 320px; /* Fixed width instead of percentage */
  max-width: 80%; /* Maximum percentage of screen width */
  height: 100vh;
  background-color: rgba(31, 58, 77, 1); /* Fully opaque background */
  padding: 1rem 1.5rem; /* Reduced padding to give more room for text */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: visible; /* Ensure content doesn't get cut off horizontally */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  box-sizing: border-box; /* Ensure padding is included in width calculations */
  z-index: 11000; /* Ensure it's above other elements */
  opacity: 0; /* Start fully transparent */
  transition: 
    transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
    opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1); /* Smooth animation for both properties */
}

/* Desktop animation - from the side */
@media (min-width: 768px) {
  .side-nav-content {
    transform: translateX(50px); /* Start off to the right */
  }
  
  .side-nav.open .side-nav-content {
    transform: translateX(0); /* Move in from the right */
    opacity: 1; /* Become fully visible */
  }
  
  .side-nav.closing .side-nav-content {
    transform: translateX(50px); /* Move back to the right */
    opacity: 0; /* Fade out */
  }
}

/* Mobile animation - from the top */
@media (max-width: 767px) {
  .side-nav-content {
    transform: translateY(-30px); /* Start above the viewport */
  }
  
  .side-nav.open .side-nav-content {
    transform: translateY(0); /* Move down into place */
    opacity: 1; /* Become fully visible */
  }
  
  .side-nav.closing .side-nav-content {
    transform: translateY(-30px); /* Move back up */
    opacity: 0; /* Fade out */
  }
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
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 180px; /* Minimum width to ensure content is visible */
  box-sizing: border-box;
}

.nav-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-sizing: border-box;
}

.nav-links li {
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease; /* Restore original animation */
  transition-delay: calc(var(--i) * 0.1s); /* Restore original delay */
  min-width: 200px; /* Ensure minimum width */
  width: 100%;
  overflow: visible; /* Prevent content from being cut off */
  display: block !important; /* Force display */
  visibility: visible !important; /* Force visibility */
}

.side-nav.open .nav-links li {
  opacity: 1;
  transform: translateY(0);
}

/* Closing animation */
.side-nav.closing .nav-links li {
  opacity: 0;
  transform: translateY(10px);
  transition-delay: calc(var(--close-i) * 0.1s); /* Use reversed delay for closing */
}

.nav-links a {
  display: block !important; /* Force block display */
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff !important; /* Force white color */
  text-decoration: none;
  position: relative;
  text-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  margin: 5px 0;
  min-width: 160px; /* Ensure minimum width */
  white-space: nowrap; /* Prevent text wrapping that can cause disappearing */
  overflow: visible; /* Ensure text isn't cut off */
  visibility: visible !important; /* Force visibility */
  opacity: 1 !important; /* Force opacity */
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

/* Side nav footer */
.side-nav-footer {
  margin-top: auto; /* Push to bottom */
  margin-bottom: 2rem;
  position: relative;
  padding-top: 20px;
  width: 100%;
}

/* Close button */
.close-menu {
  padding: 15px;
  margin: -15px;
}

/* Ensure social links are visible */
.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 20px;
  padding-bottom: 20px;
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

/* Mobile Navigation - Simplified for maximum reliability */
.mobile-nav .side-nav-overlay {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.mobile-nav.open .side-nav-overlay {
  opacity: 1;
}

.mobile-nav .side-nav-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100vh;
  background-color: rgba(31, 41, 51, 0.98);
  z-index: 11000;
  overflow-y: auto;
  padding: 1.5rem 1.5rem 5rem 1.5rem; /* Increased bottom padding to prevent clipping */
  box-sizing: border-box;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}

.mobile-nav.open .side-nav-content {
  opacity: 1;
  visibility: visible;
}

.mobile-nav.closing .side-nav-content {
  opacity: 0;
  transform: translateY(-10%);
}

/* Landscape mode - use desktop width */
@media (max-width: 767px) and (orientation: landscape) {
  .mobile-nav .side-nav-content {
    width: 320px !important;
    max-width: 80% !important;
    right: 0;
    left: auto;
    height: 100vh !important;
    overflow-y: auto !important;
    padding-bottom: 80px !important; /* Extra padding at bottom for landscape */
  }
  
  /* Ensure menu items are visible in landscape */
  .mobile-nav.open .nav-links li {
    opacity: 1 !important;
    visibility: visible !important;
    display: block !important;
  }
  
  /* Ensure footer is at the bottom */
  .side-nav-footer {
    position: relative;
    margin-top: auto;
    padding-top: 20px;
  }
}

/* Mobile Optimizations */
@media (max-width: 767px) {
  /* Basic styling for mobile portrait mode */
  .side-nav-content {
    padding: 1.5rem 1.5rem 4rem 1.5rem; /* Increased bottom padding */
    background-color: rgba(31, 41, 51, 0.98); /* Semi-transparent dark background */
    position: fixed !important;
    width: 100% !important; /* Full width in portrait */
    height: 100vh !important;
    max-width: 100% !important;
    left: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
    overflow-x: visible !important;
    overflow-y: auto !important; /* Ensure scrolling works */
    box-sizing: border-box !important;
    z-index: 11000 !important;
    display: flex !important;
    flex-direction: column !important;
  }
  
  /* Basic container styling */
  .nav-links {
    width: 100% !important;
    min-width: 220px !important;
    display: block !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  
  .nav-links ul {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    gap: 0 !important;
  }
  
  /* List item styling */
  .nav-links li {
    margin: 10px 0;
    width: 100%;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
    display: block !important;
    visibility: visible !important;
    pointer-events: auto !important;
    min-height: 50px;
  }
  
  /* Link styling - much more basic for mobile */
  .nav-links a {
    font-size: 28px !important;
    line-height: 60px !important; /* Match the min-height */
    padding: 0 !important;
    margin: 0 !important;
    display: block !important;
    width: 100% !important;
    height: 60px !important;
    color: white !important;
    text-shadow: none;
    font-weight: 700 !important;
    opacity: 1 !important;
    white-space: nowrap !important;
    overflow: visible !important;
    visibility: visible !important;
    transition: color 0.2s ease;
    position: relative !important;
    z-index: 100 !important;
  }
  
  /* Reset all animations for mobile to ensure content always shows */
  .mobile-nav .nav-links li {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
    display: block !important;
    visibility: visible !important;
    min-height: 60px !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .mobile-nav.open .nav-links li {
    opacity: 1 !important;
    transform: none !important;
    visibility: visible !important;
    display: block !important;
    position: relative !important;
    min-height: 60px !important;
    margin: 0 !important;
    padding: 0 !important;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  
  .nav-links a:active,
  .nav-links a:hover {
    transform: translateX(10px);
    color: #ff8243 !important;
  }
  
  /* Override transition effects */
  .side-nav.open .nav-links li {
    opacity: 1 !important;
    transform: none !important;
  }
  
  /* Secondary link styling */
  .secondary-link a {
    font-size: 22px !important;
    line-height: 50px !important;
    height: 50px !important;
    color: white !important;
    opacity: 0.8 !important;
    white-space: nowrap !important;
  }
  
  /* State styling */
  .nav-links a:hover,
  .nav-links a:active,
  .nav-links a:focus {
    color: #ff8243 !important;
  }
  
  /* Active link styling */
  .nav-links a.router-link-active {
    color: #ff8243 !important;
    border-bottom-color: #ff8243;
  }
  
  /* Samsung device specific fixes */
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    .nav-links a {
      transform: scale(1) !important;
      backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased !important;
    }
  }
}
</style>
