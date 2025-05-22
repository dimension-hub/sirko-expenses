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

  // 3. Burger Menu + swipe-to-close
  const burger = document.getElementById('burger-btn'),
        sidebar = document.getElementById('sidebar');
  burger.addEventListener('click', () => sidebar.classList.toggle('active'));
  let startX = 0;
  sidebar.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  sidebar.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientX - startX < -50) sidebar.classList.remove('active');
  });

  // 4. Анімація лапок (повторні виклики хаотично)
  if (window.innerWidth <= 768) {
    const zone = document.querySelector('.paw-zone'),
          paws = zone.querySelectorAll('.paw');
    function dropLoop(paw) {
      // обчислюємо позицію та ротацію
      const w  = zone.clientWidth - paw.clientWidth,
            h  = zone.clientHeight - paw.clientHeight,
            x  = Math.random()*w,
            y  = Math.random()*h,
            r  = (Math.random()*60)-30,
            x2 = Math.random()*w,
            y2 = Math.random()*h,
            r2 = (Math.random()*60)-30;
      paw.style.setProperty('--x', `${x}px`);
      paw.style.setProperty('--y', `${y}px`);
      paw.style.setProperty('--r', `${r}`);
      paw.style.setProperty('--x2', `${x2}px`);
      paw.style.setProperty('--y2', `${y2}px`);
      paw.style.setProperty('--r2', `${r2}`);
      // перезапуск анімації
      paw.style.opacity = '';
      void paw.offsetWidth;
      paw.style.opacity = '';
      // наступний виклик через 2–5 секунд
      setTimeout(() => dropLoop(paw), 2000 + Math.random()*3000);
    }
    // старт із випадковим офсетом
    paws.forEach((paw, i) => {
      setTimeout(() => dropLoop(paw), Math.random()*1000 + i*500);
    });
  }
});
