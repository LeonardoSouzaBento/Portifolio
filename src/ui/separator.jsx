import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        `mt-1.5 shrink-0 self-stretch bg-border 
        data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-px data-[orientation=horizontal]:scale-y-99
        data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px `,
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
