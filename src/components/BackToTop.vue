<template>
  <button 
    class="back-to-top" 
    v-show="showButton" 
    @click="scrollToTop"
    aria-label="Back to top"
  >
    <span class="sr-only">Back to top</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'BackToTop',
  setup() {
    const showButton = ref(false);
    
    const checkScroll = () => {
      showButton.value = window.scrollY > 500;
    };
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    onMounted(() => {
      window.addEventListener('scroll', checkScroll);
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll);
    });
    
    return {
      showButton,
      scrollToTop
    };
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 90;
  transition: transform 0.3s, background-color 0.3s;
}

.back-to-top:hover {
  transform: translateY(-5px);
  background-color: var(--primary-color);
}

.back-to-top svg {
  width: 20px;
  height: 20px;
}
</style>