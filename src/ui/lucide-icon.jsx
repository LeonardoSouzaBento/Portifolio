import { LucideIcon } from 'lucide-react';

const iconSizes = {
  xs: '0.889em',
  sm: '0.943em',
  md: '1em',
  lg: '1.061em',
  h6: '1.125em',
  h5: '1.266em',
  h4: '1.424em',
  h3: '1.602em',
  xl: '1.125em',
  '2xl': '1.266em',
  '3xl': '1.424em',
  '4xl': '1.602em',
};

const weights = {
  thin: 2.2,
  light: 2.4,
};

export const LucideIcon = ({ size, Icon, className, strokeValue }) => {
  return (
    <Icon
      size={iconSizes[size] || size || '1em'}
      strokeWidth={weights[strokeValue] || strokeValue || 2.6}
      className={className || ''}
    />
  );
};
