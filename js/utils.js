const formatarDinheiro = ({ amount, currency }) => {
  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency,
  });
};

const possuiCasasDecimais = (numero) => numero % 1 !== 0;

const criarElemento = (tag, { text = '', className = '', children = [], attributes = {} } = {}) => {
  const elemento = document.createElement(tag);

  elemento.innerHTML = text;
  elemento.className = className;
  Object.entries(attributes).forEach(([key, value]) => elemento.setAttribute(key, value));

  children.forEach((child) => elemento.appendChild(child));

  return elemento;
};

const Div = ({ text, className, children = [] }) => criarElemento('div', { text, className, children });

const Imagem = (src, alt, className) => criarElemento('img', { className, attributes: { src, alt } });

const Paragrafo = (text, className) => criarElemento('p', { text, className });

const Strong = (text, className) => criarElemento('strong', { text, className });

const Span = (text, className) => criarElemento('span', { text, className });