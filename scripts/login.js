const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');
const submitElement = document.querySelector('#submit');

const emailInputElement = emailElement.querySelector('input');
const passwordInputElement = passwordElement.querySelector('input');

function removeErrorMessage(element) {
  const errorMessageElement = element.querySelector('.error-message');
  if (errorMessageElement) {
    errorMessageElement.remove();
  }
}

function createErrorMessage(message) {
  return Div({
    className: 'error-message',
    text: message,
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  const passwrodRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]{8,20}$/;
  return passwrodRegex.test(password);
}

function handleEmailVerification() {
  const alreadyHasError = emailElement.querySelector('.error-message');
  const trimmedValue = emailInputElement.value.trim();
  const isEmpty = trimmedValue === '';

  let errorMessage = '';
  if (isEmpty) {
    errorMessage = 'O e-mail não pode estar vazio.';
  } else if (!isValidEmail(trimmedValue)) {
    errorMessage = 'Formato de e-mail inválido.';
  }

  if (errorMessage) {
    if (!alreadyHasError) {
      emailInputElement.classList.add('input-error');
      emailElement.appendChild(createErrorMessage(errorMessage));
    } else {
      alreadyHasError.textContent = errorMessage;
    }

    return false;
  }

  if (alreadyHasError) {
    removeErrorMessage(emailElement);
    emailInputElement.classList.remove('input-error');
  }

  return true;
}

function handlePasswordVerification() {
  const alreadyHasError = passwordElement.querySelector('.error-message');
  const trimmedValue = passwordInputElement.value.trim();
  const isEmpty = trimmedValue === '';

  let errorMessage = '';
  if (isEmpty) {
    errorMessage = 'A senha não pode estar vazia.';
  } else if (!isValidPassword(trimmedValue)) {
    errorMessage = 'A senha deve ter entre 8 e 20 caracteres.';
  }

  if (errorMessage) {
    if (!alreadyHasError) {
      passwordInputElement.classList.add('input-error');
      passwordElement.appendChild(createErrorMessage(errorMessage));
    } else {
      alreadyHasError.textContent = errorMessage;
    }

    return false;
  }

  if (alreadyHasError) {
    removeErrorMessage(passwordElement);
    passwordInputElement.classList.remove('input-error');
  }

  return true;
}

function handleLoginVerification() {
  const email = emailInputElement.value;
  const password = passwordInputElement.value;

  // No futuro essas verificações serão feitas pelo backend
  const user = usersData.find((userData) => userData.email === email);

  console.log(password);

  if (!user) {
    emailInputElement.classList.add('input-error');
    emailElement.appendChild(createErrorMessage('Este e-mail não é válido.'));
    return false;
  }

  if (user.password != password) {
    passwordInputElement.classList.add('input-error');
    passwordElement.appendChild(createErrorMessage('Senha incorreta.'));
    return false;
  }

  return true;
}

emailElement.addEventListener('input', () => handleEmailVerification());
passwordElement.addEventListener('input', () => handlePasswordVerification());

// Quando clicar no botão
submitElement.addEventListener('click', (event) => {
  event.preventDefault();

  const isValidEmail = handleEmailVerification();
  const isValidPassword = handlePasswordVerification();

  if (isValidEmail && isValidPassword && handleLoginVerification()) {
    console.log('Logado');
  }
});
