const url = new URL(window.location.href); // Pega os dados da url
const category = url.searchParams.get('category'); // Pega a categoria que está no url

// Elemento onde vai estar os livros
const booksContainerElement = document.querySelector('.livros-container');

function createCardElement({ id, title, image_url, reviews, price, delivery }) {
  const { stars: reviewsStars, amount: reviewsAmount } = reviews;

  const starsInteger = Math.floor(reviewsStars); // Número de estrela em um inteiro
  const hasHalfStar = possuiCasasDecimais(reviewsStars); // Se há uma meia estrela

  // Constrói os elementos de imagem das estrelas
  const starRatingElements = Array.from({ length: 5 }, (_, i) => {
    if (i < starsInteger) return criarElemento('img', { attributes: { src: './assets/icons/star.svg', alt: 'Estrela cheia' } });
    if (i === starsInteger && hasHalfStar)
      return criarElemento('img', { attributes: { src: './assets/icons/half-star.svg', alt: 'Meia estrela' } });
    return criarElemento('img', { attributes: { src: './assets/icons/gray-star.svg', alt: 'Estrela cinza' } });
  });

  // Estimativa de entrega
  const deliveryEstimate = calcularDataComDias(delivery.days).split(', ');

  // Cria o componente do card que representa o livro e retorna
  return criarElemento('a', {
    className: 'livro',
    attributes: { href: `/livro.html?id=${id}#livro` },
    children: [
      criarElemento('img', { attributes: { src: image_url, alt: 'Capa do livro', class: 'livro-capa' } }),
      criarElemento('p', { text: title, className: 'livro-titulo' }),
      criarElemento('div', {
        className: 'livro-avaliacao',
        children: [
          criarElemento('div', { className: 'avaliacao-estrelas', children: starRatingElements }),
          criarElemento('span', { text: `(${formatarNumero(reviewsAmount)})`, className: 'avaliacao-quantidade' }),
        ],
      }),
      criarElemento('div', {
        className: 'livro-preco',
        children: [
          criarElemento('p', {
            text: `${formatarDinheiroComDesconto(price)} `,
            className: 'livro-preco-pix',
            children: [criarElemento('span', { text: 'no pix' })],
          }),
          criarElemento('p', { text: `com ${price.discount}% de desconto`, className: 'livro-desconto' }),
        ],
      }),
      criarElemento('p', {
        text: `Frete ${delivery.amount === 0.0 ? 'GRÁTIS' : formatarDinheiro(delivery)}`,
        className: 'livro-frete',
      }),
      criarElemento('p', {
        text: `Receba até `,
        className: 'livro-entrega',
        children: [
          criarElemento('strong', { text: deliveryEstimate[0], className: 'livro-entrega' }),
          document.createTextNode(`, ${deliveryEstimate[1]}`),
        ],
      }),
    ],
  });
}

// Classifica os livros do menos avaliado ao melhor avaliado.
const sortByWorstRated = (a, b) => a.assessment.value - b.assessment.value;
// Classifica os livros do mais bem avaliado ao menos avaliado.
const sortByBestRated = (a, b) => b.reviews.stars - a.reviews.stars;

// Aplica a ordem na lista de livros
const booksInOrder = booksData.slice().sort(sortByBestRated);

// Filtra os livros se tiver uma categoria informada
if (category) {
  const compareCategory = category.toLowerCase();

  booksInOrder.forEach((livro) => {
    if (compareCategory === livro.category.toLocaleLowerCase())
      booksContainerElement.appendChild(createCardElement(livro));
  });
} else {
  booksInOrder.forEach((livro) => booksContainerElement.appendChild(createCardElement(livro)));
}
