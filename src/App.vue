<template>
  <div class="app">
    <header class="header">    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">TradeVFX</router-link>
        </div>
        <NavMenu />
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
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            TradeVFX
          </div>
          <div class="footer-links">
            <ul>
              <li><router-link to="/privacy">Privacy Policy</router-link></li>
              <li><router-link to="/terms">Terms of Service</router-link></li>
            </ul>
          </div>
          <div class="footer-social">
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">LinkedIn</a>
          </div>
        </div>
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} TradeVFX. All rights reserved.
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
      basePath: '/tradecraftvfx_website/',
      mobileMenuOpen: false
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
    }
  }
}
</script>

<style>
/* Import base styles */
@import './assets/styles/base.css';
@import './assets/styles/animations.css';

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap');

/* App Layout */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  margin-right: var(--spacing-xl);
}

.logo a {
  color: var(--color-primary);
  text-decoration: none;
  transition: opacity 0.3s ease;
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
  color: var(--color-primary);
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
  padding: var(--spacing-xl) 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
}

.footer-logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: var(--spacing-xs);
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
}

.footer-links a:hover {
  color: white;
}

.footer-social {
  display: flex;
}

.social-link {
  margin-left: var(--spacing-md);
  color: rgba(255, 255, 255, 0.8);
}

.social-link:hover {
  color: white;
}

.copyright {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
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
</style>




