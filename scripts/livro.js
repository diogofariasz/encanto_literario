const id = url.searchParams.get('id'); // Pega o id do livro que está na url

const bookData = getBookById(id); // Dados do livro

// Elemento onde vai estar as informações
const bookElement = document.querySelector('.livro');

function createInfoElement({ title, author, category, price, delivery, image_url, desc, reviews }) {
  const { stars: reviewsStars, amount: reviewsAmount } = reviews;

  console.log(author + 'ksdasd');

  const starsInteger = Math.floor(reviewsStars); // Número de estrela em um inteiro
  const hasHalfStar = possuiCasasDecimais(reviewsStars); // Se há uma meia estrela

  // Constrói os elementos de imagem das estrelas
  const starRatingElements = Array.from({ length: 5 }, (_, i) => {
    if (i < starsInteger)
      return criarElemento('img', {
        attributes: { src: './assets/icons/star.svg', alt: 'Estrela cheia' },
      });
    if (i === starsInteger && hasHalfStar)
      return criarElemento('img', {
        attributes: { src: './assets/icons/half-star.svg', alt: 'Meia estrela' },
      });
    return criarElemento('img', {
      attributes: { src: './assets/icons/gray-star.svg', alt: 'Estrela cinza' },
    });
  });

  // Constrói os componentes que mostram as informações do livro
  const book_info = criarElemento('div', {
    className: 'book-info',
    children: [
      criarElemento('img', {
        attributes: { src: image_url, alt: 'capa do livro', class: 'book-image' },
      }),
      criarElemento('div', {
        className: 'book-details',
        children: [
          criarElemento('p', { text: title, className: 'book-details-title' }),
          criarElemento('div', {
            className: 'book-details-rate',
            children: [
              criarElemento('p', { text: reviewsStars.toString() }),
              criarElemento('div', {
                className: 'book-details-rate-stars',
                children: starRatingElements,
              }),
              criarElemento('p', {
                text: `(${formatarNumero(reviewsAmount)})`,
                className: 'book-details-rate-amount',
              }),
            ],
          }),
          criarElemento('p', {
            text: `<strong>Autor do Livro:</strong> <a href="./autor.html?autorId=${author.id}">${author.name}</a>`,
            className: 'book-details-author',
          }),
          criarElemento('p', {
            text: `<strong>Categoria:</strong> ${category}`,
            className: 'book-details-author',
          }),
          criarElemento('div', {
            className: 'book-details-description',
            children: [
              criarElemento('strong', { text: 'Descrição:' }),
              criarElemento('p', { text: desc }),
            ],
          }),
        ],
      }),
    ],
  });

  // Constrói os componentes que mostram as informações de compra
  const purchase_info = criarElemento('div', {
    className: 'purchase-info',
    children: [
      criarElemento('div', {
        className: 'purchase-price',
        children: [
          criarElemento('p', {
            text: `com <span class='purchase-price-discount-percent'>${price.discount}%</span> off`,
            className: 'purchase-price-discount',
          }),
          criarElemento('p', {
            text: formatarDinheiroComDesconto(price),
            className: 'purchase-price-promotion',
          }),
          criarElemento('p', {
            text: `originalmente por <span class='purchase-price-original-amount'>${formatarDinheiro(
              price
            )}</span>`,
            className: 'purchase-price-original',
          }),
        ],
      }),
      criarElemento('div', {
        className: 'purchase-shipping',
        children: [
          criarElemento('p', {
            text: `<strong>Entrega:</strong> ${
              delivery.amount == 0 ? 'GRÁTIS' : formatarDinheiro(delivery)
            }`,
          }),
          criarElemento('p', {
            text: `Estimativa de entrega <strong>${calcularDataComDias(delivery.days)}</strong>`,
            className: 'purchase-shipping-estimated',
          }),
          criarElemento('p', {
            text: 'entrega para todo o país!',
            className: 'purchase-shipping-radius',
          }),
        ],
      }),
      criarElemento('div', {
        className: 'purchase-amount',
        children: [
          criarElemento('strong', { text: 'Quantidade:' }),
          criarElemento('input', {
            attributes: { type: 'number', placeholder: '1', value: '1', min: 1, max: 10 },
          }),
        ],
      }),
      criarElemento('div', {
        className: 'purchase-buttons',
        children: [
          criarElemento('div', { text: 'Comprar agora', className: 'purchase-button' }),
          criarElemento('div', {
            text: 'Adicionar ao Carrinho',
            className: 'purchase-button bg--purple-3',
          }),
        ],
      }),
    ],
  });

  // Constrói um novo componente que encapsula os outros componentes e retorna eles
  return criarElemento('div', {
    className: 'info-container',
    children: [book_info, purchase_info],
  });
}

// Adiciona o elemento html do livro na página
bookElement.appendChild(createInfoElement(bookData));
