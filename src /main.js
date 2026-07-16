import './scss/style.scss';

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const header = document.getElementById('mainHeader');

  menuToggle?.addEventListener('click', () => {
    mainNav.classList.toggle('header__nav--active');
    menuToggle.classList.toggle('header__menu-toggle--active');
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 30);
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾! Ð’Ð°ÑˆÐµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¾.');
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input').value;
      alert(`Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾ Ð·Ð° Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ! ÐÐ° email ${email} Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¾ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð¶Ð´ÐµÐ½Ð¸Ðµ.`);
      e.target.reset();
    });
  }
});
