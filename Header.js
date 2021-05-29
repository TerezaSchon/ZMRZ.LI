/* rozklikni menu */
const menuBtn1 = document.querySelector('#menu__btn1');
const menu = document.querySelector('#menu');
const menuItems = menu.querySelectorAll('#menu__item');

menuBtn1.addEventListener('click', () => {
  menu.classList.remove('menu-closed');
});

/* zavři menu po kliku na křížek */
const menuBtn2 = document.querySelector('#menu__btn2');

menuBtn2.addEventListener('click', () => {
  menu.classList.add('menu-closed');
});

/* zavři menu po kliknutí na záložku */
const closeMenu = document.querySelector('.item');

closeMenu.addEventListener('click', () => {
  menu.classList.add('menu-closed');
});
