const url = new URL(window.location.href);
const id = url.searchParams.get('id');

const livro = livros.find((livro) => livro.id == id);
const livroElemento = document.querySelector('.livro');

function criarLivro() {
  const { value: estrelas, amount: totalAvaliacoes } = livro.assessment;
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
      Imagem(livro.image_url, 'capa do livro'),
      Div({
        className: 'book-details',
        children: [
          Paragrafo(livro.title, 'book-details-title'),
          Div({ className: 'book-details-rate', children: avaliacoesEstrelas }),
          Paragrafo(`${Strong('Autor do Livro:').outerHTML} ${livro.author}`, 'book-details-title'),
          Div({
            className: 'book-details-description',
            children: [Strong('Descrição:'), Paragrafo(livro.desc)],
          }),
        ],
      }),
    ],
  });

  const purchase_info = Div({
    className: 'purchase-info',
    children: [],
  });

  return Div({
    className: 'info-container',
    children: [book_info, purchase_info],
  });
}

//

livroElemento.appendChild(criarLivro());
