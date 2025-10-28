// TypeScript interactions for VirtuPro clone
const hamburger = document.getElementById('hamburger') as HTMLButtonElement | null;
const nav = document.getElementById('nav') as HTMLElement | null;

if (hamburger && nav) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (target && !hamburger.contains(target) && !nav.contains(target)) {
      nav.classList.remove('open');
    }
  });
}

// Smooth scroll for same-page anchors
const links = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];
for (const link of links) {
  link.addEventListener('click', (e) => {
    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
