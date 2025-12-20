const technologies = {
  front: [
    { name: 'React', icon: 'fa-brands fa-react' },
    { name: 'Next Js', icon: 'fa-brands fa-next-js' },
    { name: 'Styled Components', icon: 'fa-brands fa-styled-components' },
    { name: 'Tailwind CSS', icon: 'fa-brands fa-tailwindcss' },
    { name: 'Componentes Reutilizáveis Shacn UI', icon: 'fa-brands fa-shacn-ui' },
  ],
  back: [
    { name: 'Axios', icon: 'fa-brands fa-axios' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js' },
    { name: 'Express.js', icon: 'fa-brands fa-express' },
    { name: 'Firebase Authentication', icon: 'fa-brands fa-firebase' },
    { name: 'Firebase Firestore', icon: 'fa-brands fa-firebase-firestore' },
  ],
};

const frontTechnologies = technologies.front.map((tech) => tech.name);
const backTechnologies = technologies.back.map((tech) => tech.name);

export { technologies, frontTechnologies, backTechnologies };
