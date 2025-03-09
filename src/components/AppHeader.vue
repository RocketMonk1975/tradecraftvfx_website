<template>
  <header class="app-header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo-link">
          <img src="@/assets/images/logo.jpg" alt="TradeVFX Logo" class="logo">
        </router-link>
        
        <nav class="main-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/services" class="nav-link">Services</router-link>
          <router-link to="/work" class="nav-link">Work</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--background-light);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 40px;
  max-width: 140px;
  vertical-align: middle;
}

.main-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .logo {
    height: 30px;
    max-width: 120px;
  }
  
  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
