// No futuro, será obtido por meio de um requisito ao backend.

const authorsData = [
  {
    id: 1,
    name: 'Alex Michaelides',
    image_url: 'https://i.pinimg.com/736x/59/d0/94/59d0948f350fc3941fbb0e85fe324a36.jpg',
    bio: 'Alex Michaelides é nascido e criado no Chipre. Tem mestrado em literatura inglesa pelo Trinity College, da Universidade de Cambridge, e mestrado em roteiro cinematográfico pelo American Film Institute de Los Angeles. Seu primeiro romance, A paciente silenciosa, estreou em primeiro lugar na lista de mais vendidos do New York Times e já vendeu mais de 6,5 milhões de exemplares no mundo. Os direitos de tradução foram licenciados para 52 países, e os direitos de adaptação cinematográfica foram adquiridos pela Plan B. Seu segundo romance, As musas, tornou-se instantaneamente um dos mais vendidos do New York Times e teve os direitos de adaptação televisiva adquiridos pela Miramax Television em parceria com Stone Village.',
  },
  {
    id: 2,
    name: 'Rick Riordan',
    image_url: 'https://i.pinimg.com/736x/73/3b/86/733b8638810a7dfcd4160db157128875.jpg',
    bio: 'Rick Riordan é considerado o “contador de histórias dos deuses” e já vendeu mais de 7 milhões de livros no Brasil. Além das séries Percy Jackson e os olimpianos, que deu origem à produção de sucesso do Disney+, Os heróis do Olimpo e As provações de Apolo, inspiradas na mitologia greco-romana, Riordan assina as séries As crônicas dos Kane, que visita deuses e mitos do Egito Antigo, e Magnus Chase e os deuses de Asgard, sobre mitologia nórdica. Pela Intrínseca, publicou também A filha das profundezas, O sol e a estrela: Uma aventura de Nico di Angelo, escrito em parceria com Mark Oshiro, e O cálice dos deuses, primeiro volume da nova trilogia que narra os desafios e as aventuras de Percy Jackson para entrar na universidade.',
  },
  {
    id: 3,
    name: 'Holly Jackson',
    image_url: 'https://i.pinimg.com/736x/c5/2c/fc/c52cfc722809f976435569c27061d0e9.jpg',
    bio: 'Holly Jackson se tornou autora best-seller do New York Times com a série Manual de assassinato para boas garotas, que vendeu milhões de exemplares em todo o mundo e foi adaptada em uma série de sucesso da BBC, distribuída pela Netflix. É formada na Universidade de Nottingham, onde estudou Linguística Literária e Escrita Criativa, e tem um mestrado em Língua Inglesa. Holly gosta de jogar videogames e assistir a documentários sobre crimes reais para fingir que é uma detetive. Atualmente, mora em Londres. Pela Intrínseca, também publicou Os cinco sobreviventes.',
  },
  {
    id: 4,
    name: 'Mark Manson',
    image_url: 'https://i.pinimg.com/736x/b0/41/08/b041080755b6032ae143d599f7f33e15.jpg',
    bio: 'Mark Manson é autor de A sutil arte de ligar o f*da-se, best-seller global que já teve mais de dez milhões de exemplares vendidos, e de F*deu geral, ambos publicados pela Intrínseca. Com seu jeito irreverente, perspicaz e sem meias palavras, atraiu uma audiência gigantesca para seu blog — markmanson.net —, lido por dois milhões de pessoas mensalmente. Manson mora em Nova York.',
  },
  {
    id: 5,
    name: 'Morgan Housel',
    image_url: 'https://i.pinimg.com/736x/2c/3c/14/2c3c147ba7e2afda65c81d1a4e7856e1.jpg',
    bio: 'Morgan Housel é sócio do The Collaborative Fund e ex-colunista na The Motley Fool Stock Advisor e do The Wall Street Journal. Ele é vencedor de dois Best Business Award da Society of American Business Editors and Writers and Financial Journalism. Mora em Seattle com a esposa e os dois filhos.',
  },
  {
    id: 6,
    name: 'Lucas Scudeler',
    image_url: 'https://i.pinimg.com/736x/46/0d/3e/460d3ee246d2c31c38238464f473a846.jpg',
    bio: 'Lucas é Teólogo, Filósofo e Psicanalista com ênfase em Relacionamentos e já ajudou mais de 18.000 alunos a encontrarem felicidade em suas vidas e em suas relações. Casado há mais de 10 anos e junto de sua esposa desde os 18 anos de idade, pai da Mari, e com milhares de horas de estudos em comportamento humano, Lucas traz uma bagagem única para te mostrar que você também pode ser feliz e realizado(a) em um casamento. Além disso, Lucas é diretor de neurociência da Sociedade Brasileira de Medicina da Obesidade.',
  },
  {
    id: 7,
    name: 'Felipe Neto',
    image_url: 'https://i.pinimg.com/736x/ca/44/d6/ca44d6a81685c4ffa5e90131719532e0.jpg',
    bio: 'Considerado um dos maiores youtubers do Brasil, Felipe Neto batalhou, e muito, para conquistar toda a fama que tem hoje. A explosão do youtuber não se deu do dia para a noite, ao contrário, exigiu muita dedicação e amadurecimento ao longo de sua caminhada. Com mais 20 milhões de inscritos em seu canal, Felipe leva a sério o seu trabalho e nunca falha em seu compromisso diário: levar entretenimento para os seus fãs através de seus vídeos.',
  },
];

const booksData = [
  {
    id: 1,
    title: 'Manual de assassinato para boas garotas: 1',
    reviews: {
      stars: 5.0,
      amount: 1000,
    },
    price: {
      amount: 59.9,
      discount: 31,
      currency: 'BRL',
    },
    delivery: {
      amount: 10.0,
      days: 7,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/71fE-JgveUL._AC_UF1000,1000_QL80_.jpg',
    author: getAuthorById(3),
    category: 'Investigação',
    desc: 'Todos em Little Kilton conhecem essa história. Andie Bell, a garota mais bonita e popular da escola, foi assassinada pelo namorado, Sal Singh, que se suicidou após o crime. Na época, não se falava em outra coisa. Cinco anos depois, Pip ainda vê as marcas que a tragédia deixou na cidade, desde as matérias tendenciosas da imprensa local até o ostracismo da família das vítimas. Mas a garota tem a impressão de que há peças faltando nesse quebra-cabeça. Ela conhecia Sal desde a infância, e ele sempre foi gentil. Por que teria se tornado um assassino? E será que Andie era mesmo tão angelical quanto a imagem construída após a sua morte? Prestes a se formar no Ensino Médio, Pip decide analisar o crime em seu projeto de conclusão de curso e questionar alguns pontos da versão oficial. Porém, quando a pesquisa revela segredos aterrorizantes, ela percebe que se aproximar da verdade pode custar sua vida.',
  },
  {
    id: 2,
    title: 'Percy Jackson e o Ladrão de Raios',
    reviews: {
      stars: 5.0,
      amount: 984,
    },
    price: {
      amount: 64.99,
      discount: 5,
      currency: 'BRL',
    },
    delivery: {
      amount: 10.0,
      days: 6,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/91WN6a6F3RL._SL1500_.jpg',
    author: getAuthorById(2),
    category: 'Fantasia',
    desc: 'Unindo mitologia grega, muita aventura e tramas hilárias, a história de Rick Riordan sobre um adolescente com TDAH que descobre ser filho do deus do mar e precisa navegar entre o mundo humano e o divino se tornou um best-seller e formou uma geração de leitores apaixonados, que até hoje acompanham a saga de Percy e seus amigos. Agora, a Intrínseca relança os cinco livros da série em uma edição com nova arte de capa, muito pedida pelos leitores. As belas ilustrações da artista Victo Ngai acompanham o design da mais nova aventura do semideus, O cálice dos deuses , que chega às livrarias em lançamento mundial no dia 26 de setembro. Nessa primeira aventura da série que conquistou fãs no mundo todo e deu a Riordan o título de “contador de histórias dos deuses”, conhecemos Percy Jackson, um garoto de 12 anos que está prestes a ser expulso do colégio interno. De novo. É a sexta vez que isso acontece. Percy tem que lidar com as consequências do transtorno do déficit de atenção e da dislexia, o que não torna sua vida lá muito fácil. Só que, ultimamente, criaturas fantásticas e os deuses do Monte Olimpo parecem estar saindo dos livros de mitologia grega do colégio para a realidade. Ao que tudo indica, tem um pessoal bem irritado com o pobre garoto. Vários acidentes e revelações inexplicáveis afastam Percy de Nova York, sua cidade, e o lançam em um campo de treinamento muito especial, onde ele é orientado para enfrentar uma missão que envolve humanos diferentes ― metade deuses, metade homens ―, além de seres mitológicos. O raio-mestre de Zeus foi roubado, e é Percy quem deve resgatá-lo. Com a ajuda de novos amigos ― um sátiro e a filha de uma deusa ―, Percy tem dez dias para reaver o raio, que representa a destruição original, e restabelecer a paz no Olimpo. Para conseguir isso, ele precisará fazer mais que capturar um ladrão. Terá que lidar com o pai que o abandonou, resolver uma profecia proposta pelo Oráculo e desvendar uma traição mais ameaçadora que a fúria dos deuses.',
  },
  {
    id: 3,
    title: 'A paciente silenciosa',
    reviews: {
      stars: 4.8,
      amount: 100,
    },
    price: {
      amount: 59.9,
      discount: 22,
      currency: 'BRL',
    },
    delivery: {
      amount: 10.0,
      days: 9,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/91R8S52UP6L._SL1500_.jpg',
    author: getAuthorById(1),
    category: 'Mistério',
    desc: 'Após cometer o assassinado de seu marido, uma mulher se recusa a falar qualquer coisa, deixando suspeitas e mistérios não resolvidos sobre o caso. E o terapeuta Theo Faber  está obcecado em descobrir o motivo da violencia e do silencio. Só ela sabe o que aconteceu. Só ele pode fazê-la falar.  A paciente silenciosa é um daqueles livros que não saem da cabeça do leitor, quer ele queira, quer não.',
  },
  {
    id: 4,
    title: 'A sutil arte de ligar o f*da-se',
    reviews: {
      stars: 2.5,
      amount: 890,
    },
    price: {
      amount: 50.0,
      discount: 5,
      currency: 'BRL',
    },
    delivery: {
      amount: 0.0,
      days: 3,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/6175IU0qFgL._SL1000_.jpg',
    author: getAuthorById(4),
    category: 'Autoajuda',
    desc: 'Coaching, autoajuda, desenvolvimento pessoal, mentalização positiva - sem querer desprezar o valor de nada disso, a grande verdade é que às vezes nos sentimos quase sufocados diante da pressão infinita por parecermos otimistas o tempo todo. É um pecado social se deixar abater quando as coisas não vão bem. Ninguém pode fracassar simplesmente, sem aprender nada com isso. Não dá mais. É insuportável. E é aí que entra a revolucionária e sutil arte de ligar o foda-se. Mark Manson usa toda a sua sagacidade de escritor e seu olhar crítico para propor um novo caminho rumo a uma vida melhor, mais coerente com a realidade e consciente dos nossos limites. E ele faz isso da melhor maneira. Como um verdadeiro amigo, Mark se senta ao seu lado e diz, olhando nos seus olhos: você não é tão especial. Ele conta umas piadas aqui, dá uns exemplos inusitados ali, joga umas verdades na sua cara e pronto, você já se sente muito mais alerta e capaz de enfrentar esse mundo cão. Para os céticos e os descrentes, mas também para os amantes do gênero, enfim uma abordagem franca e inteligente que vai ajudar você a descobrir o que é realmente importante na sua vida, e f*da-se o resto. Livre-se agora da felicidade maquiada e superficial e abrace esta arte verdadeiramente transformadora.',
  },
  {
    id: 5,
    title: 'A sutil arte de atrair',
    reviews: {
      stars: 0.5,
      amount: 1534,
    },
    price: {
      amount: 29.9,
      discount: 10,
      currency: 'BRL',
    },
    delivery: {
      amount: 10.0,
      days: 3,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/51g71VzvZ6L._SL1201_.jpg',
    author: getAuthorById(6),
    category: 'Autoajuda',
    desc: 'Em um mundo onde as interações estão cada vez mais superficiais, A sutil arte de atrair oferece um guia passo a passo para mulheres que desejam atrair um parceiro honrado ou fortalecer o magnetismo em seus relacionamentos. Com mais de 100 técnicas comprovadas, este livro revela como entender o funcionamento da mente masculina e como conquistar a atenção dos homens sem precisar apelar para a futilidade.',
  },
  {
    id: 6,
    title: 'A psicologia financeira',
    reviews: {
      stars: 4.0,
      amount: 214,
    },
    price: {
      amount: 49.9,
      discount: 36,
      currency: 'BRL',
    },
    delivery: {
      amount: 10.0,
      days: 5,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/81ehvI03NYS._SL1500_.jpg',
    author: getAuthorById(5),
    category: 'Educação financeira',
    desc: 'O sucesso financeiro tem menos a ver com a sua inteligência e muito mais a ver com o seu comportamento. E a forma como alguém se comporta é uma coisa difícil de se ensinar, mesmo para pessoas bastante inteligentes. A maneira como lidamos com o dinheiro ― finanças pessoais, investimentos, decisões de negócios ― costuma ser explicada como um campo puramente matemático, no qual dados e fórmulas nos dizem o que fazer. A verdade, porém, é que grandes decisões monetárias não são tomadas diante de uma planilha, mas durante jantares com a família e reuniões com os colegas de trabalho. Além disso, cada uma delas é um reflexo da história pessoal e das dificuldades enfrentadas pelo indivíduo que as tomou. Abordando a gestão financeira de maneira inédita, Morgan Housel apresenta casos de sucessos e fracassos de investidores que demonstram a importância do fator psicológico no gerenciamento das finanças, oferecendo aprendizados para administrar e fazer o dinheiro render em busca do grande objetivo de todos nós: ser feliz. “ [A psicologia Financeira] é uma leitura essencial para qualquer pessoa interessada em administrar melhor seu dinheiro.” ― James Clear, autor do best-seller Hábitos Atômicos',
  },
  {
    id: 7,
    title: 'Como enfrentar o ódio',
    reviews: {
      stars: 1.8,
      amount: 3452,
    },
    price: {
      amount: 69.9,
      discount: 29,
      currency: 'BRL',
    },
    delivery: {
      amount: 34.0,
      days: 6,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/6176SJ7k8hL._SL1500_.jpg',
    author: getAuthorById(7),
    category: 'Autoajuda',
    desc: 'Ainda em 2009, Felipe Neto se tornou um fenômeno da internet no país. Seu conteúdo, agressivo mas bem-humorado, se direcionava inicialmente às tendências da época, mas logo se voltou também à política, em especial ao governo do Partido dos Trabalhadores (PT). No entanto, com o impeachment da ex-presidenta Dilma Rousseff, a crescente aproximação da extrema direita ao poder e o recrudescimento de discursos de ódio contra minorias, Felipe passou a questionar suas convicções. Em Como enfrentar o ódio , ele retrata seu processo de tomada de consciência política ― tão semelhante ao de milhões de brasileiros ― e o papel do ódio em sua vida, primeiro como força propulsora de sua carreira e depois como ferramenta de que ele próprio se tornou vítima, em especial durante o governo de Jair Bolsonaro. Entrelaçando sua história aos principais acontecimentos dos últimos quinze anos e oferecendo uma perspectiva única sobre a internet e seu papel na manipulação dos usuários, Felipe nos convida a usar a boa comunicação para combater o obscurantismo, o retrocesso e o ódio que assola a sociedade.',
  },
  {
    id: 8,
    title: 'Felipe Neto - A Vida por trás das câmeras',
    reviews: {
      stars: 4.3,
      amount: 452,
    },
    price: {
      amount: 19.9,
      discount: 15,
      currency: 'BRL',
    },
    delivery: {
      amount: 8.16,
      days: 2,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/91QW1z-PPNL._SL1500_.jpg',
    author: getAuthorById(7),
    category: 'Infantil',
    desc: 'Prepare-se para uma imersão única na vida de Felipe Neto - um verdadeiro fenômeno da internet! Com quase 20 milhões de inscritos em seu canal e recordes quebrados no YouTube, ele é uma figura icônica que vai além das câmeras. Agora, você terá acesso exclusivo aos bastidores dessa estrela do universo digital! Em Felipe Neto - A vida por trás das câmeras, você descobrirá o Felipe além da persona extrovertida que conquistou milhões de fãs. Conhecerá o Felipe filho, amigo e namorado, desvendando seus segredos, manias, medos e sonhos para o futuro. Prepare-se para se surpreender com histórias nunca antes reveladas e momentos emocionantes que moldaram sua trajetória. Além disso, o livro proporciona uma experiência interativa e divertida. Você poderá se divertir com jogos, mergulhar em curiosidades surpreendentes e decorar seu ambiente com pôsteres exclusivos do Felipe Neto. A cada página, você estará mais próximo desse influenciador que conquistou o coração de milhões de pessoas. Se você já é fã, prepare-se para se apaixonar ainda mais pelo Felipe Neto. Se ainda não o conhece tão bem, essa é a sua chance de desvendar o mistério por trás desse grande fenômeno da internet. Então, embarque nessa jornada fascinante e descubra o Felipe Neto por trás das câmeras!',
  },
  {
    id: 9,
    title: 'A pirâmide vermelha: (Série As Crônicas Dos Kane): 1',
    reviews: {
      stars: 5.0,
      amount: 5692,
    },
    price: {
      amount: 69.9,
      discount: 31,
      currency: 'BRL',
    },
    delivery: {
      amount: 20.0,
      days: 6,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/61rxMph1PfL._SL1005_.jpg',
    author: getAuthorById(2),
    category: 'Fantasia',
    desc: 'Desde a morte da mãe, seis anos atrás, Carter Kane viaja o mundo com o pai, o egiptólogo Dr. Julius Kane. Ele não frequenta a escola e seus pertences cabem em uma única mala. Enquanto isso, Sadie, sua irmã mais nova, é criada pelos avós em Londres. Ela tem tudo o que Carter queria: casa, amigos e uma vida "normal". E ele, o que ela mais deseja: conviver com o pai. Depois de tanto tempo separados, os irmãos não tinham praticamente mais nada em comum.',
  },
  {
    id: 10,
    title: 'O herói perdido: (Série Os Heróis do Olimpo): 1',
    reviews: {
      stars: 5.0,
      amount: 3246,
    },
    price: {
      amount: 69.9,
      discount: 10,
      currency: 'BRL',
    },
    delivery: {
      amount: 20.0,
      days: 6,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/613qEqF6DNL._SL1000_.jpg',
    author: getAuthorById(2),
    category: 'Fantasia',
    desc: 'Novos e conhecidos personagens do Acampamento Meio-Sangue dividem espaço nesse primeiro volume da série Os heróis do Olimpo . Rick Riordan volta ao universo de Percy Jackson e os Olimpianos com ainda mais aventuras, humor e mistério. Depois de salvar o Olimpo do maligno titã Cronos, Percy Jackson e seus amigos trabalharam duro para reconstruir seu mais querido refúgio, o Acampamento Meio-Sangue. É lá que a próxima geração de semideuses terá de se preparar para enfrentar uma nova e aterrorizante profecia. Os campistas seguirão firmes na inevitável jornada, mas, para sobreviver, precisarão contar com a ajuda de alguns heróis, digamos, um pouco mais experientes - semideuses dos quais todos já ouvimos falar... e muito.',
  },
  {
    id: 11,
    title: 'A espada do verão: (Série Magnus Chase e Os Deuses de Asgard): 1',
    reviews: {
      stars: 5.0,
      amount: 3658,
    },
    price: {
      amount: 89.9,
      discount: 10,
      currency: 'BRL',
    },
    delivery: {
      amount: 20.0,
      days: 6,
      currency: 'BRL',
    },
    image_url: 'https://m.media-amazon.com/images/I/71tJyEeubRL._SL1000_.jpg',
    author: getAuthorById(2),
    category: 'Fantasia',
    desc: 'A vida de Magnus Chase nunca foi fácil. Desde a morte da mãe em um acidente misterioso, ele tem vivido nas ruas de Boston, usando de muito jogo de cintura para sobreviver e ficar fora das vistas de policiais e assistentes sociais. Até que um dia ele reencontra tio Randolph - um homem que ele mal conhece e de quem a mãe o mandara manter distância. Randolph é perigoso, mas revela um segredo improvável: Magnus é filho de um deus nórdico. As lendas vikings são reais. Os deuses de Asgard estão se preparando para a guerra. Trolls, gigantes e outros monstros horripilantes estão se unindo para o Ragnarök, o Juízo Final. Para impedir o fim do mundo Magnus deve empreender uma importante jornada até encontrar uma poderosa arma perdida há mais de mil anos. Quando um ataque de gigantes do fogo o força a escolher entre a própria segurança e a vida de centenas de inocentes, Magnus toma uma decisão fatal. Às vezes é necessário morrer para começar uma nova vida... Com personagens já conhecidos do público, como Annabeth Chase, prima de Magnus, e deuses como Thor e Loki, Rick nos apresenta mais uma aventura surpreendente, repleta de ação e humor. A espada do verão é o primeiro livro de Magnus Chase e os deuses de Asgard, a nova trilogia de Rick Riordan, agora sobre mitologia nórdica. Rick Riordan é um dos principais autores para o público jovem da atualidade. Já vendeu no Brasil mais de 5 milhões de exemplares com as séries Percy Jackson e os olimpianos, Os heróis do Olimpo e As crônicas dos Kane, provando o incrível alcance de suas criações.',
  },
];

const usersData = [
  {
    id: 1,
    name: 'Usuário',
    email: 'usuario@gmail.com',
    isAdmin: false,
    password: '12345678',
  },
  {
    id: 2,
    name: 'Admin',
    email: 'admin@gmail.com',
    isAdmin: true,
    password: '12345678',
  },
];

function getBookById(id) {
  return booksData.find((livro) => livro.id == id);
}

function getAuthorById(id) {
  return authorsData.find((author) => author.id == id);
}
