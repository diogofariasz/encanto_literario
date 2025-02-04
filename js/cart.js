const cartsElements = document.querySelectorAll('.cart');
const cartContainer = document.querySelector('.cart-container');
const modalElement = document.querySelector('.modal');
const closeModalElement = modalElement.querySelector('.modal-close');

const closeModal = () => {
  document.body.classList.remove('no-scroll')
  modalElement.classList.remove('modal-active');
};

const openModal = () => {
  document.body.classList.add('no-scroll')
  modalElement.classList.add('modal-active');
};

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

closeModalElement.addEventListener('click', () => {
  closeModal()
})

cartsElements.forEach((cartElement) => {
  cartElement.addEventListener('click', () => {
    openModal();
    animateElement(cartElement, 'pulse');
  });
});
