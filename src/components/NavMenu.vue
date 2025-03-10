<template>
  <nav class="nav-menu">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/work">Our Work</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <div class="menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style scoped>
.nav-menu ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin-left: 2rem;
}

.nav-menu a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-menu a:hover, 
.nav-menu a.router-link-active {
  color: var(--color-primary);
}

.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .nav-menu ul {
    display: none;
  }
  
  .menu-toggle {
    display: block;
    width: 30px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }
  
  .menu-toggle span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--color-primary);
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  .menu-toggle span:nth-child(1) { top: 0px; }
  .menu-toggle span:nth-child(2) { top: 10px; }
  .menu-toggle span:nth-child(3) { top: 20px; }
}
</style>
