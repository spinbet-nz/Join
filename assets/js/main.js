
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// "More" dropdown on desktop
const more = document.querySelector('.more');
if (more){
  const btn = more.querySelector('.more-btn');
  const menu = more.querySelector('.dropdown');
  const show = (v)=>{ menu.style.display = v ? 'block' : 'none'; btn.setAttribute('aria-expanded', v? 'true':'false'); };
  btn?.addEventListener('click', e => { e.stopPropagation(); show(menu.style.display!=='block'); });
  document.addEventListener('click', () => show(false));
}

// Fake form submit (no backend)
window.fakeSubmit = (e) => {
  e.preventDefault();
  alert('Thanks! This demo does not store data.');
  return false;
}

// Simple placeholder shimmer
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-ph]').forEach(el => {
    setTimeout(() => { el.classList.add('ph-loaded'); }, 100);
  });
});
