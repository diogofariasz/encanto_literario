// Verifica se a função criarElemento está definida

// Seleciona o elemento contêiner
const livrosContainerElement = document.querySelector('tbody');

// Verifica se o contêiner existe antes de adicionar elementos a ele
if (livrosContainerElement) {
  booksData.forEach((bookData) => {
    const bookElement = criarElemento('tr', {
      children: [
        criarElemento('td', { text: bookData.id }),
        criarElemento('td', { text: bookData.title }),
        criarElemento('td', { text: formatarDinheiro(bookData.price) }),
        criarElemento('td', { text: bookData.image_url }),
        criarElemento('td', { text: bookData.author.name }),
        criarElemento('td', { text: bookData.category }),
        criarElemento('td', { text: bookData.desc }),
      ],
    });

    livrosContainerElement.appendChild(bookElement);

    bookElement.addEventListener('click', () => {
      const modal = getModalByClassName('crud-options');

      modal.openModal();
    });
  });
} else {
  console.error('Elemento .livros-container não encontrado');
}
