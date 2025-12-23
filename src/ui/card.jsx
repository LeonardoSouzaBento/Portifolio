import * as React from 'react';

import { cn } from '@/lib/utils';

function Card({ className, hasHeader = true, ...props }) {
  return (
    <section
      data-slot="card"
      className={cn(
        `bg-card text-card-foreground border border-border/33 rounded-xl 
        py-6 shadow-md max-w-6xl hover:shadow-lg transition-all duration-200`,
        hasHeader ? 'p-6 pt-3.5' : 'p-6',
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div data-slot="card-header" className={cn("mb-2.5", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return <h3 data-slot="card-title" className={cn("pb-0", className)} {...props} />;
}

function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground', className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
