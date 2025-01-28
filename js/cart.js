const cartElement = document.querySelector('.cart');
const cartContainer = document.querySelector('.cart-container');

let isOpen = false;

cartElement.addEventListener('click', () => {
  if (animateElement(cartElement, isOpen ? 'rotate_front' : 'rotate_back', '1s')) {
    isOpen = !isOpen;
    cartContainer.style.right = isOpen ? '0' : '-500px';
  }
});

