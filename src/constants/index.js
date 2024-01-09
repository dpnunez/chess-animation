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
    title: 'Sobre a empresa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae semper nisl. Sed euismod, nisl vitae aliquam interdum, nisl velit tincidunt elit, vitae ullamcorper lorem leo quis velit. Donec euismod, nisl vitae aliquam interdum, nisl velit tincidunt elit, vitae ullamcorper lorem leo quis velit.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    title: 'Nossa missão',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae semper nisl. Sed euismod, nisl vitae aliquam interdum, nisl velit tincidunt elit, vitae ullamcorper lorem leo quis velit. Donec euismod, nisl vitae aliquam interdum, nisl velit tincidunt elit, vitae ullamcorper lorem leo quis velit.',
    image: 'https://source.unsplash.com/random/800x601',
  },
  {
    title: 'Nossa visão',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae semper nisl. Sed euismod, nisl vitae aliquam interdum, nisl velit tincidunt elit, vitae ullamcorper lorem leo quis velit. Donec euismod, nisl vitae aliquam interdum, nisl velit tincidunt elit, vitae ullamcorper lorem leo quis velit.',
    image: 'https://source.unsplash.com/random/800x602',
  },
  {
    title: 'Nossos valores',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae semper nisl. Sed euismod, nisl vitae aliquam interdum, nisl velit tincidunt elit, vitae ullamcorper lorem leo quis velit. Donec euismod, nisl vitae aliquam interdum, nisl velit tincidunt elit, vitae ullamcorper lorem leo quis velit.',
    image: 'https://source.unsplash.com/random/800x603',
  },
]

const testimonials = [
  {
    name: 'Depoimento 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu convallis, facilisis enim eu, blandit nunc.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 2',
    text: 'Sed gravida, elit ut imperdiet accumsan, ligula ipsum ultricies metus, a luctus enim arcu ut nisi. Nulla facilisi. Aenean auctor, metus at cursus rhoncus, tortor justo congue quam, nec malesuada felis ligula eu elit.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 3',
    text: 'Fusce facilisis urna non sem ultrices, vel fringilla ante malesuada. Nullam bibendum bibendum lacus, nec lacinia orci dignissim in. Maecenas aliquam nisi vel efficitur malesuada.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 4',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis euismod metus a aliquet vehicula. Morbi bibendum orci et scelerisque facilisis.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 5',
    text: 'Vivamus aliquet elit at ligula tincidunt, id bibendum nunc luctus. Nullam feugiat velit vitae nisi semper, sit amet dapibus enim posuere. Nunc congue tortor at justo ullamcorper, id sollicitudin quam pharetra.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 6',
    text: 'Quisque sit amet mauris vitae dolor bibendum hendrerit. Aenean vitae augue sed velit scelerisque luctus non a lacus. Sed malesuada, felis eu volutpat tristique, odio augue scelerisque libero, vel luctus elit odio in ante.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 7',
    text: 'Integer sit amet sapien a felis efficitur fringilla. Nam bibendum augue et odio tempor, at malesuada metus sodales. Curabitur nec hendrerit metus, ac lacinia dui.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 8',
    text: 'Maecenas auctor justo non orci sagittis, eget vulputate ligula tincidunt. In hac habitasse platea dictumst. Sed nec tellus ligula.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 9',
    text: 'Praesent euismod fringilla velit, vel convallis nisi facilisis eu. Suspendisse quis malesuada libero. Nullam interdum, ex a dignissim tempus, tortor lacus pharetra odio, at vestibulum dolor quam et neque.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 10',
    text: 'Vestibulum non risus eu justo fermentum eleifend nec at justo. Pellentesque ut efficitur orci. Quisque pharetra justo et mauris tincidunt, eu efficitur elit euismod.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 11',
    text: 'Cras in arcu nec ligula aliquam aliquam. Ut ac leo vitae elit auctor bibendum. Ut sodales tristique purus, id accumsan elit eleifend et.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 12',
    text: 'Donec ultrices, erat eu convallis viverra, ligula ligula lacinia tellus, eu accumsan dui elit in arcu. Nunc auctor magna vitae dolor blandit, ut iaculis turpis elementum.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 13',
    text: 'Phasellus auctor velit id nulla feugiat tincidunt. Sed nec hendrerit mauris. Sed auctor sagittis purus eu laoreet.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 14',
    text: 'Fusce consectetur, libero vel accumsan ultricies, tortor ex tincidunt purus, eu ultricies neque quam ut arcu. Sed pellentesque fermentum arcu, non tincidunt velit varius vel.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 15',
    text: 'Pellentesque euismod venenatis nibh, nec commodo justo tristique eu. Vivamus finibus ipsum et nisl efficitur, id gravida urna cursus. In hac habitasse platea dictumst.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 16',
    text: 'Curabitur sit amet ipsum a felis fermentum gravida. Sed rhoncus tellus nec cursus aliquet. Nam ac nunc eu felis vehicula ultricies vel nec nisl.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 17',
    text: 'Integer at justo id sapien varius ullamcorper. Nulla facilisi. Morbi euismod ullamcorper elit, vel tristique libero aliquam id.',
    image: 'https://source.unsplash.com/random/800x600',
  },
  {
    name: 'Depoimento 18',
    text: 'Quisque sit amet velit eu dui facilisis consectetur. Sed suscipit, enim eu ultricies cursus, felis metus auctor justo, id vehicula mi quam vel augue.',
    // image: 'https://source.unsplash.com/random/800x600',
  },
]

export { pages, socials, aboutSections, testimonials }
