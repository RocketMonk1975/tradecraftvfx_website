<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h2 class="footer-logo">TradeVFX</h2>
          <p>Creating digital experiences that inspire.</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-nav">
            <h4>Quick Links</h4>
            <router-link to="/" class="footer-link">Home</router-link>
            <router-link to="/about" class="footer-link">About</router-link>
            <router-link to="/work" class="footer-link">Work</router-link>
            <router-link to="/contact" class="footer-link">Contact</router-link>
          </div>
          
          <div class="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: info@tradevfx.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ new Date().getFullYear() }} TradeVFX. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  background-color: var(--background-dark);
  color: var(--light-text);
  padding: var(--spacing-2xl) 0 var(--spacing-md);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: var(--spacing-xl);
}

.footer-brand {
  max-width: 300px;
  margin-bottom: var(--spacing-lg);
}

.footer-logo {
  font-family: var(--font-heading);
  margin-bottom: var(--spacing-sm);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2xl);
}

.footer-nav, .footer-contact {
  min-width: 180px;
}

h4 {
  margin-bottom: var(--spacing-md);
  font-weight: 500;
}

.footer-link {
  display: block;
  margin-bottom: var(--spacing-xs);
  color: var(--light-text);
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 1;
  color: var(--light-text);
}

.footer-contact p {
  margin-bottom: var(--spacing-xs);
  opacity: 0.8;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: var(--spacing-md);
  text-align: center;
}

.copyright {
  font-size: var(--font-size-sm);
  opacity: 0.6;
}
</style>
