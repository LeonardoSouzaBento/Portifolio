import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "h-fit inline-flex items-center justify-center box-border gap-2 rounded-md transition-all duration-300 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative capitalize leading-none rounded-full font-bold",
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
        link: 'text-primary underline-offset-4 hover:underline',
        transparent: 'bg-transparent text-primary-foreground hover:bg-secondary-50',
      },
      size: {
        sm: 'rounded-md gap-1.5 has-[>svg]:px-2.5 pt-[0.61608rem] pb-[0.82283rem] small-button',
        default: 'has-[>svg]:px-3 pt-[0.59756rem] pb-[0.80585rem] normal-button',
        lg: 'rounded-md has-[>svg]:px-4 pt-[0.73250rem] pb-[0.92375rem] large-button',
        'outline-sm': 'px-[0.79955em] py-[0.53622rem] text-sm-button',
        'outline-default': 'px-[0.80277em] py-[0.64489rem]',
        'outline-lg': 'px-[0.80588em] py-[0.75284rem] text-lg-button',
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

const paddingExptions = {
  variants: ['link', 'transparent'],
  sizes: ['icon', 'icon-sm', 'icon-md', 'icon-lg'],
};

const paddings = {
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

const getPaddings = (variant, size) => {
  let padding = '';
  if (!paddingExptions.sizes.includes(size) && !paddingExptions.variants.includes(variant)) {
    if (variant === 'destructive' || variant === 'secondary') {
      padding = paddings.default[size];
    } else {
      padding = paddings[variant][size];
    }
  }
  return padding;
};

function Button({
  className,
  variant = 'default',
  size = 'default',
  flex = false,
  wFull = false,
  asChild = false,
  ...props
}) {
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
