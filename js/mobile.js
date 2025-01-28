const headerHamburguer = document.querySelector('.header-mid-hamburguer');
const headerBottom = document.querySelector('.header-bottom');

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

  headerBottom.style.height = open ? `${headerBottom.scrollHeight}px` : ''
  replaceIcon(
    headerHamburguer, open ? 'x' : 'align-justify', 'var(--purple-1)'
  );
});
