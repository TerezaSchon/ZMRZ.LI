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

/* zavři menu po kliknutí na libovolnou záložku */

const closeMenu1 = document.querySelector('#menu__item--1');

closeMenu1.addEventListener('click', () => {
  menu.classList.add('menu-closed');
});

/*  */
const closeMenu2 = document.querySelector('#menu__item--2');

closeMenu2.addEventListener('click', () => {
  menu.classList.add('menu-closed');
});

/*  */
const closeMenu3 = document.querySelector('#menu__item--3');

closeMenu3.addEventListener('click', () => {
  menu.classList.add('menu-closed');
});

/*  */
const closeMenu4 = document.querySelector('#menu__item--4');

closeMenu4.addEventListener('click', () => {
  menu.classList.add('menu-closed');
});
