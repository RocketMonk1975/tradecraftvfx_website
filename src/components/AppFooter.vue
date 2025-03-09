<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-logo">
          <router-link to="/">
            <img src="../assets/images/logo.svg" alt="Company Logo" width="120">
          </router-link>
          <p class="tagline">Creating exceptional digital experiences</p>
        </div>
        
        <nav class="footer-nav">
          <div class="footer-nav-column">
            <h3>Company</h3>
            <ul>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/careers">Careers</router-link></li>
              <li><router-link to="/news">News</router-link></li>
            </ul>
          </div>
          
          <div class="footer-nav-column">
            <h3>Services</h3>
            <ul>
              <li><router-link to="/services">All Services</router-link></li>
              <li><router-link to="/services/design">Design</router-link></li>
              <li><router-link to="/services/development">Development</router-link></li>
              <li><router-link to="/services/strategy">Strategy</router-link></li>
            </ul>
          </div>
          
          <div class="footer-nav-column">
            <h3>Contact</h3>
            <address>
              <p>123 Business Street<br>City, State 12345</p>
              <p><a href="mailto:info@company.com">info@company.com</a></p>
              <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </address>
          </div>
        </nav>
      </div>
      
      <div class="footer-bottom">
        <div class="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
            <span class="sr-only">Twitter</span>
            <!-- Twitter Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8.29 20.25H5.1c-.8 0-1.1-.3-1.1-1.1V4.8c0-.8.3-1.1 1.1-1.1h13.8c.8 0 1.1.3 1.1 1.1v14.35c0 .8-.3 1.1-1.1 1.1h-3.19l-3.71-3.7-3.71 3.7z"></path></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
            <span class="sr-only">LinkedIn</span>
            <!-- LinkedIn Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H6.5v-7H9v7zM7.7 8.7c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.6 1.4-1.4 1.4zM18 17h-2.5v-3.8c0-2.2-2.5-2-2.5 0V17h-2.5v-7h2.5v1.5c1.1-2 5-2.1 5 1.9V17z"></path></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <span class="sr-only">Instagram</span>
            <!-- Instagram Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.901 4.901 0 0 0-1.772 1.153 4.902 4.902 0 0 0-1.153 1.772c-.247.636-.416 1.363-.465 2.427-.048 1.067-.06 1.407-.06 4.123s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772 4.901 4.901 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.901 4.901 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.772 4.901 4.901 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.975.045 1.504.207 1.857.344.466.181.8.398 1.15.748.35.35.567.684.748 1.15.137.353.3.882.344 1.857.048 1.054.058 1.37.058 4.04 0 2.67-.01 2.986-.058 4.04-.045.975-.207 1.504-.344 1.857-.181.466-.398.8-.748 1.15-.35.35-.684.567-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058-2.67 0-2.986-.01-4.04-.058-.975-.045-1.504-.207-1.857-.344-.466-.181-.8-.398-1.15-.748-.35-.35-.567-.684-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.054-.058-1.37-.058-4.04 0-2.67.01-2.986.058-4.04.045-.975.207-1.504.344-1.857.181-.466.398-.8.748-1.15.35-.35.684-.567 1.15-.748.353-.137.882-.3 1.857-.344C9.014 3.812 9.33 3.802 12 3.802zm0 3.065a5.133 5.133 0 1 0 0 10.266 5.133 5.133 0 0 0 0-10.266zm0 8.466a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>
          </a>
        </div>
        
        <div class="copyright">
          <p>&copy; {{ currentYear }} Company Name. All rights reserved.</p>
          <div class="legal-links">
            <router-link to="/privacy">Privacy Policy</router-link>
            <router-link to="/terms">Terms of Service</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = computed(() => new Date().getFullYear());
    
    return {
      currentYear
    };
  }
}
</script>

<style scoped>
.site-footer {
  background-color: var(--background-dark);
  color: var(--light-text);
  padding: var(--spacing-2xl) 0 var(--spacing-xl);
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: var(--spacing-xl);
}

.footer-logo {
  flex: 1 1 300px;
  margin-bottom: var(--spacing-lg);
}

.footer-logo img {
  margin-bottom: var(--spacing-md);
}

.tagline {
  font-size: var(--font-size-md);
  opacity: 0.8;
}

.footer-nav {
  flex: 2 1 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.footer-nav-column {
  flex: 1 1 200px;
  margin-bottom: var(--spacing-lg);
}

.footer-nav-column h3 {
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-lg);
  font-weight: 500;
}

.footer-nav-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav-column li {
  margin-bottom: var(--spacing-sm);
}

.footer-nav-column a {
  color: var(--light-text);
  opacity: 0.8;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-nav-column a:hover {
  opacity: 1;
}

address {
  font-style: normal;
  font-size: var(--font-size-base);
  line-height: 1.6;
}

address p {
  margin-bottom: var(--spacing-sm);
}

address a {
  color: var(--light-text);
  opacity: 0.8;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

address a:hover {
  opacity: 1;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.social-links a {
  color: var(--light-text);
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.social-links a:hover {
  opacity: 1;
}

.copyright {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--font-size-sm);
  opacity: 0.8;
}

.legal-links {
  display: flex;
  gap: var(--spacing-md);
}

.legal-links a {
  color: var(--light-text);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.legal-links a:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-top,
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer-nav {
    flex-direction: column;
  }
  
  .social-links {
    margin-bottom: var(--spacing-md);
  }
  
  .copyright {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>