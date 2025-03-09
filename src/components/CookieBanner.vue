<template>
  <div class="cookie-banner">
    <div class="container">
      <div class="cookie-content">
        <p>
          This website uses cookies to ensure you get the best experience on our website. 
          <router-link to="/privacy">Learn more</router-link>
        </p>
        <div class="cookie-actions">
          <button class="cookie-accept" @click="acceptCookies">Accept</button>
          <button class="cookie-decline">Decline</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieBanner',
  emits: ['accept'],
  setup(props, { emit }) {
    const acceptCookies = () => {
      emit('accept');
    };
    
    return {
      acceptCookies
    };
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--background-dark);
  color: var(--light-text);
  padding: var(--spacing-md);
  z-index: var(--z-modal);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.cookie-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.cookie-content p {
  margin: 0;
  max-width: 800px;
}

.cookie-content a {
  color: var(--light-text);
  text-decoration: underline;
}

.cookie-actions {
  display: flex;
  gap: var(--spacing-sm);
}

.cookie-accept,
.cookie-decline {
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cookie-accept {
  background-color: var(--accent-color);
  color: var(--light-text);
  border: none;
}

.cookie-decline {
  background-color: transparent;
  color: var(--light-text);
  border: 1px solid var(--light-text);
}

.cookie-accept:hover {
  background-color: var(--primary-color);
}

.cookie-decline:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .cookie-actions {
    width: 100%;
    justify-content: center;
  }
}
</style>