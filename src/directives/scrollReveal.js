// ScrollReveal directive - reveals elements when they enter the viewport

export default {
  // Called when the bound element is inserted into the DOM
  mounted(el, binding) {
    // Default options
    const options = {
      threshold: 0.15, // 15% of the element must be visible
      once: true,     // Only trigger once
      delay: 0,       // No delay
      ...binding.value || {}
    };
    
    // Create the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add delay if specified
          setTimeout(() => {
            // Add the reveal class to trigger animation
            el.classList.add('is-revealed');
            
            // Unobserve if once is true
            if (options.once) {
              observer.unobserve(el);
            }
          }, options.delay);
        } else if (!options.once) {
          // Remove the class if not "once"
          el.classList.remove('is-revealed');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: options.threshold
    });
    
    // Add initial class and store observer
    el.classList.add('reveal-element');
    el._scrollRevealObserver = observer;
    
    // Start observing
    observer.observe(el);
  },
  
  // Clean up when the element is removed
  unmounted(el) {
    if (el._scrollRevealObserver) {
      el._scrollRevealObserver.disconnect();
    }
  }
};
