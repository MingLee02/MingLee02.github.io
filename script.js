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

/* ---------- Subtle "system status" jitter ---------- */
function jitterStats(){
  const cpu = document.getElementById('stat-cpu');
  const mem = document.getElementById('stat-mem');
  if (cpu) cpu.textContent = (14 + Math.floor(Math.random() * 10)) + '%';
  if (mem) mem.textContent = (36 + Math.floor(Math.random() * 12)) + '%';
}
setInterval(jitterStats, 3500);

/* ---------- GitHub activity bars ---------- */
(function buildGithubBars(){
  const container = document.getElementById('gh-bars');
  if (!container) return;
  const heights = [30, 55, 40, 70, 90, 60, 35]; // Mon..Sun, relative %
  heights.forEach(h => {
    const bar = document.createElement('i');
    bar.style.height = h + '%';
    container.appendChild(bar);
  });
})();

/* ---------- Active section highlighting in side nav ---------- */
(function sectionSpy(){
  const navItems = Array.from(document.querySelectorAll('.side-nav-item'));
  const sections = navItems
    .map(item => document.getElementById(item.dataset.target))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          item.classList.toggle('is-active', item.dataset.target === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
})();

/* ---------- Scroll-to-explore button ---------- */
(function scrollCue(){
  const cue = document.getElementById('scroll-cue');
  if (!cue) return;
  cue.addEventListener('click', () => {
    const target = document.getElementById('projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
})();

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
