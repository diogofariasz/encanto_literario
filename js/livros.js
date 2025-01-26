const url = new URL(window.location.href);
const filter = url.searchParams.get('filter');

function criarLivro({ id, title, image_url, assessment, price, shipping }) {
  const { value: estrelas, amount: totalAvaliacoes } = assessment;
  const estrelasInteiras = Math.floor(estrelas);
  const meiaEstrela = possuiCasasDecimais(estrelas);

  const avaliacoesEstrelas = Array.from({ length: 5 }, (_, i) => {
    if (i < estrelasInteiras) return Imagem('./assets/icons/star.svg', 'Estrela cheia');
    if (i === estrelasInteiras && meiaEstrela)
      return Imagem('./assets/icons/half-star.svg', 'Meia estrela');
    return Imagem('./assets/icons/gray-star.svg', 'Estrela cinza');
  });

  const estimativaDeEntrega = calcularDataComDias(shipping.days).split(', ');

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
            children: avaliacoesEstrelas,
          }),
          Span(`(${formatarNumero(totalAvaliacoes)})`, 'avaliacao-quantidade'),
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
        `Frete ${shipping.amount === 0.0 ? 'GRÁTIS' : formatarDinheiro(shipping)}`,
        'livro-frete'
      ),
      Paragrafo(
        `Receba até ${Strong(estimativaDeEntrega[0], 'livro-entrega').outerHTML}, ${estimativaDeEntrega[1]}`,
        'livro-entrega'
      ),
    ],
  });
}

const elementoLivros = document.querySelector('.livros-container');

// const ordenarPorPiorAvaliado = (a, b) =>  a.assessment.value - b.assessment.value
const ordenarPorMelhorAvaliado = (a, b) => b.assessment.value - a.assessment.value;

const livrosOrdenados = livros.slice().sort(ordenarPorMelhorAvaliado);

if (filter) {
  const compareFilter = filter.toLowerCase()

  livrosOrdenados.forEach((livro) => {
    if (compareFilter === livro.category.toLocaleLowerCase()) 
      elementoLivros.appendChild(criarLivro(livro));
  });
} else {
  livrosOrdenados.forEach((livro) => elementoLivros.appendChild(criarLivro(livro)));
}
