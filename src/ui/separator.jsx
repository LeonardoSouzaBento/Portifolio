import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

function Separator({ className, orientation = 'horizontal', decorative = true, ...props }) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'mt-1.5 shrink-0 data-[orientation=horizontal]:border-b data-[orientation=vertical]:border-r data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full',
        className
      )}
      {...props}
    />
  );
}

export { Separator };

