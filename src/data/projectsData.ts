interface Project {
  id: 'supermercado' | 'catalogo' | 'css' | 'portfolio' | 'filmes' | 'pet-shop';
  name: string;
  description: string;
  image: string;
  link: string;
  functions: Record<string, string>;
  mainLabel?: string;
  labels: string[];
  resources?: string[];
}

export const projectsData: Project[] = [
  {
    id: 'supermercado',
    name: 'Supermercado Do Bom',
    description:
      'Simula o processo completo de compra de um app de supermercado. Tem uma API integrada para login com google e para captura de endereço por coordenadas.',
    image: './projects/',
    link: 'https://supermercadodobom.netlify.app/',
    functions: {
      '': '',
    },
    mainLabel: 'Firebase',
    labels: ['Node.js', 'Express', 'Styled Components'],
    resources: [''],
  },
  {
    id: 'catalogo',
    name: 'Catálogo de Roupas',
    description: '',
    image: './projects/',
    link: '',
    functions: {
      '': '',
    },
    mainLabel: 'Next.js',
    labels: ['TypeScript', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    id: 'css',
    name: 'Gerador de CSS',
    description:
      'Um site para criar o CSS da hierarquia tipográfica do seu projeto, gerar estilos para botões e definir as cores neutras da sua paleta, como foreground e muted-foreground. Permite obter estilos gerados dinamicamente, bem como estilos fixos recomendados para qualquer projeto. Inspira a normalização e a estruturação de estilos.',
    image: './projects/gerador-de-css.png',
    link: 'https://geradordecss.netlify.app/',
    functions: {
      '': '',
    },
    mainLabel: 'Tailwind CSS',
    labels: ['Radix UI'],
  },
  {
    id: 'portfolio',
    name: 'Portfólio',
    description: '',
    image: './projects/',
    link: '',
    functions: {
      '': '',
    },
    mainLabel: 'Tailwind CSS',
    labels: ['JavaScript', 'Shadcn UI'],
  },
  {
    id: 'filmes',
    name: 'Meus filmes favoritos',
    description:
      'Confira uma lista de filmes calmos para pessoas empáticas e reflexivas, que valorizam a história, a justiça e a fé em ideais.',
    image: './projects/filmes-favoritos.png',
    link: 'https://filmesfavoritos.netlify.app/',
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
    functions: {
      '': '',
    },
    labels: ['Tailwind CSS', 'Radix UI'],
  },
];
