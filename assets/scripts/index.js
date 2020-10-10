var open = document.querySelector('.open-menu');
var close = document.querySelector('.close-menu');
var header = document.querySelector('.header');

open.addEventListener('click', () => {
    header.classList.add('menu-open');
});

close.addEventListener('click', () => {
    header.classList.remove('menu-open');
});