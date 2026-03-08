import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "h-fit inline-flex items-center justify-center box-border gap-2 rounded-md transition-all duration-300 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative capitalize leading-none rounded-full font-bold data-w-full:w-full",
  {
    variants: {
      variant: {
        default: 'bg-secondary-300 text-secondary-900 hover:bg-secondary-300',
        destructive:
          'bg-destructive text-white hover:bg-destructive-hover focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'ring ring-secondary-700 text-secondary-700 bg-transparent shadow-xs',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'border border-border',
        link: 'h-max! text-blue-500 hover:text-blue-600 underline-offset-4 hover:underline',
        transparent: 'bg-transparent text-primary-foreground hover:bg-secondary-50',
      },
      size: {
        sm: 'rounded-md gap-1.5 small-button',
        default: 'normal-button',
        lg: 'rounded-md large-button',
        'icon-sm': 'size-8',
        icon: 'size-8.5',
        'icon-md': 'size-9',
        'icon-button': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

const paddingExptions = {
  variants: ['link', 'transparent'] as Array<ButtonVariants['variant']>,
  sizes: ['icon', 'icon-sm', 'icon-md', 'icon-lg'] as Array<ButtonVariants['size']>,
};

const paddings: Record<string, Record<string, string>> = {
  default: {
    sm: 'px-[0.9em] pt-[0.50497rem] pb-[0.71165rem]',
    default: 'px-[0.9em] pt-[0.59208rem] pb-[0.81133rem]',
    lg: 'px-[0.9em] pt-[0.67743rem] pb-[0.90993rem]',
  },
  outline: {
    sm: 'px-[0.82743em] pt-[0.41406rem] pb-[0.62074rem]',
    default: 'px-[0.83158em] pt-[0.50117rem] pb-[0.72042rem]',
    lg: 'px-[0.83548em] pt-[0.58652rem] pb-[0.81902rem]',
  },
  ghost: {
    sm: 'px-[0.82841em] py-[0.6076rem]',
    default: 'px-[0.83429em] py-[0.70313rem]',
    lg: 'px-[0.83982em] py-[0.79688rem]',
  },
};

const getPaddings = (variant: ButtonVariants['variant'], size: ButtonVariants['size']) => {
  let padding = '';
  const variantStr = variant as string;
  const sizeStr = size as string;

  if (!paddingExptions.sizes.includes(size) && !paddingExptions.variants.includes(variant)) {
    if (variant === 'destructive' || variant === 'secondary') {
      padding = paddings.default[sizeStr] || '';
    } else {
      padding = (paddings[variantStr] && paddings[variantStr][sizeStr]) || '';
    }
  }
  return padding;
};

interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {
  flex?: boolean;
  wFull?: boolean;
  asChild?: boolean;
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  flex = false,
  wFull = false,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const padding = getPaddings(variant, size);

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({ variant, size }),
        className,
        padding,
        flex ? "flex" : "",
        wFull ? "w-full" : "",
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };

