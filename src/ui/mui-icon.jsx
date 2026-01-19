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

export const MuiIcon = ({icon, size, fill = 0, weight = 600, margin = '0', className}) => {
  return (
    <span
      className={className || 'material-symbols-rounded'}
      style={{
        margin: margin,
        fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}`,
        fontSize: iconSizes[size] || size || '1em',
      }}>
      {icon}
    </span>
  );
};
