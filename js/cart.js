const cartElement = document.querySelector('.cart');
const cartContainer = document.querySelector('.cart-container');

let isCartOpen = false;

const animateElement = (element, animationName, duration = '500ms') => {
  if (!element.style.animation) {
    element.style.animation = `${animationName} ${duration} ease-in-out`;

    const handleAnimationEnd = () => {
      element.style.animation = '';
      element.removeEventListener('animationend', handleAnimationEnd);
    };

    element.addEventListener('animationend', handleAnimationEnd);

    return true;
  }

  return false;
};

cartElement.addEventListener('click', () => {
  if (animateElement(cartElement, isCartOpen ? 'rotate_front' : 'rotate_back', '1s')) {
    isCartOpen = !isCartOpen;
    cartContainer.style.right = isCartOpen ? '0' : '-500px';
  }
});

