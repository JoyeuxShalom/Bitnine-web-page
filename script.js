// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);

    if (targetSection) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetOffset = targetSection.offsetTop - headerHeight;

      window.scroll({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  });
});
