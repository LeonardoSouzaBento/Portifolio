import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md transition-all duration-300 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative capitalize leading-none! rounded-full",
  {
    variants: {
      variant: {
        default: 'bg-secondary-200 text-secondary-950 hover:bg-secondary-100',
        destructive:
          'bg-destructive text-white hover:bg-destructive-hover focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        transparent: 'bg-transparent text-primary-foreground hover:bg-secondary-50',
      },
      size: {
        sm: 'rounded-md gap-1.5 has-[>svg]:px-2.5 pt-[0.61608rem] pb-[0.82283rem] small-button',
        default: 'has-[>svg]:px-3 pt-[0.59756rem] pb-[0.80585rem]',
        lg: 'rounded-md has-[>svg]:px-4 pt-[0.73250rem] pb-[0.92375rem] large-button',
        'outline-sm': 'px-[0.79955em] py-[0.53622rem] text-sm-button',
        'outline-default': 'px-[0.80277em] py-[0.64489rem]',
        'outline-lg': 'px-[0.80588em] py-[0.75284rem] text-lg-button',
        'icon-sm': 'size-8',
        'icon': 'size-8.5',
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

function Button({ className, variant = 'default', size = 'default', asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';
  const textSizes = ['sm', 'default', 'lg', undefined, null];
  const paddingInline = textSizes.includes(size) ? 'px-[0.9em]' : '';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }), paddingInline)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
