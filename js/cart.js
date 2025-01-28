const cartElement = document.querySelector('.cart');
const cartContainer = document.querySelector('.cart-container');

let isCartOpen = false;

cartElement.addEventListener('click', () => {
  if (animateElement(cartElement, isCartOpen ? 'rotate_front' : 'rotate_back', '1s')) {
    isCartOpen = !isCartOpen;
    cartContainer.style.right = isCartOpen ? '0' : '-500px';
  }
});

