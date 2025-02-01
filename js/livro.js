const url = new URL(window.location.href); // Pega os dados da url
const id = url.searchParams.get('id'); // Pega o id do livro que está na url

const bookData = booksData.find((livro) => livro.id == id); // Dados do livro

// Elemento onde vai estar as informações
const bookElement = document.querySelector('.livro');

function createInfoElement({ title, author, category, price, delivery, image_url, desc, reviews }) {
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

  // Constrói os componentes que mostram as informações do livro
  const book_info = Div({
    className: 'book-info',
    children: [
      Imagem(image_url, 'capa do livro', 'book-image'),
      Div({
        className: 'book-details',
        children: [
          Paragrafo(title, 'book-details-title'),
          Div({
            className: 'book-details-rate',
            children: [
              Paragrafo(reviewsStars),
              Div({ className: 'book-details-rate-stars', children: starRatingElements }),
              Paragrafo(`(${formatarNumero(reviewsAmount)})`, 'book-details-rate-amount'),
            ],
          }),
          Paragrafo(`${Strong('Autor do Livro:').outerHTML} ${author}`, 'book-details-author'),
          Paragrafo(`${Strong('Categoria:').outerHTML} ${category}`, 'book-details-author'),
          Div({
            className: 'book-details-description',
            children: [Strong('Descrição:'), Paragrafo(desc)],
          }),
        ],
      }),
    ],
  });

  // Constrói os componentes que mostram as informações de compra
  const purchase_info = Div({
    className: 'purchase-info',
    children: [
      Div({
        className: 'purchase-price',
        children: [
          Paragrafo(
            `com ${Span(`${price.discount}%`, 'purchase-price-discount-percent').outerHTML} off`,
            'purchase-price-discount'
          ),
          Paragrafo(`${formatarDinheiroComDesconto(price)}`, 'purchase-price-promotion'),
          Paragrafo(
            `originalmente por ${
              Span(formatarDinheiro(price), 'purchase-price-original-amount').outerHTML
            }`,
            'purchase-price-original'
          ),
        ],
      }),
      Div({
        className: 'purchase-shipping',
        children: [
          Paragrafo(
            `${Strong('Entrega:').outerHTML} ${
              delivery.amount == 0 ? 'GRÁTIS' : formatarDinheiro(delivery)
            }`
          ),
          Paragrafo(
            `Estimativa de entrega ${Strong(calcularDataComDias(delivery.days)).outerHTML}`,
            'purchase-shipping-estimated'
          ),
          Paragrafo('entrega para todo o país!', 'purchase-shipping-radius'),
        ],
      }),
      Div({
        className: 'purchase-amount',
        children: [
          Strong('Quantidade:'),
          NumberInput({ attributes: { placeholder: '1', value: '1', min: 1, max: 10 } }),
        ],
      }),

      Div({
        className: 'purchase-buttons',
        children: [
          Div({ text: 'Comprar agora', className: 'purchase-button' }),
          Div({ text: 'Adicionar ao Carrinho', className: 'purchase-button bg--purple-3' }),
        ],
      }),
    ],
  });

  // Constrói um novo componente que encapsula os outros componentes e retorna eles
  return Div({
    className: 'info-container',
    children: [book_info, purchase_info],
  });
}

// Adiciona o elemento html do livro na página
bookElement.appendChild(createInfoElement(bookData));
