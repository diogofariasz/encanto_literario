const headerHamburguer = document.querySelector('.header-mid-hamburguer');
const headerBottom = document.querySelector('.header-bottom');
const dropdownButtons = document.querySelectorAll('.dropdown');

headerHamburguer.addEventListener('click', () => {
  const open = headerHamburguer.classList.toggle('hamburguer-active')

  headerBottom.style.height = open ? `auto` : ''
});

dropdownButtons.forEach((dropdown) => {
  const button = dropdown.querySelector('.navigation-button')
  
  button.addEventListener('click', () => {
    dropdown.classList.toggle('menu-active')
  })
})