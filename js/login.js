const submitElement = document.querySelector('#submit');

// Quando clicar no botão de submit
submitElement.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');

  if (email.value) {
  }

  // REQUISITOS PARA O EMAIL
  // - conter '@'

  // REQUISITOS PARA A SENHA
  // - mínimo 8 caracteres
  // - máximo de 20 caracteres

  if (senha.value.length > 8) {
    // deu certo
  } else {
    // deu errado
  }

  console.log(email.value);
  console.log(senha.value);
});