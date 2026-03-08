interface Project {
  id: 'supermercado' | 'catalogo' | 'css' | 'filmes' | 'pet-shop';
  name: string;
  description: string;
  image: string;
  link: string;
  githubLink?: string;
  functions: Record<string, string>;
  mainLabel?: string;
  labels: string[];
  resources?: string[];
}

export const projectsData: Project[] = [
  {
    id: 'supermercado',
    name: 'supermercado do bom',
    description:
      'Simula o processo de compra de um app de supermercado. Tem uma API integrada para login com Google e para captura de endereço por coordenadas via Google Maps...',
    image: './projects/supermercado.png',
    link: 'https://supermercadodobom.netlify.app/',
    githubLink: 'https://github.com/LeonardoSouzaBento/SupermercadoDoBom',
    functions: {
      '': '',
    },
    mainLabel: 'Styled Components',
    labels: ['Firebase', 'Node.js', 'Express'],
    resources: [''],
  },
  {
    id: 'catalogo',
    name: 'catálogo de roupas',
    description:
      'Um projeto feito em Next.js que permitiria a criação e hospedagem de catálogos de roupas para vários lojistas, todos sob o mesmo domínio...',
    image: './projects/catalogo.png',
    link: 'https://catalogo-de-roupas.vercel.app/',
    githubLink: 'https://github.com/LeonardoSouzaBento/CatalogoDeRoupas',
    functions: {
      '': '',
    },
    mainLabel: 'Next.js',
    labels: ['TypeScript', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    id: 'css',
    name: 'gerador de CSS',
    description:
      'Um site para gerar dinamicamente estilos em CSS para hierarquia tipográfica, para botões e para montar paletas de cores. Inspira a normalização e a estruturação de estilos...',
    image: './projects/gerador-de-css.png',
    link: 'https://geradordecss.netlify.app/',
    githubLink: 'https://github.com/LeonardoSouzaBento/GeradorDeCSS',
    functions: {
      '': '',
    },
    mainLabel: 'Tailwind CSS',
    labels: ['Radix UI'],
  },
  {
    id: 'filmes',
    name: 'meus filmes favoritos',
    description:
      'Confira uma lista de filmes calmos para pessoas empáticas e reflexivas, que valorizam a história, a justiça e a fé em ideais.',
    image: './projects/filmes-favoritos.png',
    link: 'https://filmesfavoritos.netlify.app/',
    githubLink: 'https://github.com/LeonardoSouzaBento/MeusFilmesFavoritos',
    functions: {
      '': '',
    },
    mainLabel: 'HTML e CSS',
    labels: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'pet-shop',
    name: 'Leo Pet Shop',
    description:
      'A landing page de visual belíssimo do grupo Leo Pet Shop. Feita para gerar conversões para o WhatsApp da empresa.',
    image: './projects/leopetshop.png',
    link: 'https://leopetshop.netlify.app',
    githubLink: 'https://github.com/LeonardoSouzaBento/Pet-ShopLandingPage',
    functions: {
      '': '',
    },
    labels: ['Tailwind CSS', 'Radix UI'],
  },
];
