<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-left">
          <p>&copy; {{ currentYear }} TradeCraft VFX. All rights reserved.</p>
        </div>
        <div class="footer-right">
          <ul class="footer-links">
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms of Service</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.app-footer {
  padding: 2rem 0;
  background-color: var(--color-light-bg);
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-left: 1.5rem;
}

.footer-links a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .footer-links li:first-child {
    margin-left: 0;
  }
}
</style>
