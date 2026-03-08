import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const ButtonsWrapper = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn("flex flex-wrap gap-3", className)} {...props}>
      {children}
    </div>
  );
};
