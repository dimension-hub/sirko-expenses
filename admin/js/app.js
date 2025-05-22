document.addEventListener('DOMContentLoaded', () => {
  // Підтягуємо сьогоднішні записи (інтегрувати Google Calendar API тут)
  const todayEl = document.getElementById('today-bookings');
  todayEl.textContent = 8;

  // Показ секцій
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

  // BurgerMenu
  const burgerBtn = document.getElementById('burger-btn');
  const sidebar   = document.getElementById('sidebar');
  burgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
});
