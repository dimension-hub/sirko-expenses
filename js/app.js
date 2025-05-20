document.addEventListener('DOMContentLoaded', () => {
  const htmlEl    = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const logos     = [
    document.getElementById('site-logo'),
    document.getElementById('nav-logo')
  ];

  // Оновлення src для SVG-логотипів
  function updateLogos(isDark) {
    logos.forEach(img => {
      img.src = isDark ? img.dataset.dark : img.dataset.light;
    });
  }

  // Початкова ініціалізація теми
  let dark = htmlEl.getAttribute('data-theme') === 'dark';
  toggleBtn.textContent = dark ? '☀️' : '🌙';
  updateLogos(dark);

  // Перемикач теми
  toggleBtn.addEventListener('click', () => {
    dark = !dark;
    htmlEl.setAttribute('data-theme', dark ? 'dark' : 'light');
    toggleBtn.textContent = dark ? '☀️' : '🌙';
    updateLogos(dark);
  });

  // Бургер-меню для мобільних
  burgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  // Reveal анімації
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Реєстрація service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js');
  }
});
