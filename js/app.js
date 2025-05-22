document.addEventListener('DOMContentLoaded', () => {
  // Today’s bookings
  document.getElementById('today-bookings').textContent = 8;

  // Toggle секцій
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

  // Burger-Menu + swipe-to-close
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

  // Paw prints effect in .paw-zone
  if (window.innerWidth <= 768) {
    const zone = document.querySelector('.paw-zone');
    const paws = zone.querySelectorAll('.paw');

    function dropPaw(paw) {
      const w = zone.clientWidth - paw.clientWidth;
      const h = zone.clientHeight - paw.clientHeight;
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = (Math.random()*60) - 30;

      paw.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
      paw.style.opacity = '1';

      const visible = 1500 + Math.random()*1500;
      setTimeout(() => {
        paw.style.opacity = '0';
        setTimeout(() => dropPaw(paw), 500 + Math.random()*1500);
      }, visible);
    }

    paws.forEach((paw, i) => {
      setTimeout(() => dropPaw(paw), i * 800);
    });
  }
});
