document.addEventListener('DOMContentLoaded', () => {
  const htmlEl    = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const logos     = [
    document.getElementById('site-logo'),
    document.getElementById('nav-logo')
  ];

  // Ініціалізація теми та логотипів
  let dark = htmlEl.getAttribute('data-theme') === 'dark';
  function updateLogos() {
    logos.forEach(img => img.src = dark ? img.dataset.dark : img.dataset.light);
    toggleBtn.textContent = dark ? '☀️' : '🌙';
  }
  updateLogos();

  toggleBtn.addEventListener('click', () => {
    dark = !dark;
    htmlEl.setAttribute('data-theme', dark ? 'dark' : 'light');
    updateLogos();
  });

  // Бургер-меню (тільки мобільне)
  burgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileNav.classList.remove('open'))
  );

  // Reveal-анімації
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal-left, .reveal-right, .footer').forEach(el => io.observe(el));

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js');
  }
});
