// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── MOBILE MENU ───
const mobileMenu = document.getElementById('mobile-menu');
document.getElementById('hamburger-btn')?.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});
document.getElementById('mm-close')?.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
});
document.querySelectorAll('.mm-links a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// ─── APPOINTMENT FORM ───
document.getElementById('appt-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('f-name').value;
  const phone = document.getElementById('f-phone').value;
  const service = document.getElementById('f-service').value;
  const date = document.getElementById('f-date').value;
  const msg = `Hi Doctor, I'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred Date: ${date}`;
  window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, '_blank');
  document.getElementById('success-msg').classList.add('show');
  this.reset();
  setTimeout(() => document.getElementById('success-msg').classList.remove('show'), 5000);
});

// ─── ACTIVE NAV LINK ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = navbar.classList.contains('scrolled') ? 'var(--teal)' : 'white';
    }
  });
}, { passive: true });

// ─── SET MIN DATE ON APPOINTMENT ───
const dateInput = document.getElementById('f-date');
if (dateInput) {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  dateInput.min = today.toISOString().split('T')[0];
}
