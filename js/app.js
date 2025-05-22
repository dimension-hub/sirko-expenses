document.addEventListener('DOMContentLoaded', () => {
  // Підтягуємо сьогоднішні записи
  document.getElementById('today-bookings').textContent = 8;

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

  // Swipe-to-close бічної панелі
  let startX = 0;
  sidebar.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  sidebar.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientX - startX < -50) {
      sidebar.classList.remove('active');
    }
  });
});
