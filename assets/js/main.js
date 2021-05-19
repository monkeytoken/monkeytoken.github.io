const hamburger = document.getElementById('menu__button');
const hamburgerHeader = document.getElementById('menu__button--header');
const footerMenu = document.querySelector('.footer-menu .footer');
const headerMenu = document.querySelector('.header-menu .footer ');

hamburger.addEventListener('click', function() {
    footerMenu.classList.toggle('active');
});


hamburgerHeader.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
});
