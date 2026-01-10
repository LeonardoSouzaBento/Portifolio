import React from 'react';

const SvgIcon = ({
  path = '',
  path2 = '',
  path3 = '',
  title = '',
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      stroke={color}
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}>
      <title>{title}</title>
      <path d={path} />
      <path d={path2} />
      <path d={path3} />
    </svg>
  );
};

export default SvgIcon;
