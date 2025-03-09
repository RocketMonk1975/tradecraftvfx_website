<template>
  <div 
    class="hover-image" 
    :class="{ 'hover-active': isHovered }"
    @mouseenter="isHovered = true" 
    @mouseleave="isHovered = false"
  >
    <div class="hover-image-container">
      <img :src="src" :alt="alt" class="hover-image-img">
      <div class="hover-image-overlay">
        <div class="hover-image-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isHovered: false
    }
  }
}
</script>

<style scoped>
.hover-image {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  height: 100%;
}

.hover-image-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.hover-image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.hover-image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  height: 100%;
  width: 100%;
  opacity: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: var(--spacing-md);
  transition: opacity var(--transition-speed);
}

.hover-image-content {
  color: white;
  text-align: center;
  transform: translateY(20px);
  transition: transform var(--transition-speed);
}

.hover-active .hover-image-img {
  transform: scale(1.05);
}

.hover-active .hover-image-overlay {
  opacity: 1;
}

.hover-active .hover-image-content {
  transform: translateY(0);
}
</style>
