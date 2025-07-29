// JavaScript for interactive elements on Caden Ice's portfolio
document.addEventListener('DOMContentLoaded', () => {
  /* FAQ toggle behaviour */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // close other FAQ items
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove('active');
      });
      // toggle current
      item.classList.toggle('active');
    });
  });

  /* Highlight navigation on scroll */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function setActiveNav() {
    const scrollPos = window.pageYOffset;
    sections.forEach((section) => {
      const offsetTop = section.offsetTop - 80; // account for nav height
      const offsetBottom = offsetTop + section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  setActiveNav();
  window.addEventListener('scroll', setActiveNav);

  /* Mobile navigation toggle
   * When the menu button is clicked on small screens, expand or collapse
   * the navigation links. Additionally, close the menu when a link is
   * selected to provide a smoother user experience on mobile devices.
   */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
    });
    navLinksContainer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
      });
    });
  }
});