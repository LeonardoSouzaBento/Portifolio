import type { ComponentProps, ElementType } from 'react';

const iconSizes: Record<string, string> = {
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

const weights: Record<string, number> = {
  thin: 2.2,
  light: 2.4,
};

interface IconProps extends Omit<ComponentProps<'svg'>, 'size' | 'fill'> {
  size?: keyof typeof iconSizes | string | number;
  Icon: ElementType;
  strokeValue?: keyof typeof weights | number;
  fill?: string;
}

export const Icon = ({ size, Icon: IconComp, className, strokeValue, fill, ...props }: IconProps) => {
  const sizeValue = typeof size === 'string' ? (iconSizes[size] || size) : size;
  const strokeWidthValue = typeof strokeValue === 'string' ? (weights[strokeValue] || 2.6) : (strokeValue || 2.6);

  return (
    <IconComp
      size={sizeValue || '1em'}
      strokeWidth={strokeWidthValue}
      className={className || ''}
      fill={fill || 'none'}
      {...props}
    />
  );
};
