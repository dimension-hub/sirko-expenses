document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') body.classList.add('dark-mode');
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Stats
  document.getElementById('stat-today-bookings').textContent = 8;

  // Section toggles + skeleton + fade-in
  const tabs = {
    'btn-dashboard-nav': 'dashboard',
    'btn-expense-form': 'expense-form',
    'btn-expense-nav': 'expense-form',
    'btn-reports': 'reports',
    'btn-reports-nav': 'reports',
    'btn-client-map': 'client-map',
    'btn-client-map-nav': 'client-map'
  };
  Object.entries(tabs).forEach(([btnId, secId]) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      Object.values(tabs).forEach(id => {
        const sec = document.getElementById(id);
        sec.classList.add('hidden');
        sec.classList.remove('show');
      });
      const section = document.getElementById(secId);
      // show skeleton
      const skeleton = section.querySelector('.skeleton-wrapper');
      const content  = section.querySelector('.section-content');
      skeleton.classList.remove('hidden');
      content.classList.add('hidden');
      section.classList.remove('hidden');
      // simulate loading
      setTimeout(() => {
        skeleton.classList.add('hidden');
        content.classList.remove('hidden');
        section.classList.add('show');
      }, 800);
    });
  });

  // Burger menu + swipe
  const burger = document.getElementById('burger-btn');
  const sidebar = document.getElementById('sidebar');
  burger.addEventListener('click', () => sidebar.classList.toggle('active'));
  let startX = 0;
  sidebar.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  sidebar.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientX - startX < -50) sidebar.classList.remove('active');
  });

  // Chaotic paw animations
  if (window.innerWidth <= 768) {
    const zone = document.querySelector('.paw-zone');
    zone.querySelectorAll('.paw').forEach((paw, i) => {
      const animate = () => {
        const w = zone.clientWidth - paw.clientWidth;
        const h = zone.clientHeight - paw.clientHeight;
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = (Math.random() * 60) - 30;
        paw.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
        paw.style.opacity = '1';
        setTimeout(() => {
          paw.style.opacity = '0';
          setTimeout(animate, 500 + Math.random() * 2000);
        }, 800 + Math.random() * 1200);
      };
      setTimeout(animate, i * 300 + Math.random() * 500);
    });
  }
});
