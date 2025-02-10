const cartsElements = document.querySelectorAll('.cart');
const cartContainer = document.querySelector('.cart-container');

const animateElement = (element, animationName, duration = '500ms') => {
  if (!element.style.animation) {
    element.style.animation = `${animationName} ${duration} ease-in-out`;

    const handleAnimationEnd = () => {
      element.style.animation = '';
      element.removeEventListener('animationend', handleAnimationEnd);
    };

    element.addEventListener('animationend', handleAnimationEnd);
  }
};

cartsElements.forEach((cartElement) => {
  cartElement.addEventListener('click', () => {
    const modal = getModalByClassName("cart-container")

    modal.openModal();
    animateElement(cartElement, 'pulse');
  });
});
