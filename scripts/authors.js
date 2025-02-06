const authorsContainers = document.querySelector('.authors-container');

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

// Funcionalidade de scroll
const nxtBtn = document.querySelector('.next-btn');
const preBtn = document.querySelector('.previous-btn');

let containerDimensions = authorsContainers.getBoundingClientRect();
let containerWidth = containerDimensions.width;

nxtBtn.addEventListener('click', () => {
  authorsContainers.scrollLeft += containerWidth;
});

preBtn.addEventListener('click', () => {
  authorsContainers.scrollLeft -= containerWidth;
});