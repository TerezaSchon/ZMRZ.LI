const menuBtn = document.querySelector('#menu__btn');
const menu = document.querySelector('#menu');
const menuItems = menu.querySelectorAll('#menu__item');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-closed');
});
