document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll для CTA
  document.querySelectorAll('.cta-top .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.id.replace('go-', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // IntersectionObserver для reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => io.observe(el));
});
