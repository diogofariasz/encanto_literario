const headerHamburguer = document.querySelector('.header-mid-hamburguer');
const headerBottom = document.querySelector('.header-bottom');
const dropdownButtons = document.querySelectorAll('.dropdown');

function replaceIcon(element, iconName, color) {
  element.innerHTML = '';

  const iconElement = document.createElement('svg');
  iconElement.setAttribute('data-lucide', iconName);
  iconElement.style.color = color;

  element.appendChild(iconElement);

  lucide.createIcons();
}

headerHamburguer.addEventListener('click', () => {
  const open = headerHamburguer.classList.toggle('active')

  headerBottom.style.height = open ? `auto` : ''
  replaceIcon(
    headerHamburguer, open ? 'x' : 'align-justify', 'var(--purple-1)'
  );
});

dropdownButtons.forEach((dropdown) => {
  const button = dropdown.querySelector('.navigation-button')
  
  button.addEventListener('click', () => {
    dropdown.classList.toggle('menu-active')
  })
})