document.addEventListener('DOMContentLoaded', () => {
  const htmlEl    = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const logos     = [
    document.getElementById('site-logo'),
    document.getElementById('nav-logo')
  ];

  // Обновити <img> для логотипів
  function updateLogos(isDark) {
    logos.forEach(img => img.src = isDark ? img.dataset.dark : img.dataset.light);
  }

  // Стартова тема
  let dark = htmlEl.getAttribute('data-theme') === 'dark';
  toggleBtn.textContent = dark ? '☀️' : '🌙';
  updateLogos(dark);

  // Перемикання теми
  toggleBtn.addEventListener('click', () => {
    dark = !dark;
    htmlEl.setAttribute('data-theme', dark ? 'dark' : 'light');
    toggleBtn.textContent = dark ? '☀️' : '🌙';
    updateLogos(dark);
    // перезавантажити Lottie із правильною анімацією
    dogAnim.destroy();
    initDogRun(dark);
  });

  // Бургер-меню
  burgerBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

  // Reveal-анімації
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.classList.add('is-visible'); obs.unobserve(target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Ініціалізація Lottie «dog-run»
  let dogAnim;
  function initDogRun(isDark) {
    dogAnim = lottie.loadAnimation({
      container: document.getElementById('dog-run'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: isDark
        ? 'animations/dog-run-dark.json'
        : 'animations/dog-run-light.json'
    });
    dogAnim.addEventListener('DOMLoaded', () => {
      const el = document.getElementById('dog-run');
      el.animate([
        { transform: 'translate(-120%, -50%)' },
        { transform: 'translate(120%, -50%)' }
      ], {
        duration: 10 * 1000,
        iterations: Infinity,
        easing: 'linear'
      });
    });
  }
  initDogRun(dark);

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js');
  }
});
