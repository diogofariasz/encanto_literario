const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');
const submitElement = document.querySelector('#submit');

const emailInputElement = emailElement.querySelector('input');
const passwordInputElement = passwordElement.querySelector('input');
const seePasswordElement = passwordElement.querySelector('.see-password');

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

  if (!user) {
    emailInputElement.classList.add('input-error');
    emailElement.appendChild(createErrorMessage('Este e-mail não é válido.'));
    return undefined;
  }

  if (user.password != password) {
    passwordInputElement.classList.add('input-error');
    passwordElement.appendChild(createErrorMessage('Senha incorreta.'));
    return undefined;
  }

  return user;
}

emailElement.addEventListener('input', () => handleEmailVerification());
passwordElement.addEventListener('input', () => handlePasswordVerification());
seePasswordElement.addEventListener('click', () => {
  if (seePasswordElement.classList.toggle('see-password-active')) {
    passwordInputElement.type = "text"
  } else {
    passwordInputElement.type = "password"
  }
});

// Quando clicar no botão
submitElement.addEventListener('click', (event) => {
  event.preventDefault();

  const isValidEmail = handleEmailVerification();
  const isValidPassword = handlePasswordVerification();

  if (isValidEmail && isValidPassword) {
    const user = handleLoginVerification();

    if (!user) return;

    // salvar dados do usuário
    console.log(user);

    // Redireciona para a página do usuário
    if (user.isAdmin) {
      window.location.href = '/admin.html';
    } else {
      window.location.href = '/usuario.html';
    }
  }
});
