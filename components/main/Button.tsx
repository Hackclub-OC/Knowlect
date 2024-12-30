import React from 'react';

interface ButtonProps {
  variant: 'outline' | 'gradient';
  size: 'small' | 'large';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, size, children, className }) => {
  const baseClasses = "font-inter font-medium transition-all duration-200 text-[var(--text-primary)]";
  const sizeClasses = {
    small: "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-[0.5rem]",
    large: "px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg rounded-xl"
  };
  const variantClasses = {
    outline: "border-2 border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white",
    gradient: "bg-gradient-to-b from-[var(--accent-foreground)] to-[var(--accent-color)] hover:opacity-90"
  };

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

