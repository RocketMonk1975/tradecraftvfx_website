<template>
  <div class="reveal-container" ref="revealElement">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ScrollReveal',
  props: {
    direction: {
      type: String,
      default: 'up', // up, down, left, right
      validator: (value) => ['up', 'down', 'left', 'right'].includes(value)
    },
    distance: {
      type: Number,
      default: 50
    },
    delay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 0.8
    },
    once: {
      type: Boolean,
      default: true
    },
    stagger: {
      type: Number,
      default: 0
    },
    threshold: {
      type: Number,
      default: 0.1 // 0-1, percentage of element in view
    }
  },
  setup(props) {
    const revealElement = ref(null);
    
    onMounted(() => {
      // Set initial state
      const element = revealElement.value;
      let children = null;
      
      // Get transform direction
      let fromVars = { opacity: 0 };
      switch(props.direction) {
        case 'up':
          fromVars.y = props.distance;
          break;
        case 'down':
          fromVars.y = -props.distance;
          break;
        case 'left':
          fromVars.x = props.distance;
          break;
        case 'right':
          fromVars.x = -props.distance;
          break;
      }
      
      // Handle stagger animation for children
      if (props.stagger > 0) {
        children = element.children;
        gsap.set(children, fromVars);
        
        ScrollTrigger.create({
          trigger: element,
          start: `top bottom-=${props.threshold * 100}%`,
          onEnter: () => {
            gsap.to(children, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: props.duration,
              delay: props.delay,
              stagger: props.stagger,
              ease: "power2.out",
              overwrite: "auto"
            });
          },
          onLeave: () => {
            if (!props.once) {
              gsap.set(children, fromVars);
            }
          },
          onEnterBack: () => {
            if (!props.once) {
              gsap.to(children, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: props.duration,
                delay: props.delay,
                stagger: props.stagger,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
          },
          onLeaveBack: () => {
            if (!props.once) {
              gsap.set(children, fromVars);
            }
          }
        });
      } else {
        // Simple animation for the container
        gsap.set(element, fromVars);
        
        ScrollTrigger.create({
          trigger: element,
          start: `top bottom-=${props.threshold * 100}%`,
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: props.duration,
              delay: props.delay,
              ease: "power2.out",
              overwrite: "auto"
            });
          },
          onLeave: () => {
            if (!props.once) {
              gsap.set(element, fromVars);
            }
          },
          onEnterBack: () => {
            if (!props.once) {
              gsap.to(element, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: props.duration,
                delay: props.delay,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
          },
          onLeaveBack: () => {
            if (!props.once) {
              gsap.set(element, fromVars);
            }
          }
        });
      }
    });
    
    return {
      revealElement
    };
  }
}
</script>

<style scoped>
.reveal-container {
  will-change: opacity, transform;
}
</style>
