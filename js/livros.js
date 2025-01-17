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

  return Link({
    className: 'livro',
    href: `/livro.html?id=${id}`,
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
          Span(`(${totalAvaliacoes})`, 'avaliacao-quantidade'),
        ],
      }),
      Div({
        className: 'livro-preco',
        children: [
          Paragrafo(`${formatarDinheiro(price)} ${Span('no pix').outerHTML}`, 'livro-preco-pix'),
          Paragrafo(`com ${price.discount}% de desconto`, 'livro-desconto'),
        ],
      }),
      Paragrafo(
        `Frete ${shipping.amount === 0.0 ? 'GRÁTIS' : formatarDinheiro(shipping)}`,
        'livro-frete'
      ),
      Paragrafo(
        `Receba até ${Strong('quarta-feira', 'livro-entrega').outerHTML}, 22 de jan.`,
        'livro-entrega'
      ),
    ],
  });
}

const elementoLivros = document.querySelector('.livros-container');

// const ordenarPorPiorAvaliado = (a, b) =>  a.assessment.value - b.assessment.value
const ordenarPorMelhorAvaliado = (a, b) => b.assessment.value - a.assessment.value

const livrosOrdenados = livros.slice().sort(ordenarPorMelhorAvaliado);

livrosOrdenados.forEach((livro) => {
  elementoLivros.appendChild(criarLivro(livro));
});
