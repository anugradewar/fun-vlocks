/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./src/number-counter/view.js ***!
  \************************************/
const numberCounter = document.querySelectorAll('.number-counter__number');
numberCounter.forEach(element => {
  const start = Number(element.dataset.start);
  const end = Number(element.dataset.end);
  const duration = Number(element.dataset.duration);
  let startTime = null;
  function startAnimation() {
    function animate(time) {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(start + (end - start) * progress);
      element.textContent = value;
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  }
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      startAnimation();
      observer.disconnect;
    }
  });
  observer.observe(element);
});
/******/ })()
;
//# sourceMappingURL=view.js.map