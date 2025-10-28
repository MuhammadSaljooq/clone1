// TypeScript interactions for VirtuPro clone
const hamburger = document.getElementById('hamburger') as HTMLButtonElement | null;
const nav = document.getElementById('nav') as HTMLElement | null;

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
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
