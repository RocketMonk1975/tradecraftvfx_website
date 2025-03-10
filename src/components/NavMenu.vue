<template>
  <div class="navigation">
    <!-- Menu Toggle Button -->
    <button 
      class="menu-toggle" 
      :class="{ 'active': isMenuOpen }"
      @click="toggleMenu"
      aria-label="Toggle navigation menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Side Navigation Panel -->
    <div class="side-nav" :class="{ 'open': isMenuOpen }">
      <div class="side-nav-content">
        <div class="side-nav-header">
          <h2>MENU</h2>
        </div>
        
        <nav class="nav-links">
          <ul>
            <li>
              <router-link to="/" @click="closeMenu">HOME</router-link>
            </li>
            <li>
              <router-link to="/work" @click="closeMenu">OUR WORK</router-link>
            </li>
            <li>
              <router-link to="/about" @click="closeMenu">ABOUT</router-link>
            </li>
            <li>
              <router-link to="/contact" @click="closeMenu">CONTACT</router-link>
            </li>
          </ul>
        </nav>

        <div class="side-nav-footer">
          <div class="social-links">
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.582,6.186c-0.23-0.86-1.22-1.88-2.956-3.071C16.791,2.101,14.748,1.466,12.354,1c-2.4,0-4.3,0.886-5.7,2.658c-1.4,1.772-1.991,3.767-1.991,6.1c0,1.297,0.379,2.434,1.138,3.406c0.759,0.972,1.74,1.458,2.937,1.458c1.164,0,2.11-0.453,2.842-1.369c0.731-0.916,1.032-1.879,1.032-2.98C12.7,9.386,12.304,8.4,11.813,7.686c-0.491-0.714-1.14-1.071-1.946-1.071c-0.806,0-1.483,0.273-2.033,0.819c-0.55,0.546-0.825,1.182-0.825,1.909c0,0.914,0.421,2.066,1.264,3.457c0.842,1.391,1.57,2.238,2.185,2.541c0.614,0.303,1.171,0.455,1.67,0.455c0.5,0,0.921-0.152,1.264-0.455c0.342-0.303,0.512-0.637,0.512-1c0-0.364-0.079-0.668-0.236-0.91c-0.158-0.242-0.385-0.354-0.683-0.354c-0.297,0-0.557,0.112-0.78,0.336c-0.223,0.224-0.335,0.492-0.335,0.801c0,0.308,0.112,0.572,0.335,0.791c0.223,0.219,0.483,0.328,0.78,0.328c0.298,0,0.524-0.105,0.683-0.364c0.157-0.242,0.236-0.546,0.236-0.91c0-0.363-0.17-0.697-0.512-1c-0.343-0.303-0.764-0.455-1.264-0.455c-0.499,0-1.056,0.152-1.67,0.455c-0.615,0.303-1.343,1.15-2.185,2.541c-0.843,1.391-1.264,2.543-1.264,3.457c0,0.727,0.275,1.363,0.825,1.909c0.55,0.546,1.227,0.819,2.033,0.819c0.806,0,1.455-0.357,1.946-1.071c0.491-0.714,0.887-1.8,0.887-2.686c0-1.101-0.301-2.064-1.032-2.98c-0.732-0.916-1.678-1.369-2.842-1.369c-1.197,0-2.178,0.486-2.937,1.458C6.033,12.192,5.654,13.329,5.654,14.626c0,2.333,0.591,4.328,1.991,6.1C9.046,22.114,10.946,23,13.346,23c2.394,0,4.437-0.635,6.288-1.743c1.736-1.191,2.726-2.211,2.956-3.071c0.23-0.86-0.061-1.637-0.873-2.312C20.778,15.262,19.915,15,18.9,15c-1.015,0-1.878,0.262-2.29,0.843C15.873,16.363,15.582,17.14,15.812,18C16.042,18.86,17.032,19.88,18.768,21.071C20.404,22.179,22.447,22.814,24.001,22.814v-1c-1.554,0-3.597-0.635-5.233-1.743c-1.736-1.191-2.726-2.211-2.956-3.071c-0.23-0.86,0.061-1.637,0.873-2.312C17.122,14.262,17.985,14,19,14c1.015,0,1.878,0.262,2.29,0.843c0.737,0.675,1.028,1.452,0.798,2.312C21.858,17.789,20.868,18.809,19.132,20C17.496,21.108,15.453,21.743,13.059,21.743c-2.4,0-4.3-0.886-5.7-2.658c-1.4-1.772-1.991-3.767-1.991-6.1c0-1.297,0.379-2.434,1.138-3.406c0.759-0.972,1.74-1.458,2.937-1.458c1.164,0,2.11,0.453,2.842,1.369c0.731,0.916,1.032,1.879,1.032,2.98c0,0.886-0.396,1.972-0.887,2.686c-0.491,0.714-1.14,1.071-1.946,1.071c-0.806,0-1.483-0.273-2.033-0.819c-0.55-0.546-0.825-1.182-0.825-1.909c0-0.914,0.421-2.066,1.264-3.457c0.842-1.391,1.57-2.238,2.185-2.541c0.614-0.303,1.171-0.455,1.67-0.455c0.5,0,0.921,0.152,1.264,0.455c0.342,0.303,0.512,0.637,0.512,1c0,0.364-0.079,0.668-0.236,0.91c-0.158,0.259-0.385,0.364-0.683,0.364c-0.297,0-0.557-0.109-0.78-0.328c-0.223-0.219-0.335-0.483-0.335-0.791c0-0.309,0.112-0.577,0.335-0.801c0.223-0.224,0.483-0.336,0.78-0.336c0.298,0,0.525,0.112,0.683,0.354c0.157,0.242,0.236,0.546,0.236,0.91c0,0.363-0.17,0.697-0.512,1c-0.343,0.303-0.764,0.455-1.264,0.455c-0.499,0-1.056-0.152-1.67-0.455c-0.615-0.303-1.343-1.15-2.185-2.541c-0.843-1.391-1.264-2.543-1.264-3.457c0-0.727,0.275-1.363,0.825-1.909c0.55-0.546,1.227-0.819,2.033-0.819c0.806,0,1.455,0.357,1.946,1.071c0.491,0.714,0.887,1.8,0.887,2.686c0,1.101-0.301,2.064-1.032,2.98c-0.732,0.916-1.678,1.369-2.842,1.369c-1.197,0-2.178-0.486-2.937-1.458c-0.759-0.972-1.138-2.109-1.138-3.406c0-2.333,0.591-4.328,1.991-6.1C10.046,2.886,11.946,2,14.346,2c2.394,0,4.437,0.635,6.288,1.743c1.736,1.191,2.726,2.211,2.956,3.071c0.23,0.86-0.061,1.637-0.873,2.312c-0.412,0.581-1.275,0.843-2.29,0.843c-1.015,0-1.878-0.262-2.29-0.843c-0.737-0.675-1.028-1.452-0.798-2.312c0.23-0.86,1.22-1.88,2.956-3.071C18.404,2.735,20.447,2.1,22.001,2.1v-1c-1.554,0-3.597,0.635-5.233,1.743c-1.736,1.191-2.726,2.211-2.956,3.071c-0.23,0.86,0.061,1.637,0.873,2.312c0.412,0.581,1.275,0.843,2.29,0.843c1.015,0,1.878-0.262,2.29-0.843C20.028,7.551,20.318,6.774,21.582,6.186z" />
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
      
      <!-- Close button inside menu -->
      <button class="close-menu" @click="closeMenu" aria-label="Close menu">
        <span></span>
        <span></span>
      </button>
      
      <!-- Overlay for clicking outside to close -->
      <div class="menu-overlay" @click="closeMenu"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      
      // Toggle body scroll when menu is open
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  },
  beforeUnmount() {
    // Ensure body scroll is restored when component is destroyed
    document.body.style.overflow = '';
  }
}
</script>

<style scoped>
/* Menu Toggle Button */
.menu-toggle {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Side Navigation */
.side-nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  max-width: 90vw;
  background-color: var(--color-primary);
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 1000;
}

.side-nav.open {
  transform: translateX(0);
}

.side-nav-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5rem 3rem;
  color: white;
}

.side-nav-header {
  margin-bottom: 2rem;
}

.side-nav-header h2 {
  margin: 0;
  font-size: 1rem;
  letter-spacing: 2px;
  opacity: 0.7;
}

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
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  position: relative;
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

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

/* Social Links */
.side-nav-footer {
  margin-top: auto;
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

/* Close Button */
.close-menu {
  position: absolute;
  top: 2rem;
  right: 2rem;
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

/* Menu Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 999;
}

.side-nav.open .menu-overlay {
  opacity: 1;
  pointer-events: all;
}

/* Animation delays for staggered appearance */
.side-nav.open .nav-links li:nth-child(1) { --i: 1; }
.side-nav.open .nav-links li:nth-child(2) { --i: 2; }
.side-nav.open .nav-links li:nth-child(3) { --i: 3; }
.side-nav.open .nav-links li:nth-child(4) { --i: 4; }
.side-nav.open .nav-links li:nth-child(5) { --i: 5; }

/* Responsive Styles */
@media (max-width: 768px) {
  .side-nav {
    width: 300px;
  }
  
  .side-nav-content {
    padding: 4rem 2rem;
  }
  
  .nav-links a {
    font-size: 1.75rem;
  }
}
</style>
