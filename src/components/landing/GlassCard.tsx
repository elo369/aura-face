import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
}

export function GlassCard({ className, strong, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        strong ? "glass-strong" : "glass",
        "rounded-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
