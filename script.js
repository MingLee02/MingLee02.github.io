// ============================================================
// MING LEE PORTFOLIO — behavior
// ============================================================

/* ---------- Live London clock ---------- */
function updateClock(){
  const now = new Date();
  const opts = { timeZone:'Europe/London', hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false };
  const timeStr = new Intl.DateTimeFormat('en-GB', opts).format(now);

  const dateOpts = { timeZone:'Europe/London', weekday:'short', day:'2-digit', month:'short', year:'numeric' };
  const dateStr = new Intl.DateTimeFormat('en-GB', dateOpts).format(now).toUpperCase();

  const timeEl = document.getElementById('local-time');
  const dateEl = document.getElementById('local-date');
  if (timeEl) timeEl.textContent = timeStr;
  if (dateEl) dateEl.textContent = dateStr;
}
updateClock();
setInterval(updateClock, 1000);


/* ---------- Footer year tag ---------- */
(function footerYear(){
  const el = document.getElementById('footer-year');
  if (!el) return;
  el.textContent = 'ML_' + new Date().getFullYear();
})();

/* ---------- Reveal project cards / panels on scroll ---------- */
(function revealOnScroll(){
  const targets = document.querySelectorAll('.project-card, .panel');
  if (!('IntersectionObserver' in window)) return;

  targets.forEach(t => { t.style.opacity = 0; t.style.transform = 'translateY(14px)'; t.style.transition = 'opacity .5s ease, transform .5s ease'; });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => io.observe(t));
})();
