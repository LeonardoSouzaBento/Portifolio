import { logoIconPaths } from './imageIconPaths';

const technologiesData = {
  front: [
    { name: 'TypeScript e React', icon: logoIconPaths.typescript },
    { name: 'Next Js', icon: logoIconPaths.nextJs },
    { name: 'Tailwind CSS', icon: logoIconPaths.tailwindCSS },
    { name: 'Styled Components', icon: logoIconPaths.styledComponents },
    { name: 'Componentes Shacn UI', icon: logoIconPaths.shacnUI },
  ],
  back: [
    { name: 'Axios', icon: logoIconPaths.axios },
    { name: 'Express.js', icon: logoIconPaths.express },
    { name: 'Firebase Firestore', icon: logoIconPaths.firebaseFirestore },
    { name: 'Firebase Authentication', icon: logoIconPaths.firebaseAuth },
  ],
};

const frontTechnologies = technologiesData.front.map((tech) => tech.name);
const backTechnologies = technologiesData.back.map((tech) => tech.name);

export { technologiesData, frontTechnologies, backTechnologies };
