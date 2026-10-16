// Todas as informações da Body Club ficam aqui. Edite este arquivo para
// atualizar textos, links, horários e fotos sem mexer nos componentes.

export const site = {
  name: "Body Club",
  tagline: "O seu jeito de treinar",
  bio: "Qualidade de vida, mais perto de você.",
  description:
    "Academia completa em Araguari: musculação, circuitos funcionais, Power Bike e avaliação física. Aberta todos os dias, inclusive fins de semana e feriados.",

  address: {
    street: "R. Tupaciguara, 795",
    district: "Ouro Verde",
    city: "Araguari",
    state: "MG",
    zip: "38444-254",
  },

  phone: "(34) 99881-1315",
  email: "bodyclub.bc@gmail.com",
  instagramHandle: "bodyclub_bc",
  instagramFollowers: "6,7 mil",

  rating: {
    google: { score: "4,8", count: 226 },
    wellhub: { score: "4,84", count: 444 },
  },

  links: {
    preCadastro:
      "https://docs.google.com/forms/d/e/1FAIpQLScQMWtzAf_XYGt8p2_tugsUAj_CgyYIBqduC69I8nZ9zmJKVw/viewform",
    primeiroPagamento: "https://app.tecnofit.com.br/ng/online-sale/NzE0Nw",
    trabalheConosco: "https://forms.gle/86gxpV6Zqg9nE5BJ7",
    appIos: "https://apps.apple.com/br/app/tecnofit/id1109478634",
    appAndroid:
      "https://play.google.com/store/apps/details?id=br.com.tecnofit.mobileapp&hl=pt_BR",
    instagram: "https://www.instagram.com/bodyclub_bc/",
    facebook: "https://www.facebook.com/search/top?q=body%20club",
    youtube: "https://www.youtube.com/channel/UCUKER_Aw0vRvXJxJLOnI4Aw",
    whatsapp: "https://api.whatsapp.com/send?phone=5534998811315",
    email: "mailto:bodyclub.bc@gmail.com",
    linktree: "https://linktr.ee/bodyclub.bc",
    wellhub:
      "https://wellhub.com/pt-br/search/partners/body-club-joquei-clube-araguari/",
    googleReviews:
      "https://www.google.com/maps/search/?api=1&query=Body+Club+R.+Tupaciguara+795+Araguari+MG",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Body+Club+R.+Tupaciguara+795+Araguari+MG",
    mapEmbed:
      "https://www.google.com/maps?q=Body+Club,+R.+Tupaciguara,+795+-+Ouro+Verde,+Araguari+-+MG&output=embed",
  },
} as const;

// Horários conforme o Google. day: 0 = domingo ... 6 = sábado.
export const hours = [
  { day: 1, label: "Segunda", open: "05:00", close: "22:00" },
  { day: 2, label: "Terça", open: "05:00", close: "22:00" },
  { day: 3, label: "Quarta", open: "05:00", close: "22:00" },
  { day: 4, label: "Quinta", open: "05:00", close: "22:00" },
  { day: 5, label: "Sexta", open: "05:00", close: "22:00" },
  { day: 6, label: "Sábado", open: "08:00", close: "13:00" },
  { day: 0, label: "Domingo", open: "09:00", close: "12:00" },
];

export const modalidades = [
  {
    title: "Musculação",
    text: "Aparelhos novos, área de peso livre ampla e manutenção em dia. Força, hipertrofia e condicionamento com instrutor na sala.",
    image: "/images/modalidades/musculacao.jpg",
  },
  {
    title: "Circuitos funcionais",
    text: "Treinos em circuito que trabalham o corpo inteiro, com o instrutor acompanhando a execução de perto.",
    image: "/images/modalidades/funcional.jpg",
  },
  {
    title: "Power Bike",
    text: "Bike indoor para queimar calorias, ganhar fôlego e treinar no ritmo da turma.",
    image: "/images/modalidades/power-bike.jpg",
  },
  {
    title: "Avaliação física",
    text: "Bioimpedância, medidas e composição corporal registradas para você enxergar a evolução e ajustar o treino.",
    image: "/images/modalidades/avaliacao.jpg",
  },
  {
    title: "Personal trainer",
    text: "Acompanhamento individual com profissionais da casa, do primeiro dia ao próximo objetivo.",
    image: "/images/modalidades/personal.jpg",
  },
  {
    title: "Nutricionista",
    text: "Avaliação nutricional à parte para alinhar o que você come com o que você treina.",
    image: "/images/modalidades/nutricao.jpg",
  },
];

export const estrutura = [
  { title: "Vestiário amplo com chuveiro", text: "Limpo, espaçoso e com armários." },
  { title: "Espaço kids", text: "Traga as crianças e treine com tranquilidade." },
  { title: "Wi-Fi", text: "Para a playlist não parar no meio da série." },
  { title: "Loja na recepção", text: "Bebidas não alcoólicas e camisetas Body Club." },
  { title: "App Tecnofit", text: "Treino no celular, evolução registrada e pontos acumulados." },
  { title: "Wellhub", text: "Usuários a partir do plano Basic+ treinam aqui." },
  { title: "Sem agendamento", text: "Chegou, treinou. Musculação e circuitos sem hora marcada." },
];

// Galeria: coloque as fotos em /public/images/galeria com estes nomes
// (ou altere os caminhos). Fotos que não existirem aparecem como espaço reservado.
export const galeria = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/images/galeria/${n}.jpg`, alt: `Body Club, foto ${i + 1}` };
});

export const avaliacoes = [
  {
    name: "Victor",
    when: "2 meses atrás",
    text: "Ambiente limpo, organizado, equipamentos de qualidade e uma equipe muito atenciosa. Destaque especial para a treinadora Cristina: prestativa, paciente e motivadora. Graças ao apoio dela, meus treinos têm sido muito melhores.",
  },
  {
    name: "Lucas Augusto Inez",
    when: "3 meses atrás",
    text: "Academia impecável! Estrutura excelente, ambiente agradável e uma personal muito atenciosa, dedicada e profissional. O acompanhamento faz toda a diferença.",
  },
  {
    name: "Fernando Sousa",
    when: "3 anos atrás",
    text: "Moro em Uberlândia, vim a trabalho e treinei um dia. Fiquei impressionado com a estrutura, a cordialidade dos instrutores e o vestiário limpo e amplo. Tem muita academia em Uberlândia que não tem essa estrutura!",
  },
  {
    name: "Flaviane Cruz",
    when: "7 meses atrás",
    text: "Academia com aparelhos novos, instrutores muito bons, auxiliam muito. Dandara é uma recepcionista muito profissional, atende muito bem todos os alunos.",
  },
  {
    name: "Letícia Marques",
    when: "3 anos atrás",
    text: "Aparelhos novos. Treinadores atenciosos e prestativos. Funciona todos os dias, inclusive fins de semana e feriados. Aplicativo para acompanhar treinos e acumular pontos.",
  },
  {
    name: "Caio César",
    when: "3 anos atrás",
    text: "Ambiente super limpo, ventilado, aparelhos todos novinhos, super bem estruturado. Os treinadores são bem profissionais e cordiais. Nota 10.",
  },
  {
    name: "Dalirrana Souza",
    when: "4 anos atrás",
    text: "Academia muito boa, os aparelhos estão em boas condições, manutenção bem feita, instrutores atenciosos. Ótimo local, parabéns!",
  },
  {
    name: "Luciana Costa",
    when: "5 anos atrás",
    text: "Excelente academia com ótimos profissionais.",
  },
  {
    name: "Danisilxs",
    when: "6 meses atrás",
    text: "Estrutura ótima.",
  },
];
