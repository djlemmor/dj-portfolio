const navbar = document.querySelector('.navbar');
const hamburger = navbar.querySelector('.navbar__hamburger');
const menu = document.querySelector('.mobile__menu');
const body = document.querySelector('body');
const scrollToTopButton = document.querySelector('#scrollToTopButton');
const currentYear = new Date().getFullYear();
const year = document.querySelector('#year');

year.textContent = currentYear;

function toggleMenu() {
  hamburger.classList.toggle('navbar__hamburger--active');
  menu.classList.toggle('mobile__menu--active');
  body.classList.toggle('body-scroll-lock');
}

menu.addEventListener('click', function (event) {
  if (event.target.matches('.mobile__links a')) {
    toggleMenu();
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
