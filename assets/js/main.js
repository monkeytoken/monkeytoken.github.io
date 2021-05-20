const hamburger = document.getElementById('menu__button');
const hamburgerHeader = document.getElementById('menu__button--header');
const footerMenu = document.querySelector('.footer-menu .footer');
const headerMenu = document.querySelector('.header-menu .footer');

hamburger.addEventListener('click', () => {
    footerMenu.classList.toggle('active');
});


hamburgerHeader.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
});


const monthContent = document.querySelectorAll('.month-content');
const monthBtns = document.querySelectorAll('.month-btn');

monthBtns.forEach( (item, i) => {
    item.addEventListener('click', () => {
        monthContent.forEach( (content, i) => {
            console.log(content);
            content.classList.remove('show');
        });

        monthContent[i].classList.add('show');
    });
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

