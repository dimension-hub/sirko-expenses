document.addEventListener('DOMContentLoaded', () => {
  // Підтягуємо сьогоднішні записи (Google Calendar API інтегрувати тут)
  const todayEl = document.getElementById('today-bookings');
  todayEl.textContent = 8;

  // Toggle секцій (Форма витрат, Звіти, Карта клієнтів)
  const sections = {
    'btn-expense-form': 'expense-form',
    'btn-reports':      'reports',
    'btn-client-map':   'client-map'
  };
  Object.entries(sections).forEach(([btnId, secId]) => {
    document.getElementById(btnId).addEventListener('click', () => {
      // сховати всі
      Object.values(sections).forEach(id => {
        document.getElementById(id).classList.add('hidden');
      });
      // показати обрану
      document.getElementById(secId).classList.remove('hidden');
    });
  });

  // Burger-Menu
  const burgerBtn = document.getElementById('burger-btn');
  const sidebar   = document.getElementById('sidebar');
  burgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
});
