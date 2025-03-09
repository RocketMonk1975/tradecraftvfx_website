<template>
  <header class="app-header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo-link">
          <h1 class="logo">TradeVFX</h1>
        </router-link>
        
        <nav class="main-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
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
  height: var(--header-height);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
}

.logo-link {
  text-decoration: none;
}

.logo {
  font-family: var(--font-heading);
  color: var(--primary-color);
  font-size: var(--font-size-xl);
  margin: 0;
}

.main-nav {
  display: flex;
  gap: var(--spacing-md);
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.nav-link:hover, .router-link-active {
  color: var(--accent-color);
}
</style>
