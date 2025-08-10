document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.getElementById('backToTop');
  
  if (backToTop) {
    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('d-none', window.scrollY < 300);
    });
    
    // Smooth scroll to top on click
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  } else {
    console.error('Back to Top button not found!');
  }
});
