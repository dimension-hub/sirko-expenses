document.addEventListener('DOMContentLoaded', () => {
  // Сьогоднішні записи (інтеграція Google Calendar API тут)
  const todayEl = document.getElementById('today-bookings');
  todayEl.textContent = 8;

  // Перемикання секцій
  const sections = {
    'btn-expense-form': 'expense-form',
    'btn-reports':      'reports',
    'btn-client-map':   'client-map'
  };
  Object.entries(sections).forEach(([btnId, secId]) => {
    document.getElementById(btnId).addEventListener('click', () => {
      Object.values(sections).forEach(id => document.getElementById(id).classList.add('hidden'));
      document.getElementById(secId).classList.remove('hidden');
    });
  });

  // Burger-Menu toggle
  const burgerBtn = document.getElementById('burger-btn');
  const sidebar   = document.getElementById('sidebar');
  burgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Swipe-to-close для sidebar
  let startX = 0;
  sidebar.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  sidebar.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const dx = endX - startX;
    // якщо свайп ліворуч більше ніж на 50px — закриваємо меню
    if (dx < -50) {
      sidebar.classList.remove('active');
    }
  });
});
