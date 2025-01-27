const url = new URL(window.location.href);
const id = url.searchParams.get('id');

const livro = books.find((livro) => livro.id == id);
const livroElemento = document.querySelector('.livro');

function criarLivro({ title, author, category, price, delivery, image_url, desc, reviews }) {
  const { stars: estrelas, amount: totalAvaliacoes } = reviews;
  const estrelasInteiras = Math.floor(estrelas);
  const meiaEstrela = possuiCasasDecimais(estrelas);

  const avaliacoesEstrelas = Array.from({ length: 5 }, (_, i) => {
    if (i < estrelasInteiras) return Imagem('./assets/icons/star.svg', 'Estrela cheia');
    if (i === estrelasInteiras && meiaEstrela)
      return Imagem('./assets/icons/half-star.svg', 'Meia estrela');
    return Imagem('./assets/icons/gray-star.svg', 'Estrela cinza');
  });

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
              Paragrafo(estrelas),
              Div({ className: 'book-details-rate-stars', children: avaliacoesEstrelas }),
              Paragrafo(`(${formatarNumero(totalAvaliacoes)})`, 'book-details-rate-amount'),
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

  return Div({
    className: 'info-container',
    children: [book_info, purchase_info],
  });
}

//

livroElemento.appendChild(criarLivro(livro));
