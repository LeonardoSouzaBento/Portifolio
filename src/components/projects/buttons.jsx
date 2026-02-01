import { Button } from '@/ui';
import { Link } from 'react-router-dom';

const Buttons = ({ project }) => {
  return (
    <div
      className={`w-full pb-4 px-4 grid grid-cols-2 gap-3
       absolute bottom-0 left-0`}>
      <Button asChild variant="default">
        <Link to={project.link || '#'} target="_blank">Ver projeto</Link>
      </Button>
      <Button asChild variant="outline">
        <Link to={project.githubLink || '#'} target="_github">Ver código</Link>
      </Button>
    </div>
  );
};

export { Buttons };

