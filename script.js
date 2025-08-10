// Back to Top Button
const backToTop = document.getElementById('backToTop');

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('d-none', window.scrollY < 300);
});

// Smooth scroll to top on click
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
