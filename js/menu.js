const openMenu = document.querySelector('.open--menu');
const closeMenu = document.querySelector('.close--menu');
const menu = document.querySelector('.header--menu');

openMenu.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menu.style.display = 'none';
});