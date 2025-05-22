document.addEventListener('DOMContentLoaded', () => {
  // 1. Today’s bookings
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

  // 4. Paw prints in footer
  if (window.innerWidth <= 768) {
    const footer = document.querySelector('.admin-footer');
    const paws = footer.querySelectorAll('.paw');
    function animatePaw(paw) {
      const fw = footer.clientWidth - paw.clientWidth;
      const fh = footer.clientHeight - paw.clientHeight;
      // random positions & rotations
      const x  = Math.random() * fw;
      const y  = Math.random() * fh;
      const r  = (Math.random()*60) - 30;
      const x2 = Math.random() * fw;
      const y2 = Math.random() * fh;
      const r2 = (Math.random()*60) - 30;
      // set CSS variables for keyframe
      paw.style.setProperty('--x', `${x}px`);
      paw.style.setProperty('--y', `${y}px`);
      paw.style.setProperty('--r', `${r}deg`);
      paw.style.setProperty('--x2', `${x2}px`);
      paw.style.setProperty('--y2', `${y2}px`);
      paw.style.setProperty('--r2', `${r2}deg`);
      // restart animation
      paw.style.opacity = '';
      void paw.offsetWidth;
      paw.style.opacity = '';
    }
    // kick off animations
    paws.forEach((paw, i) => {
      setTimeout(() => animatePaw(paw), i * 1000);
      // repeat every cycle
      setInterval(() => animatePaw(paw), 3000);
    });
  }
});
