const livros = [
  {
    title: 'Manual de assassinato para boas garotas: 1',
    assessment: {
      value: 5.0,
      amount: 100,
    },
    price: {
      amount: 59.9,
      discount: 31,
      currency: 'BRL',
    },
    shipping: {
      amount: 10.0,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/71fE-JgveUL._AC_UF1000,1000_QL80_.jpg',
    author: 'Holly Jackson',
    category: 'Investigação',
    desc: 'Todos em Little Kilton conhecem essa história. Andie Bell, a garota mais bonita e popular da escola, foi assassinada pelo namorado, Sal Singh, que se suicidou após o crime. Na época, não se falava em outra coisa. Cinco anos depois, Pip ainda vê as marcas que a tragédia deixou na cidade, desde as matérias tendenciosas da imprensa local até o ostracismo da família das vítimas. Mas a garota tem a impressão de que há peças faltando nesse quebra-cabeça. Ela conhecia Sal desde a infância, e ele sempre foi gentil. Por que teria se tornado um assassino? E será que Andie era mesmo tão angelical quanto a imagem construída após a sua morte? Prestes a se formar no Ensino Médio, Pip decide analisar o crime em seu projeto de conclusão de curso e questionar alguns pontos da versão oficial. Porém, quando a pesquisa revela segredos aterrorizantes, ela percebe que se aproximar da verdade pode custar sua vida.',
  },
  {
    title: 'A paciente silenciosa',
    assessment: {
      value: 4.8,
      amount: 100,
    },
    price: {
      amount: 59.9,
      discount: 22,
      currency: 'BRL',
    },
    shipping: {
      amount: 10.0,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/91R8S52UP6L._SL1500_.jpg',
    author: 'Alex Michaelides',
    category: 'Mistério',
    desc: 'Após cometer o assassinado de seu marido, uma mulher se recusa a falar qualquer coisa, deixando suspeitas e mistérios não resolvidos sobre o caso. E o terapeuta Theo Faber  está obcecado em descobrir o motivo da violencia e do silencio. Só ela sabe o que aconteceu. Só ele pode fazê-la falar.  A paciente silenciosa é um daqueles livros que não saem da cabeça do leitor, quer ele queira, quer não.',
  },
  {
    title: 'A sutil arte de ligar o f*da-se',
    assessment: {
      value: 2.5,
      amount: 666,
    },
    price: {
      amount: 50.0,
      discount: 5,
      currency: 'BRL',
    },
    shipping: {
      amount: 0.0,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/6175IU0qFgL._SL1000_.jpg',
    author: 'Mark Manson',
    category: 'Autoajuda',
    desc: 'Coaching, autoajuda, desenvolvimento pessoal, mentalização positiva - sem querer desprezar o valor de nada disso, a grande verdade é que às vezes nos sentimos quase sufocados diante da pressão infinita por parecermos otimistas o tempo todo. É um pecado social se deixar abater quando as coisas não vão bem. Ninguém pode fracassar simplesmente, sem aprender nada com isso. Não dá mais. É insuportável. E é aí que entra a revolucionária e sutil arte de ligar o foda-se. Mark Manson usa toda a sua sagacidade de escritor e seu olhar crítico para propor um novo caminho rumo a uma vida melhor, mais coerente com a realidade e consciente dos nossos limites. E ele faz isso da melhor maneira. Como um verdadeiro amigo, Mark se senta ao seu lado e diz, olhando nos seus olhos: você não é tão especial. Ele conta umas piadas aqui, dá uns exemplos inusitados ali, joga umas verdades na sua cara e pronto, você já se sente muito mais alerta e capaz de enfrentar esse mundo cão. Para os céticos e os descrentes, mas também para os amantes do gênero, enfim uma abordagem franca e inteligente que vai ajudar você a descobrir o que é realmente importante na sua vida, e f*da-se o resto. Livre-se agora da felicidade maquiada e superficial e abrace esta arte verdadeiramente transformadora.',
  },
  {
    title: 'A sutil arte de atrair',
    assessment: {
      value: 0.5,
      amount: 666,
    },
    price: {
      amount: 29.9,
      discount: 10,
      currency: 'BRL',
    },
    shipping: {
      amount: 10.0,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/51g71VzvZ6L._SL1201_.jpg',
    author: ' Lucas Scudeler',
    category: 'Autoajuda',
    desc: 'Em um mundo onde as interações estão cada vez mais superficiais, A sutil arte de atrair oferece um guia passo a passo para mulheres que desejam atrair um parceiro honrado ou fortalecer o magnetismo em seus relacionamentos. Com mais de 100 técnicas comprovadas, este livro revela como entender o funcionamento da mente masculina e como conquistar a atenção dos homens sem precisar apelar para a futilidade.',
  },
  {
    title: 'A psicologia financeira',
    assessment: {
      value: 4.0,
      amount: 214,
    },
    price: {
      amount: 49.9,
      discount: 36,
      currency: 'BRL',
    },
    shipping: {
      amount: 10.0,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/81ehvI03NYS._SL1500_.jpg',
    author: 'Morgan Housel',
    category: 'Educação financeira',
    desc: 'O sucesso financeiro tem menos a ver com a sua inteligência e muito mais a ver com o seu comportamento. E a forma como alguém se comporta é uma coisa difícil de se ensinar, mesmo para pessoas bastante inteligentes. A maneira como lidamos com o dinheiro ― finanças pessoais, investimentos, decisões de negócios ― costuma ser explicada como um campo puramente matemático, no qual dados e fórmulas nos dizem o que fazer. A verdade, porém, é que grandes decisões monetárias não são tomadas diante de uma planilha, mas durante jantares com a família e reuniões com os colegas de trabalho. Além disso, cada uma delas é um reflexo da história pessoal e das dificuldades enfrentadas pelo indivíduo que as tomou. Abordando a gestão financeira de maneira inédita, Morgan Housel apresenta casos de sucessos e fracassos de investidores que demonstram a importância do fator psicológico no gerenciamento das finanças, oferecendo aprendizados para administrar e fazer o dinheiro render em busca do grande objetivo de todos nós: ser feliz. “ [A psicologia Financeira] é uma leitura essencial para qualquer pessoa interessada em administrar melhor seu dinheiro.” ― James Clear, autor do best-seller Hábitos Atômicos',
  },
];
