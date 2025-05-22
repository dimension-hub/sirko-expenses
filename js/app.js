document.addEventListener('DOMContentLoaded', () => {
  // 1. Today’s bookings
  document.getElementById('today-bookings').textContent = 8;

  // 2. Toggle секцій (header + mobile-nav)
  const sections = {
    'btn-expense-form':      'expense-form',
    'btn-reports':           'reports',
    'btn-client-map':        'client-map',
    'btn-expense-nav':       'expense-form',
    'btn-reports-nav':       'reports',
    'btn-client-map-nav':    'client-map'
  };
  Object.entries(sections).forEach(([btnId, secId]) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      Object.values(sections).forEach(id =>
        document.getElementById(id).classList.add('hidden')
      );
      document.getElementById(secId).classList.remove('hidden');
    });
  });

  // 3. Burger-Menu + swipe-to-close
  const burgerBtn = document.getElementById('burger-btn'),
        sidebar   = document.getElementById('sidebar');
  burgerBtn.addEventListener('click', () => sidebar.classList.toggle('active'));
  let startX = 0;
  sidebar.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  sidebar.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientX - startX < -50) {
      sidebar.classList.remove('active');
    }
  });

  // 4. Paw prints in .paw-zone
  if (window.innerWidth <= 768) {
    const zone = document.querySelector('.paw-zone');
    const paws = zone.querySelectorAll('.paw');

    function dropPaw(paw) {
      const w = zone.clientWidth - paw.clientWidth;
      const h = zone.clientHeight - paw.clientHeight;
      const x  = Math.random() * w;
      const y  = Math.random() * h;
      const r  = (Math.random()*60) - 30;
      const x2 = Math.random() * w;
      const y2 = Math.random() * h;
      const r2 = (Math.random()*60) - 30;
      // встановлюємо CSS-змінні для keyframes
      paw.style.setProperty('--x', `${x}px`);
      paw.style.setProperty('--y', `${y}px`);
      paw.style.setProperty('--r', `${r}`);
      paw.style.setProperty('--x2', `${x2}px`);
      paw.style.setProperty('--y2', `${y2}px`);
      paw.style.setProperty('--r2', `${r2}`);

      // перезапускаємо анімацію
      paw.style.opacity = '';
      void paw.offsetWidth;
      paw.style.opacity = '';
    }

    // запускаємо з затримкою
    paws.forEach((paw, i) => {
      setTimeout(() => dropPaw(paw), i * 800);
      setInterval(() => dropPaw(paw), 5000);
    });
  }
});
