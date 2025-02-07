const authorsContainers = document.querySelector('.slider-container');

// Cria um card
function createAuthorCard({ id, name, image_url }) {
  return criarElemento('a', {
    className: 'author-card',
    attributes: { href: `/autor.html?autorId=${id}` },
    children: [
      criarElemento('p', { text: name }),
      criarElemento('img', { attributes: { src: image_url, alt: name } })
    ]
  })
}

// Adiciona os cards
authorsData.forEach(author => {
  authorsContainers.appendChild(createAuthorCard(author))
});

// Aplicando a funcionalidade de slider no authorsContainers
applySlider(authorsContainers)