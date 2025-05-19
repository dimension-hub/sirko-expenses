const BASE = 'https://script.google.com/a/macros/sirko.club/s/ВАШ_EXEC_URL/exec';

// навігація
document.getElementById('go-expenses').onclick = () => location.href = BASE;
document.getElementById('go-map').onclick      = () => location.href = BASE + '?view=map';
document.getElementById('go-staff').onclick    = () => location.href = BASE + '?view=staff';
document.getElementById('go-reports').onclick  = () => location.href = BASE + '?view=reports';

// додатково: scroll reveal
// (якщо захочете, але у нас через CSS @keyframes уже працює)
