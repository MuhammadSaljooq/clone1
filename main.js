// JS build of the TypeScript interactions
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
const links = Array.from(document.querySelectorAll('a[href^="#"]'));
for (const link of links) {
  link.addEventListener('click', (e) => {
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
