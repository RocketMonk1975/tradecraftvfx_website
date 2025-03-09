<template>
  <div class="page-transition-wrapper">
    <transition 
      name="page" 
      mode="out-in"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @after-leave="afterLeave">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PageTransition',
  methods: {
    beforeEnter(el) {
      document.body.classList.add('is-page-transitioning', 'is-page-entering');
    },
    afterEnter(el) {
      document.body.classList.remove('is-page-transitioning', 'is-page-entering');
    },
    beforeLeave(el) {
      document.body.classList.add('is-page-transitioning', 'is-page-leaving');
    },
    afterLeave(el) {
      document.body.classList.remove('is-page-transitioning', 'is-page-leaving');
    }
  }
}
</script>

<style>
/* Page transition styles */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Body classes for global transition effects */
body.is-page-transitioning {
  cursor: wait;
  pointer-events: none;
}

/* Prevent scrolling during transitions */
body.is-page-transitioning {
  overflow: hidden;
}
</style>
