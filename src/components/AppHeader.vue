<template>
  <header class="site-header" :class="{ 'menu-open': menuOpen }">
    <div class="container">
      <div class="header-inner">
        <router-link to="/" class="logo-link">
          <div class="logo">
            <span class="sr-only">Company Name</span>
            <img src="../assets/images/logo.svg" alt="Company Logo" width="160">
          </div>
        </router-link>
        
        <nav aria-label="Main Navigation" :class="{ 'active': menuOpen }">
          <ul class="main-nav">
            <li><router-link to="/" exact-active-class="current">Home</router-link></li>
            <li><router-link to="/work" active-class="current">Work</router-link></li>
            <li><router-link to="/services" active-class="current">Services</router-link></li>
            <li><router-link to="/about" active-class="current">About</router-link></li>
            <li><router-link to="/news" active-class="current">News</router-link></li>
            <li><button class="contact-button" @click="openContact">Contact</button></li>
          </ul>
        </nav>
        
        <button class="menu-button" @click="toggleMenu" aria-label="Toggle Menu" :aria-expanded="menuOpen">
          <span class="sr-only">Menu</span>
          <div class="line"></div>
          <div class="line"></div>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AppHeader',
  setup() {
    const store = useStore();
    
    const menuOpen = computed(() => store.state.menuOpen);
    
    const toggleMenu = () => {
      store.commit('toggleMenu');
    };
    
    const openContact = () => {
      // Implement contact form functionality
      alert('Contact form will open here');
    };
    
    return {
      menuOpen,
      toggleMenu,
      openContact
    };
  }
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-header);
  background-color: var(--background-light);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: var(--header-height);
  transition: background-color 0.3s;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-md);
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
}

.main-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.main-nav li {
  margin: 0 var(--spacing-md);
}

.main-nav a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  position: relative;
  padding: var(--spacing-xs) 0;
}

.main-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-color);
  transition: width 0.3s;
}

.main-nav a:hover::after,
.main-nav a.current::after {
  width: 100%;
}

.contact-button {
  background-color: var(--accent-color);
  color: var(--light-text);
  border: none;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: var(--accent-color);
  opacity: 0.9;
}

.menu-button {
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

.menu-button .line {
  width: 100%;
  height: 2px;
  background-color: var(--text-color);
  transition: transform 0.3s, opacity 0.3s;
}

@media (max-width: 768px) {
  .menu-button {
    display: flex;
  }
  
  nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-light);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s, opacity 0.3s, visibility 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  nav.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .main-nav {
    flex-direction: column;
  }
  
  .main-nav li {
    margin: var(--spacing-md) 0;
  }
  
  .menu-open .menu-button .line:first-child {
    transform: translateY(11px) rotate(45deg);
  }
  
  .menu-open .menu-button .line:last-child {
    transform: translateY(-11px) rotate(-45deg);
  }
}
</style>