<template>
  <div :class="['custom-cursor', { 'is-hover': isHovering }]" ref="cursor"></div>
</template>

<script>
export default {
  name: 'CustomCursor',
  data() {
    return {
      isHovering: false,
      mouseX: 0,
      mouseY: 0,
      cursorX: 0,
      cursorY: 0,
      interactiveSelectors: 'a, button, .btn, .interactive, [data-cursor="pointer"]',
      animationFrame: null
    }
  },
  mounted() {
    // Initialize cursor position
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.cursorX = this.mouseX;
    this.cursorY = this.mouseY;
    
    // Add event listeners
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseenter', this.onMouseEnter);
    document.addEventListener('mouseleave', this.onMouseLeave);
    
    // Add hover detection
    this.addHoverListeners();
    
    // Start animation loop
    this.updateCursorPosition();
    
    // Add body class to hide default cursor
    document.body.classList.add('has-custom-cursor');
  },
  beforeUnmount() {
    // Clean up
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseenter', this.onMouseEnter);
    document.removeEventListener('mouseleave', this.onMouseLeave);
    
    // Remove hover listeners
    this.removeHoverListeners();
    
    // Cancel animation frame
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    
    // Remove body class
    document.body.classList.remove('has-custom-cursor');
  },
  methods: {
    onMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    onMouseEnter() {
      this.$refs.cursor.classList.add('is-visible');
    },
    onMouseLeave() {
      this.$refs.cursor.classList.remove('is-visible');
    },
    updateCursorPosition() {
      // Smooth cursor follow with easing
      this.cursorX += (this.mouseX - this.cursorX) * 0.15;
      this.cursorY += (this.mouseY - this.cursorY) * 0.15;
      
      // Update cursor position
      if (this.$refs.cursor) {
        this.$refs.cursor.style.transform = `translate3d(${this.cursorX}px, ${this.cursorY}px, 0)`;
      }
      
      // Continue animation loop
      this.animationFrame = requestAnimationFrame(this.updateCursorPosition);
    },
    addHoverListeners() {
      // Get all interactive elements
      const elements = document.querySelectorAll(this.interactiveSelectors);
      
      // Add mouse enter/leave listeners to each
      elements.forEach(el => {
        el.addEventListener('mouseenter', this.onElementEnter);
        el.addEventListener('mouseleave', this.onElementLeave);
      });
    },
    removeHoverListeners() {
      // Get all interactive elements
      const elements = document.querySelectorAll(this.interactiveSelectors);
      
      // Remove listeners
      elements.forEach(el => {
        el.removeEventListener('mouseenter', this.onElementEnter);
        el.removeEventListener('mouseleave', this.onElementLeave);
      });
    },
    onElementEnter() {
      this.isHovering = true;
    },
    onElementLeave() {
      this.isHovering = false;
    }
  }
}
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--accent-color, #0052cc);
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transform: translate3d(-50%, -50%, 0);
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
  mix-blend-mode: difference;
  will-change: transform;
}

.custom-cursor.is-visible {
  opacity: 0.6;
}

.custom-cursor.is-hover {
  width: 60px;
  height: 60px;
  background-color: var(--primary-color, #003d99);
  opacity: 0.8;
}

/* Add to global styles */
:global(.has-custom-cursor) {
  cursor: none !important;
}

:global(.has-custom-cursor a),
:global(.has-custom-cursor button),
:global(.has-custom-cursor .btn),
:global(.has-custom-cursor .interactive),
:global(.has-custom-cursor [data-cursor="pointer"]) {
  cursor: none !important;
}

/* Hide custom cursor on mobile/touch devices */
@media (hover: none) and (pointer: coarse) {
  .custom-cursor {
    display: none;
  }
  
  :global(.has-custom-cursor) {
    cursor: auto !important;
  }
  
  :global(.has-custom-cursor a),
  :global(.has-custom-cursor button),
  :global(.has-custom-cursor .btn),
  :global(.has-custom-cursor .interactive),
  :global(.has-custom-cursor [data-cursor="pointer"]) {
    cursor: pointer !important;
  }
}
</style>
