import { logoIconPaths } from './imageIconPaths';

const technologiesData = {
  front: [
    { name: 'TypeScript & React', icon: logoIconPaths.typescript },
    { name: 'Next Js', icon: logoIconPaths.nextJs },
    { name: 'Styled Components', icon: logoIconPaths.styledComponents },
    { name: 'Tailwind CSS', icon: logoIconPaths.tailwindCSS },
    { name: 'Componentes Reutilizáveis Shacn UI', icon: logoIconPaths.shacnUI },
  ],
  back: [
    { name: 'Axios', icon: logoIconPaths.axios },
    { name: 'Express.js', icon: logoIconPaths.express },
    { name: 'Firebase Authentication', icon: logoIconPaths.firebaseAuth },
    { name: 'Firebase Firestore', icon: logoIconPaths.firebaseFirestore },
  ],
};

const frontTechnologies = technologiesData.front.map((tech) => tech.name);
const backTechnologies = technologiesData.back.map((tech) => tech.name);

export { technologiesData, frontTechnologies, backTechnologies };
