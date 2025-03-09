<template>
  <nav class="nav-container">
    <!-- Desktop Navigation -->
    <ul class="desktop-nav">
      <li v-for="item in menuItems" :key="item.path">
        <router-link 
          :to="item.path" 
          :class="{ 'active': isActive(item.path) }"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    
    <!-- Mobile Navigation Trigger -->
    <div class="mobile-trigger" @click="toggleMobileMenu" :class="{ 'active': mobileMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div class="mobile-menu" v-if="mobileMenuOpen">
        <ul>
          <li v-for="item in menuItems" :key="item.path">
            <router-link 
              :to="item.path" 
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'NavMenu',
  data() {
    return {
      mobileMenuOpen: false,
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      document.body.classList.toggle('no-scroll', this.mobileMenuOpen);
      
      // Animate menu items when opening
      if (this.mobileMenuOpen) {
        this.$nextTick(() => {
          const menuItems = document.querySelectorAll('.mobile-menu ul li');
          gsap.fromTo(
            menuItems, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, stagger: 0.1, delay: 0.2 }
          );
        });
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.classList.remove('no-scroll');
    },
    handleMouseOver(e) {
      gsap.to(e.target, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    },
    handleMouseLeave(e) {
      gsap.to(e.target, { scale: 1, duration: 0.3, ease: "power2.out" });
    },
    isActive(path) {
      return this.$route.path === path;
    }
  }
}
</script>

<style scoped>
.nav-container {
  position: relative;
  display: flex;
  align-items: center;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.desktop-nav li {
  margin: 0 var(--spacing-md);
}

.desktop-nav a {
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-secondary);
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.desktop-nav a:hover,
.desktop-nav a.active {
  color: var(--color-primary);
}

.desktop-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.desktop-nav a:hover::after,
.desktop-nav a.active::after {
  width: 100%;
}

/* Mobile Menu Trigger */
.mobile-trigger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  cursor: pointer;
  z-index: 100;
}

.mobile-trigger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  transition: all 0.3s ease;
}

.mobile-trigger.active span:first-child {
  transform: translateY(10px) rotate(45deg);
}

.mobile-trigger.active span:nth-child(2) {
  opacity: 0;
}

.mobile-trigger.active span:last-child {
  transform: translateY(-10px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 99;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.mobile-menu li {
  margin: var(--spacing-md) 0;
}

.mobile-menu a {
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-primary);
  display: block;
  padding: var(--spacing-xs) 0;
}

/* Mobile Menu Animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-trigger {
    display: flex;
  }
}
</style>
