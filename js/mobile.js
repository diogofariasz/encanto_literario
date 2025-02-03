// Pega o elemento do hamburguer
const headerHamburguer = document.querySelector('.header-mid-hamburguer');
// Pega o elemento do cabeçalho inferior
const headerBottom = document.querySelector('.header-bottom');
// Pega todos elementos que são da classe 'dropdown'
const dropdownButtons = document.querySelectorAll('.dropdown');

// Mostra o menu ao clicar no hamburguer
headerHamburguer.addEventListener('click', () => {
  const open = headerHamburguer.classList.toggle('hamburguer-active');

  headerBottom.style.height = open ? `auto` : '';

  // Fecha todos os menus quando o header for fehcado
  if (!open) {
    dropdownButtons.forEach((dropdown) => {
      dropdown.classList.remove('menu-active');
    });
  }
});

// Mostra o menu ao clicar no botão do dropdown
dropdownButtons.forEach((dropdown) => {
  const button = dropdown.querySelector('.navigation-button');

  button.addEventListener('click', () => {
    dropdown.classList.toggle('menu-active');
  });
});
