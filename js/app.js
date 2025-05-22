document.addEventListener('DOMContentLoaded', () => {
  // 1. Today’s bookings (Google Calendar API інтегрувати тут)
  document.getElementById('today-bookings').textContent = 8;

  // 2. Toggle секцій
  const sections = {
    'btn-expense-form': 'expense-form',
    'btn-reports':      'reports',
    'btn-client-map':   'client-map'
  };
  Object.entries(sections).forEach(([btnId, secId]) => {
    document.getElementById(btnId).addEventListener('click', () => {
      Object.values(sections).forEach(id =>
        document.getElementById(id).classList.add('hidden')
      );
      document.getElementById(secId).classList.remove('hidden');
    });
  });

  // 3. Burger-Menu toggle + swipe-to-close
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

  // 4. Paw prints “footprint” effect on mobile
  if (window.innerWidth <= 768) {
    const paws = document.querySelectorAll('.paw');
    function animatePaw(paw) {
      const w = window.innerWidth - 80,
            h = window.innerHeight - 80;
      const x = Math.random() * w,
            y = Math.random() * h,
            angle = (Math.random() * 60) - 30;
      paw.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
      paw.style.opacity = '1';

      const visible = 2000 + Math.random() * 2000;
      setTimeout(() => {
        paw.style.opacity = '0';
        setTimeout(() => animatePaw(paw), 1000 + Math.random() * 2000);
      }, visible);
    }
    paws.forEach(paw => setTimeout(() => animatePaw(paw), Math.random() * 3000));
  }
});
