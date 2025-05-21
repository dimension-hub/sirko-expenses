document.addEventListener('DOMContentLoaded', () => {
  // Підтягуємо сьогоднішні записи з Google Calendar API
  const todayEl = document.getElementById('today-bookings');
  // TODO: тут ваше API-викликання → todayEl.textContent = fetchedCount;
  todayEl.textContent = 8;

  // Логіка показу секцій
  const sections = {
    'btn-expense-form': 'expense-form',
    'btn-reports':      'reports',
    'btn-client-map':   'client-map'
  };
  Object.entries(sections).forEach(([btn, sec]) => {
    document.getElementById(btn).onclick = () => {
      Object.values(sections).forEach(id => document.getElementById(id).classList.add('hidden'));
      document.getElementById(sec).classList.remove('hidden');
    };
  });
});
