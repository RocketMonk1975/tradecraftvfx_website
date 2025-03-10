<template>
  <Transition name="fade">
    <div v-if="isActive" class="loading-screen">
      <div class="loading-content">
        <div class="logo-container">
          <svg class="logo" width="150" height="40" viewBox="0 0 150 40">
            <path d="M10 8H30V12H10V8Z" fill="currentColor"/>
            <path d="M15 16H40V20H15V16Z" fill="currentColor"/>
            <path d="M20 24H35V28H20V24Z" fill="currentColor"/>
            <path d="M10 32H25V36H10V32Z" fill="currentColor"/>
            <path d="M58.344 29V11.8H61.464L69.864 23.296H68.424L76.776 11.8H79.896L79.944 29H76.584L76.536 16.376H77.208L69.864 26.536H68.328L60.984 16.376H61.704V29H58.344ZM92.6539 29.288C90.9579 29.288 89.4779 28.904 88.2139 28.136C86.9499 27.368 85.9739 26.296 85.2859 24.92C84.5979 23.544 84.2539 21.968 84.2539 20.192C84.2539 18.416 84.5979 16.84 85.2859 15.464C85.9739 14.088 86.9499 13.016 88.2139 12.248C89.4779 11.48 90.9579 11.096 92.6539 11.096C94.3499 11.096 95.8299 11.48 97.0939 12.248C98.3579 13.016 99.3339 14.088 100.022 15.464C100.71 16.84 101.054 18.416 101.054 20.192C101.054 21.968 100.71 23.544 100.022 24.92C99.3339 26.296 98.3579 27.368 97.0939 28.136C95.8299 28.904 94.3499 29.288 92.6539 29.288Z" fill="currentColor"/>
          </svg>
        </div>
        
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
          </div>
          <div class="progress-label" aria-live="polite">{{ Math.round(progress) }}%</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';

export default {
  name: 'LoadingScreen',
  props: {
    minDuration: {
      type: Number,
      default: 1200 // Minimum time to show loader (ms)
    },
    fadeOutDuration: {
      type: Number,
      default: 600 // Time to fade out loader (ms)
    }
  },
  emits: ['loading-complete'],
  setup(props, { emit }) {
    const isActive = ref(true);
    const progress = ref(0);
    const startTime = ref(Date.now());
    const resourcesLoaded = ref(false);
    
    // Track if all resources loaded
    const checkResourcesLoaded = () => {
      if (document.readyState === 'complete') {
        resourcesLoaded.value = true;
        checkCompletion();
      }
    };
    
    // Animate progress
    const animateProgress = () => {
      // Calculate elapsed time as percentage of minDuration
      const elapsedTime = Date.now() - startTime.value;
      const baseProgress = Math.min(100, (elapsedTime / props.minDuration) * 100);
      
      // If resources are loaded, accelerate to 100%
      if (resourcesLoaded.value) {
        // Accelerate to 100%
        progress.value += (100 - progress.value) * 0.1;
        if (progress.value >= 99.5) {
          progress.value = 100;
          checkCompletion();
          return;
        }
      } else {
        // Cap progress at 80% until resources are loaded
        const targetProgress = Math.min(80, baseProgress);
        progress.value += (targetProgress - progress.value) * 0.1;
      }
      
      requestAnimationFrame(animateProgress);
    };
    
    // Check if loading is complete
    const checkCompletion = () => {
      const elapsedTime = Date.now() - startTime.value;
      
      // Only complete if minimum time has elapsed AND progress is 100%
      if (elapsedTime >= props.minDuration && progress.value >= 100) {
        completeLoading();
      } else if (elapsedTime >= props.minDuration && resourcesLoaded.value) {
        // If min time elapsed but progress not 100%, force to 100%
        progress.value = 100;
        requestAnimationFrame(checkCompletion);
      }
    };
    
    // Complete loading and emit event
    const completeLoading = () => {
      setTimeout(() => {
        isActive.value = false;
        setTimeout(() => {
          emit('loading-complete');
        }, props.fadeOutDuration);
      }, 300); // Small delay after reaching 100%
    };
    
    onMounted(() => {
      // Start progress animation
      requestAnimationFrame(animateProgress);
      
      // Add event listener for resource loading
      window.addEventListener('load', checkResourcesLoaded);
      
      // Also check in case event already fired
      checkResourcesLoaded();
    });
    
    onUnmounted(() => {
      window.removeEventListener('load', checkResourcesLoaded);
    });
    
    return {
      isActive,
      progress
    };
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
  background-color: var(--color-primary, #2c3e50);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  flex-direction: column;
}

.loading-content {
  width: 80%;
  max-width: 400px;
}

.logo-container {
  text-align: center;
  margin-bottom: 40px;
  animation: pulse 2s ease-in-out infinite;
}

.logo {
  width: 150px;
  height: auto;
  color: white;
}

.progress-container {
  width: 100%;
}

.progress-bar {
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background-color: white;
  transition: width 0.3s ease;
  position: relative;
}

.progress-label {
  font-size: 0.875rem;
  text-align: right;
  opacity: 0.8;
  font-family: var(--font-heading, 'Montserrat', sans-serif);
}

/* Fade animation for loading screen */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}
</style>
