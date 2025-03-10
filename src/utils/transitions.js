// Page transition settings
export const pageTransition = {
  name: 'page',
  mode: 'out-in',
  onBeforeEnter(el) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
  },
  onEnter(el, done) {
    setTimeout(() => {
      el.style.transition = 'all 0.5s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      done();
    }, 50);
  },
  onLeave(el, done) {
    el.style.transition = 'all 0.5s ease';
    el.style.opacity = 0;
    el.style.transform = 'translateY(-20px)';
    setTimeout(done, 500);
  }
};
