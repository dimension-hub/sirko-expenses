document.addEventListener('DOMContentLoaded', () => {
  // Сьогоднішні записи (інтегруйте Google Calendar API)
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
});
