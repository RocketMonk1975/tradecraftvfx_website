<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-logo">
          <img v-if="logo" :src="logo" alt="Logo" />
          <span v-else>TRADECRAFT</span>
        </div>
        <div class="loading-bar">
          <div class="loading-progress" :style="{ width: `${progress}%` }"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    logo: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2000
    },
    minDisplayTime: {
      type: Number,
      default: 1500
    }
  },
  data() {
    return {
      isLoading: true,
      progress: 0,
      startTime: 0,
      interval: null
    }
  },
  mounted() {
    this.startTime = Date.now();
    this.interval = setInterval(this.updateProgress, 10);
    
    // Check page load status
    if (document.readyState === 'complete') {
      this.finishLoading();
    } else {
      window.addEventListener('load', this.finishLoading);
    }
  },
  beforeUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('load', this.finishLoading);
  },
  methods: {
    updateProgress() {
      const elapsed = Date.now() - this.startTime;
      const percent = Math.min(100, (elapsed / this.duration) * 100);
      this.progress = percent;
    },
    finishLoading() {
      const elapsed = Date.now() - this.startTime;
      const remaining = this.minDisplayTime - elapsed;
      
      if (remaining > 0) {
        setTimeout(() => {
          clearInterval(this.interval);
          this.progress = 100;
          setTimeout(() => {
            this.isLoading = false;
            this.$emit('loading-complete');
          }, 300);
        }, remaining);
      } else {
        clearInterval(this.interval);
        this.progress = 100;
        setTimeout(() => {
          this.isLoading = false;
          this.$emit('loading-complete');
        }, 300);
      }
      
      window.removeEventListener('load', this.finishLoading);
    }
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-dark, #0f0f0f);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  width: 80%;
  max-width: 300px;
  text-align: center;
}

.loading-logo {
  margin-bottom: 30px;
}

.loading-logo img {
  max-width: 150px;
  height: auto;
}

.loading-logo span {
  font-family: var(--font-heading, 'Oswald', sans-serif);
  font-size: 2rem;
  font-weight: 600;
  color: white;
  letter-spacing: 4px;
}

.loading-bar {
  width: 100%;
  height: 2px;
  background: rgba(255,255,255,0.2);
}

.loading-progress {
  height: 100%;
  background-color: white;
  transition: width 0.1s ease;
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
