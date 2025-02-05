// Remove o elemento de mensagem de erro
function removeErrorMessage(element) {
  const errorMessageElement = element.querySelector('.error-message');
  if (errorMessageElement) {
    errorMessageElement.remove();
  }
}

// Cria um elemento de mensagem de erro
function createErrorMessage(message) {
  return criarElemento('div', {
    className: 'error-message',
    text: message,
  });
}

// Verifica se um e-mail é válido
function isValidUserName(nome) {
  const regex = /^[a-zA-Z\s]{4,30}$/;
  return regex.test(nome);
}

// Verifica se um e-mail é válido
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Verifica se uma senha é válida
function isValidPassword(password) {
  const passwrodRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]{8,20}$/;
  return passwrodRegex.test(password);
}

// Calcula a data que vai ser daqui a uma certa quantidade de dias
// e retorna uma String formatada com essa informação.
function calcularDataComDias(dias) {
  const diasSemana = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ];
  const mesesAno = [
    'jan',
    'fev',
    'mar',
    'abr',
    'maio',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];

  const hoje = new Date();
  hoje.setDate(hoje.getDate() + dias);

  const diaSemana = diasSemana[hoje.getDay()];
  const diaMes = hoje.getDate();
  const mes = mesesAno[hoje.getMonth()];

  return `${diaSemana}, ${diaMes} de ${mes}`;
}

// Formata um número em formato de dinheiro
const formatarDinheiro = ({ amount, currency }) => {
  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency,
  });
};

// Formata um número em formato de dinheiro com desconto aplicado
const formatarDinheiroComDesconto = ({ amount, discount, currency }) => {
  const discountPercent = discount / 100;
  const discountValue = amount * discountPercent;
  const priceWithDiscount = amount - discountValue;
  4;

  return priceWithDiscount.toLocaleString('pt-BR', {
    style: 'currency',
    currency,
  });
};

// Formata um número colocando os pontos e vírgulas
const formatarNumero = (number) => {
  return number.toLocaleString('pt-BR');
};

// Verifica se um número decimal possui casa decimal diferente de zero
const possuiCasasDecimais = (numero) => numero % 1 !== 0;

// Utilitário para criar elementos HTML pelo JavaScript 
const criarElemento = (tag, { text = '', className = '', children = [], attributes = {} } = {}) => {
  const elemento = document.createElement(tag);

  elemento.innerHTML = text;
  elemento.className = className;
  Object.entries(attributes).forEach(([key, value]) => elemento.setAttribute(key, value));

  children.forEach((child) => elemento.appendChild(child));

  return elemento;
};