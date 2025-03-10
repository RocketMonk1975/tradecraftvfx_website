<template>
  <button 
    :class="[
      'animated-button', 
      buttonClass, 
      { 'is-loading': loading }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
    :type="type"
  >
    <span class="button-text" v-if="!loading">
      <slot>Button</slot>
    </span>
    <span class="loader" v-else>
      <span class="loader-dot"></span>
      <span class="loader-dot"></span>
      <span class="loader-dot"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'AnimatedButton',
  props: {
    buttonClass: {
      type: String,
      default: 'primary'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>
.animated-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 150px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Primary button */
.primary {
  background-color: var(--color-primary);
  color: white;
}

.primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark, #1a252f);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Secondary button */
.secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.secondary:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.secondary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Text button */
.text {
  background-color: transparent;
  color: var(--color-primary);
  padding: 0.5rem 1rem;
  min-width: auto;
}

.text:hover:not(:disabled) {
  background-color: rgba(44, 62, 80, 0.05);
}

.text:active:not(:disabled) {
  background-color: rgba(44, 62, 80, 0.1);
}

/* Disabled state */
.animated-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Loading state */
.is-loading {
  color: transparent !important;
}

.loader {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
  margin: 0 3px;
  opacity: 0.6;
  animation: dot-pulse 1.4s infinite ease-in-out;
}

.loader-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.loader-dot:nth-child(2) {
  animation-delay: -0.16s;
}

.secondary .loader-dot {
  background-color: var(--color-primary);
}

.is-loading.secondary .loader-dot {
  background-color: white;
}

@keyframes dot-pulse {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
