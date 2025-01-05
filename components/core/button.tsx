import { cn } from "@/lib/utils";

interface ButtonProps {
  variant: "outline" | "gradient";
  size: "small" | "large";
  children: React.ReactNode;
  className?: string;
}

export function buttonVariants({
  variant,
  size,
  className = "",
}: {
  variant: "outline" | "gradient";
  size: "small" | "large";
  className?: string;
}) {
  const baseClasses =
    "font-inter font-medium transition-all duration-200 text-[var(--text-primary)]";
  const sizeClasses = {
    small: "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-[0.5rem]",
    large:
      "px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-md sm:text-lg md:text-xl lg:text-2xl rounded-xl",
  };
  const variantClasses = {
    outline:
      "border-2 border-[var(--accent-color)] hover:bg-gradient-to-b hover:from-blue-200 focus:outline-none focus:ring-[2.5px] focus:ring-[var(--accent-color)] focus:ring-offset-2 hover:to-blue-600 ",
    gradient:
      "bg-gradient-to-b from-[var(--accent-foreground)] focus:outline-none focus:ring-[2.5px] focus:ring-[var(--accent-color)] focus:ring-offset-2  to-[var(--accent-color)] hover:opacity-90",
  };
  return cn(baseClasses, sizeClasses[size], variantClasses[variant], className);
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  className,
}) => {
  return <button className={buttonVariants({ variant, size, className })}>{children}</button>;
};
