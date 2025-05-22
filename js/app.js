document.addEventListener('DOMContentLoaded', () => {
  // 1. Статистика
  document.getElementById('stat-today-bookings').textContent = 8;

  // 2. Перемикання секцій
  const map = {
    'btn-dashboard-nav':  'dashboard',
    'btn-expense-form':   'expense-form',
    'btn-reports':        'reports',
    'btn-client-map':     'client-map',
    'btn-expense-nav':    'expense-form',
    'btn-reports-nav':    'reports',
    'btn-client-map-nav': 'client-map'
  };
  Object.entries(map).forEach(([btnId, secId]) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      Object.values(map).forEach(id => document.getElementById(id).classList.add('hidden'));
      document.getElementById(secId).classList.remove('hidden');
    });
  });

  // 3. BurgerMenu + swipe-to-close
  const burger   = document.getElementById('burger-btn'),
        sidebar  = document.getElementById('sidebar');
  burger.addEventListener('click', () => sidebar.classList.toggle('active'));
  let startX = 0;
  sidebar.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  sidebar.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientX - startX < -50) sidebar.classList.remove('active');
  });

  // 4. Повністю JS-керована хаотична анімація лапок
  if (window.innerWidth <= 768) {
    const zone = document.querySelector('.paw-zone'),
          paws = zone.querySelectorAll('.paw');

    function animatePaw(paw) {
      const w  = zone.clientWidth - paw.clientWidth,
            h  = zone.clientHeight - paw.clientHeight,
            x  = Math.random() * w,
            y  = Math.random() * h,
            r  = (Math.random() * 60) - 30;

      paw.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
      paw.style.opacity   = '1';

      const visibleTime = 1000 + Math.random() * 2000;
      setTimeout(() => {
        paw.style.opacity = '0';
        // з’явиться знову через 500–2500 мс
        setTimeout(() => animatePaw(paw), 500 + Math.random() * 2000);
      }, visibleTime);
    }

    // Запускаємо кожну лапку з різною початковою затримкою
    paws.forEach((paw, i) => {
      setTimeout(() => animatePaw(paw), i * 300 + Math.random() * 500);
    });
  }
});
