const pages = [
  {
    showMenu: 'cursos',
    label: 'Cursos',
    href: '/courses',
  },
  {
    label: 'Analises de Partidas',
    href: '/analyses',
  },
  {
    label: 'Sobre',
    href: '/about',
  },
  {
    label: 'Fale Conosco',
    href: '/contact',
  },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
  },
]

const aboutSections = [
  {
    title: 'Sobre a Empresa',
    description:
      'Somos apaixonados pelo xadrez e acreditamos que essa antiga arte do pensamento estratégico pode transformar vidas. Fundada com o objetivo de proporcionar uma experiência única de aprendizado, nossa empresa é dedicada a oferecer cursos de xadrez de alta qualidade, ministrados por mestres experientes e renomados.',
    image:
      'https://images.unsplash.com/photo-1693398785859-acff17ccf491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzc2luZXNzLGNoZXNzfHx8fHx8MTcwNDk5MDcxMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
  {
    title: 'Nossa Missão',
    description:
      'Nossa missão é democratizar o acesso ao conhecimento do xadrez, tornando-o acessível a todos, independentemente do nível de habilidade. Buscamos inspirar e capacitar nossos alunos a atingirem seu potencial máximo no xadrez, proporcionando uma plataforma educacional inovadora, envolvente e eficaz.',
    image:
      'https://images.unsplash.com/photo-1628867577980-a737edf95e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzc2luZXNzLGNoZXNzfHx8fHx8MTcwNDk5MDc0MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
  {
    title: 'Nossa Visão',
    description:
      'Vislumbramos um mundo onde o xadrez não é apenas um jogo, mas uma ferramenta poderosa para o desenvolvimento pessoal e cognitivo. Nossa visão é ser líderes no fornecimento de recursos educacionais de xadrez, criando uma comunidade global de jogadores apaixonados e aprendizes constantes.',
    image:
      'https://images.unsplash.com/photo-1633365087123-b3f2c305769a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzc2luZXNzLGNoZXNzfHx8fHx8MTcwNDk5MDc3OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
  {
    title: 'Nossos Valores',
    description:
      'Os valores que nos guiam incluem a excelência no ensino do xadrez, a inovação constante em métodos pedagógicos, a inclusividade para todos os interessados no jogo e o compromisso com a construção de uma comunidade educacional positiva e colaborativa.',
    image:
      'https://images.unsplash.com/photo-1628867578140-8af657ea0b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzc2luZXNzLGNoZXNzfHx8fHx8MTcwNDk5MDc4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
  },
]

const testimonials = [
  {
    name: 'Laura Mendes',
    text: 'Os cursos proporcionaram uma revolução no meu jogo! Com a orientação de mestres renomados, consegui elevar meu rating e, mais importante, minha compreensão estratégica. Recomendo a todos os apaixonados pelo xadrez.',
    image: 'https://source.unsplash.com/random?person&1/100x100',
  },
  {
    name: 'Carlos Oliveira',
    text: 'Uma experiência transformadora! A Professora Ana Oliveira desmistificou as aberturas para mim, tornando meu jogo mais confiante e sólido. Estou grato por essa jornada de aprendizado!',
  },
  {
    name: 'Ana Silva',
    text: 'Treinar com o Grande Mestre Ricardo Santos foi um divisor de águas. Seus insights e dicas práticas melhoraram minha abordagem tática, levando meu jogo para um nível superior. Uma escolha definitivamente acertada!',
    image: 'https://source.unsplash.com/random?person&2/100x100',
  },
  {
    name: 'Rafael Rocha',
    text: 'A Mestra Clara Rocha vai além das jogadas. Sua abordagem focada na psicologia do xadrez me deu uma vantagem mental notável. Aprendi a antecipar movimentos e a entender a mente do meu oponente. Uma experiência enriquecedora!',
    image: 'https://source.unsplash.com/random?person&3/100x100',
  },
  {
    name: 'Joana Oliveira',
    text: 'Estou encantado com a qualidade dos cursos. Mestre Felipe Silva oferece uma perspectiva única, tornando cada lição valiosa. Minha jornada no xadrez ganhou clareza e propósito. Recomendo a todos os entusiastas!',
  },
  {
    name: 'Lucas Silva',
    text: 'Iniciei minha jornada com o Professor Silva e, desde então, meu jogo nunca mais foi o mesmo. As estratégias que aprendi elevaram meu xadrez a um novo patamar. Sinto-me mais confiante a cada partida.',
    image: 'https://source.unsplash.com/random?person&4/100x100',
  },
  {
    name: 'Isabela Rocha',
    text: 'A Professora Oliveira tornou as aberturas do xadrez tão acessíveis! Sua abordagem clara e didática me deu uma compreensão profunda dos movimentos iniciais. Estou ansiosa para continuar aprendendo com ela.',
    image: 'https://source.unsplash.com/random?person&5/100x100',
  },
  {
    name: 'Gabriel Santos',
    text: 'Treinar com o GM Ricardo Santos foi uma oportunidade única. Sua experiência internacional e insights estratégicos trouxeram uma nova dimensão ao meu jogo. Recomendo a todos os que buscam a excelência.',
    image: 'https://source.unsplash.com/random?person&1/100x100',
  },
  {
    name: 'Amanda Rocha',
    text: 'A Mestra Clara Rocha não apenas me ensinou táticas avançadas, mas também como entender o pensamento do meu oponente. Isso fez toda a diferença em minhas partidas. Recomendo totalmente!',
    image: 'https://source.unsplash.com/random?person&6/100x100',
  },
  {
    name: 'Daniel Oliveira',
    text: 'Graças aos cursos, meu entendimento das estratégias de meio de jogo e finais melhorou consideravelmente. Estou mais confiante em todas as fases do jogo, tudo graças ao Mestre Felipe Silva e sua abordagem única.',
    image: 'https://source.unsplash.com/random?person&7/100x100',
  },
  {
    name: 'Camila Silva',
    text: 'A Professora Ana Oliveira é uma verdadeira especialista em aberturas. Seu conhecimento detalhado e a maneira como ela simplifica os conceitos complexos tornam as aulas extremamente valiosas. Não posso recomendar o suficiente!',
    image: 'https://source.unsplash.com/random?person&8/100x100',
  },
  {
    name: 'Lucas Oliveira',
    text: 'Treinar com o GM Ricardo Santos é como ter uma aula com um verdadeiro mestre. Seu conhecimento profundo e perspicácia tática me fizeram perceber aspectos do jogo que eu nunca havia considerado antes. Excelente experiência!',
    image: 'https://source.unsplash.com/random?person&9/100x100',
  },
  {
    name: 'Mariana Rocha',
    text: 'A Mestra Clara Rocha trouxe um novo entendimento ao meu jogo, especialmente na psicologia do xadrez. Suas lições sobre como entender o oponente fazem com que minhas partidas se destaquem. Recomendo totalmente!',
    image: 'https://source.unsplash.com/random?person&10/100x100',
  },
  {
    name: 'Rodrigo Santos',
    text: 'Meu jogo evoluiu de maneiras que eu não imaginava serem possíveis, tudo graças às lições do Mestre Felipe Silva. Seu estilo de ensino envolvente e foco nas estratégias práticas tornam cada aula inestimável.',
    image: 'https://source.unsplash.com/random?person&11/100x100',
  },
  {
    name: 'Isadora Oliveira',
    text: 'A Professora Ana Oliveira tornou as aberturas do xadrez fascinantes e compreensíveis. Sua paixão pelo ensino é evidente em cada aula, e isso fez uma enorme diferença em meu jogo. Estou muito satisfeita!',
    image: 'https://source.unsplash.com/random?person&12/100x100',
  },
  {
    name: 'Pedro Silva',
    text: 'Treinar com o GM Ricardo Santos foi uma experiência que mudou meu jogo. Sua visão estratégica e dicas práticas fizeram uma diferença notável na minha abordagem ao xadrez. Estou ansioso para aprender mais!',
    image: 'https://source.unsplash.com/random?person&13/100x100',
  },
  {
    name: 'Juliana Rocha',
    text: 'A Mestra Clara Rocha tem um dom especial para ensinar as complexidades do xadrez. Sua abordagem prática e focada na psicologia do jogo foram cruciais para meu progresso. Uma mestra inspiradora!',
    image: 'https://source.unsplash.com/random?person&14/100x100',
  },
]

const faq = [
  {
    id: '1',
    title: 'Como faço para me inscrever nos cursos?',
    content:
      'Basta clicar no botão "Inscreva-se" na página principal e seguir as instruções simples. Após a inscrição, você terá acesso imediato a todas as aulas e materiais do curso escolhido.',
  },
  {
    id: '2',
    title: 'Quanto tempo leva para concluir um curso?',
    content:
      'A duração de cada curso varia, mas em média, os alunos concluem os cursos fundamentais em cerca de 6 a 8 semanas. No entanto, você pode aprender no seu próprio ritmo, e o acesso ao conteúdo fica disponível mesmo após a conclusão.',
  },
  {
    id: '3',
    title: 'Os cursos são adequados para iniciantes?',
    content:
      'Sim, absolutamente! Oferecemos cursos que atendem a todos os níveis de habilidade, desde iniciantes até jogadores avançados. Cada curso é estruturado para fornecer uma base sólida e, ao mesmo tempo, desafiar jogadores mais experientes.',
  },
  {
    id: '4',
    title: 'Posso acessar os cursos em dispositivos móveis?',
    content:
      'Sim, os cursos são otimizados para serem acessados em dispositivos móveis, proporcionando flexibilidade para aprender em qualquer lugar. Basta fazer login na sua conta em nosso site e começar a aprender no seu smartphone ou tablet.',
  },
  {
    id: '5',
    title: 'Existe suporte disponível durante o curso?',
    content:
      'Certamente! Nossos instrutores estão disponíveis para responder às suas dúvidas e fornecer orientações adicionais durante todo o curso. Além disso, temos uma comunidade ativa onde os alunos podem interagir e trocar experiências.',
  },
  {
    id: '6',
    title: 'Posso fazer perguntas específicas sobre jogadas?',
    content:
      'Sim, incentivamos os alunos a participar ativamente. Você pode fazer perguntas específicas sobre jogadas, estratégias ou qualquer aspecto do jogo. Nossos instrutores terão prazer em fornecer esclarecimentos detalhados.',
  },
  {
    id: '7',
    title: 'Os cursos oferecem certificados de conclusão?',
    content:
      'Sim, ao concluir com sucesso um curso, você receberá um certificado de conclusão. Este certificado reconhece o seu comprometimento com aprimorar suas habilidades no xadrez e pode ser uma adição valiosa ao seu currículo.',
  },
]

export { pages, socials, aboutSections, testimonials, faq }
