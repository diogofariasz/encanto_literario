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
    if (i < starsInteger) return Imagem('./assets/icons/star.svg', 'Estrela cheia');
    if (i === starsInteger && hasHalfStar)
      return Imagem('./assets/icons/half-star.svg', 'Meia estrela');
    return Imagem('./assets/icons/gray-star.svg', 'Estrela cinza');
  });

  // Estimativa de entrega
  const deliveryEstimate = calcularDataComDias(delivery.days).split(', ');

  // Cria o componente do card que representa o livro e retorna
  return Link({
    className: 'livro',
    href: `/livro.html?id=${id}#livro`,
    children: [
      Imagem(image_url, 'Capa do livro', 'livro-capa'),
      Paragrafo(title, 'livro-titulo'),
      Div({
        className: 'livro-avaliacao',
        children: [
          Div({
            className: 'avaliacao-estrelas',
            children: starRatingElements,
          }),
          Span(`(${formatarNumero(reviewsAmount)})`, 'avaliacao-quantidade'),
        ],
      }),
      Div({
        className: 'livro-preco',
        children: [
          Paragrafo(
            `${formatarDinheiroComDesconto(price)} ${Span('no pix').outerHTML}`,
            'livro-preco-pix'
          ),
          Paragrafo(`com ${price.discount}% de desconto`, 'livro-desconto'),
        ],
      }),
      Paragrafo(
        `Frete ${delivery.amount === 0.0 ? 'GRÁTIS' : formatarDinheiro(delivery)}`,
        'livro-frete'
      ),
      Paragrafo(
        `Receba até ${Strong(deliveryEstimate[0], 'livro-entrega').outerHTML}, ${
          deliveryEstimate[1]
        }`,
        'livro-entrega'
      ),
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
