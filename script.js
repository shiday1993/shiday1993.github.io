// ============================================
// Util
// ============================================
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// ============================================
// Tahun otomatis di footer
// ============================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============================================
// Toggle menu mobile
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // tutup menu kalau link diklik (mobile)
  navMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// Highlight nav link sesuai section yang aktif
// ============================================
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((section) => navObserver.observe(section));
}

// ============================================
// Reveal saat di-scroll
// ============================================
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length && 'IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  // kalau reduced motion atau IO nggak ada, langsung tampilkan semua
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ============================================
// Monitor panel: jitter angka latency (kosmetik)
// ============================================
const latencyEls = document.querySelectorAll('.ep-latency');

if (latencyEls.length && !prefersReducedMotion) {
  setInterval(() => {
    latencyEls.forEach((el) => {
      const base = parseInt(el.dataset.latency, 10) || 100;
      const jitter = Math.round((Math.random() - 0.5) * 30); // +-15ms
      const value = Math.max(20, base + jitter);
      el.textContent = `${value}ms`;
    });
  }, 2200);
}

// ============================================
// Monitor panel: jam kecil (kosmetik, biar kerasa "live")
// ============================================
const monitorClock = document.getElementById('monitorClock');

function updateClock() {
  if (!monitorClock) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  monitorClock.textContent = `${hh}:${mm}:${ss}`;
}

if (monitorClock) {
  updateClock();
  setInterval(updateClock, 1000);
}

// ============================================
// Copy email ke clipboard
// ============================================
const copyEmailBtn = document.getElementById('copyEmailBtn');
const emailBtn = document.getElementById('emailBtn');

if (copyEmailBtn && emailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    // ambil alamat email dari href mailto:
    const email = emailBtn.getAttribute('href').replace('mailto:', '');
    const originalText = copyEmailBtn.textContent;

    try {
      await navigator.clipboard.writeText(email);
      copyEmailBtn.textContent = 'Tersalin!';
    } catch (err) {
      copyEmailBtn.textContent = 'Gagal copy, salin manual ya';
    }

    setTimeout(() => {
      copyEmailBtn.textContent = originalText;
    }, 2000);
  });
}
