<template>
  <div class="loader-overlay">
    <div class="loader">
      <div class="loader-circle"></div>
      <div class="loader-circle"></div>
      <div class="loader-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-light);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--z-loader);
}

.loader {
  display: flex;
  align-items: center;
}

.loader-circle {
  width: 12px;
  height: 12px;
  margin: 0 6px;
  border-radius: 50%;
  background-color: var(--accent-color);
  animation: loader 0.8s ease-in-out infinite alternate;
}

.loader-circle:nth-child(1) {
  animation-delay: -0.4s;
}

.loader-circle:nth-child(2) {
  animation-delay: -0.2s;
}

.loader-circle:nth-child(3) {
  animation-delay: 0s;
}

@keyframes loader {
  from {
    transform: scale(0.5);
    opacity: 0.5;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>