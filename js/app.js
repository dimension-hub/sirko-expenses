document.addEventListener('DOMContentLoaded', () => {
  const htmlEl    = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const logos     = [
    document.getElementById('site-logo'),
    document.getElementById('nav-logo')
  ];

  // Підміна src логотипів
  function updateLogos() {
    const dark = htmlEl.getAttribute('data-theme') === 'dark';
    logos.forEach(img => {
      img.src = dark ? img.dataset.dark : img.dataset.light;
    });
    toggleBtn.textContent = dark ? '☀️' : '🌙';
  }

  // Ініціалізація
  updateLogos();

  // Перемикання теми
  toggleBtn.addEventListener('click', () => {
    const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    updateLogos();
  });

  // Бургер-меню
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

  document.querySelectorAll('.reveal, .footer').forEach(el => io.observe(el));

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js');
  }
});
