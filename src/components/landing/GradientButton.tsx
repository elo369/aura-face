import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export function GradientButton({
  variant = "primary",
  className,
  children,
  ...props
}: GradientButtonProps) {
  if (variant === "ghost") {
    return (
      <button
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground/90",
          "glass hover:text-foreground transition-all duration-300 hover:-translate-y-0.5",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white",
        "transition-all duration-300 hover:-translate-y-0.5 glow-primary",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(135deg, #6D5DFE 0%, #A855F7 50%, #00D4FF 100%)",
      }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundImage: "linear-gradient(135deg, #00D4FF, #6D5DFE, #A855F7)" }} />
    </button>
  );
}
