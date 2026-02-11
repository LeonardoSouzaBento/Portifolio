import { Button } from '@/ui';
import { Link } from 'react-router-dom';

const Links = ({ project }) => {
  const linksOptions = [
    { button: 'Ver projeto', link: project.link, variant: 'default', target: '_github' },
    { button: 'Ver código', link: project.githubLink, variant: 'outline', target: '_blank' },
  ];

  return (
    <div
      className={`w-full pb-4 px-4 grid grid-cols-2 gap-3
       absolute bottom-0 left-0`}>
      {linksOptions.map((item) => (
        <Button key={item.button} asChild variant={item.variant}>
          <Link to={item.link || '#'} target={item.target}>
            {item.button}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export { Links };
