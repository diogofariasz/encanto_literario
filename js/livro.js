const url = new URL(window.location.href);
const id = url.searchParams.get('id');

const livro = livros.find(livro => livro.id == id)
const livroElemento = document.querySelector(".livro")

function criarLivro() {
  return Imagem(livro.image_url, 'capa do livro')
}

livroElemento.appendChild(criarLivro())