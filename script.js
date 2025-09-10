// script.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-btn');
  const pages = document.querySelectorAll('.page');

  function show(id){
    pages.forEach(p => p.classList.toggle('active', p.id === id));
    buttons.forEach(b => b.classList.toggle('active', b.dataset.target === id));
    // smooth scroll to top of content for mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      show(btn.dataset.target);
      // update URL hash without reloading
      history.replaceState(null, '', `#${btn.dataset.target}`);
    });
  });

  // Show section from URL hash if present
  const hash = location.hash.replace('#','');
  if(hash && document.getElementById(hash)){
    show(hash);
  } else {
    show('restaurant'); // default
  }
});
