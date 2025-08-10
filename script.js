document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.getElementById('backToTop');
  
  if (backToTop) {
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('d-none', window.scrollY < 300);
    });
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  } else {
    console.error('Back to Top button not found!');
  }
});
