document.addEventListener('DOMContentLoaded', () => {
  // Placeholder: в реалі треба підключити Google Calendar API
  const todayBookingsEl = document.getElementById('today-bookings');
  // TODO: Fetch from Google Calendar
  todayBookingsEl.textContent = 8;

  // Кнопки показу секцій
  const sections = {
    'btn-expense-form': 'expense-form',
    'btn-reports':      'reports',
    'btn-client-map':   'client-map'
  };
  Object.entries(sections).forEach(([btnId, secId]) => {
    document.getElementById(btnId).onclick = () => {
      // сховати всі
      Object.values(sections).forEach(id => document.getElementById(id).classList.add('hidden'));
      // показати обрану
      document.getElementById(secId).classList.remove('hidden');
    };
  });
});
