<template>
  <div 
    class="hover-image-container"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    
    <img 
      :src="src" 
      :alt="alt" 
      class="hover-image"
      :class="{ 'is-hovered': isHovered }"
      ref="image">
    
    <div class="overlay">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverImage',
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: '' },
    intensity: { type: Number, default: 10 }
  },
  data() {
    return {
      isHovered: false,
      mouseX: 0,
      mouseY: 0
    }
  },
  methods: {
    handleMouseMove(e) {
      // Get position relative to the container
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate percentage position
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      
      // Calculate the transform values
      const moveX = ((xPercent - 50) / 100) * this.intensity;
      const moveY = ((yPercent - 50) / 100) * this.intensity;
      
      // Apply transform to the image
      if (this.$refs.image) {
        this.$refs.image.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
      }
    },
    handleMouseEnter() {
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
      if (this.$refs.image) {
        this.$refs.image.style.transform = 'scale(1) translate(0, 0)';
      }
    }
  }
}
</script>

<style scoped>
.hover-image-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
}

.hover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.hover-image.is-hovered {
  transform: scale(1.1);
  filter: brightness(0.8);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  z-index: 2;
}

.hover-image-container:hover .overlay {
  opacity: 1;
  transform: translateY(0);
}
</style>
