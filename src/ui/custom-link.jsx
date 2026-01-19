import { Link } from 'react-router-dom';

export const CustomLink = ({ href, children, className, target = '_blank' }) => {
  return (
    <Link
      to={href}
      className={`size-full cursor-pointer absolute bottom-0 right-0 z-1 ${className}`}
      target={target}
      rel="noopener noreferrer">
      {children}
    </Link>
  );
};
