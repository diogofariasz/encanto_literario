const id = url.searchParams.get('autorId'); // Pega o id do autor que está na url

const authorData = authorsData.find((author) => author.id == id); // Dados do autor

// Elemento onde vai estar as informações
const authorElement = document.querySelector('.author');

function createInfoElement({ id, name, image_url, bio }) {
  return criarElemento('div', {
    className: 'author-container',
    children: [
      criarElemento('img', {
        className: 'author-profile',
        attributes: { src: image_url, alt: `Foto de ${name}` },
      }),
      criarElemento('div', {
        className: 'author-info',
        children: [
          criarElemento('h2', { className: 'author-info-name', text: name }),
          criarElemento('p', { className: 'author-info-bio', text: bio })
        ],
      }),
    ],
  });
}

authorElement.appendChild(createInfoElement(authorData))