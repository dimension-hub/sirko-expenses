document.addEventListener('DOMContentLoaded', () => {
  const htmlEl    = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const logos     = [
    document.getElementById('site-logo'),
    document.getElementById('nav-logo')
  ];

  function updateLogos(isDark) {
    logos.forEach(img => img.src = isDark ? img.dataset.dark : img.dataset.light);
  }

  // Ініціалізація теми
  let dark = htmlEl.getAttribute('data-theme') === 'dark';
  toggleBtn.textContent = dark ? '☀️' : '🌙';
  updateLogos(dark);

  // Перемикання теми
  toggleBtn.addEventListener('click', () => {
    dark = !dark;
    htmlEl.setAttribute('data-theme', dark ? 'dark' : 'light');
    toggleBtn.textContent = dark ? '☀️' : '🌙';
    updateLogos(dark);
  });

  // Бургер-меню
  burgerBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

  // Reveal-анімації із напрямком
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => io.observe(el));

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js');
  }
});
