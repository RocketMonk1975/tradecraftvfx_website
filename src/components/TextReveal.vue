<template>
  <div class="text-reveal-wrapper" :class="{ 'is-animated': isAnimated }">
    <div class="text-reveal-word" v-for="(word, index) in words" :key="index" 
         :style="{ 'animation-delay': index * 0.15 + 's' }">
      <span>{{ word }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextReveal',
  props: {
    text: { type: String, required: true }
  },
  data() {
    return {
      isAnimated: false,
      observer: null
    }
  },
  computed: {
    words() {
      return this.text.split(/\s+/);
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.isAnimated = true;
        this.observer.disconnect();
      }
    });
    this.observer.observe(this.$el);
  },
  unmounted() {
    if (this.observer) this.observer.disconnect();
  }
}
</script>

<style scoped>
.text-reveal-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.text-reveal-word {
  margin-right: 0.3em;
  overflow: hidden;
  opacity: 0;
  transform: translateY(40px);
}
.is-animated .text-reveal-word {
  animation: reveal 0.8s forwards;
}
@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
