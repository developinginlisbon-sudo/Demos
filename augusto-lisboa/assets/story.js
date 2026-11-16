/* One calm, staggered build per composition. Native scrolling stays untouched. */
(() => {
  const scenes = [...document.querySelectorAll('.story')];
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || preference.matches) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      target.classList.add('is-built');
      observer.unobserve(target);
    });
  }, { threshold: .12 });
  scenes.forEach(scene => { scene.classList.add('motion-ready'); observer.observe(scene); });
  preference.addEventListener('change', event => {
    if (event.matches) { observer.disconnect(); scenes.forEach(scene => scene.classList.add('is-built')); }
  });
})();
