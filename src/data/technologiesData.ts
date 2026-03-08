import { iconPaths } from './imageIconPaths';

const technologiesData = [
  {
    id: 'front',
    title: 'Front-End',
    list: [
      'React, Next.js, JavaScript e TypeScript',
      'CSS, Tailwind CSS e Styled Components',
      'Shadcn UI',
    ],
    icons: [
      iconPaths.javascript,
      iconPaths.typescript,
      iconPaths.nextJs,
      iconPaths.tailwindCSS,
      iconPaths.styledComponents,
      iconPaths.shacnUI,
    ],
  },
  {
    id: 'back',
    title: 'Back-end',
    list: [
      'Node.js e Express (APIs REST)',
      'Firebase (Authentication e Firestore)',
      'Noções de Banco de Dados SQL',
    ],
    icons: [
      iconPaths.node,
      iconPaths.express,
      iconPaths.firebaseFirestore,
      iconPaths.firebaseAuth,
      iconPaths.postgres,
    ],
  },
];

export { technologiesData };
