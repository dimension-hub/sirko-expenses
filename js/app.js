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
    logos.forEach(obj => {
      // якщо це <object>, змінюємо його data
      obj.data = isDark ? obj.dataset.dark : obj.dataset.light;
    });
  }

  // Початкове налаштування теми
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

  // Бургер-меню
  burgerBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  }));

  // Reveal-анімація
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js');
  }
});
