import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
import { PT_Sans_Caption as Sansation } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} text-[var(--text-primary)] min-h-screen flex flex-col`}
    >
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Header />
      </div>
      <footer className="text-center py-4 text-sm text-[var(--text-primary)] opacity-60">
        © 2025 Knowlect. All rights reserved.
      </footer>
    </main>
  );
}

const Header: React.FC = () => {
  return (
    <header className="text-center px-4 -mt-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter mb-8 sm:mb-10 md:mb-12 relative inline-block text-[var(--text-primary)] leading-tight">
        Concepts made{" "}
        <span className="font-medium italic relative">
          simple
          <div className="absolute -bottom-1 left-0 w-full h-3 sm:h-4 md:h-5 lg:h-6 bg-gradient-to-r from-[var(--accent-foreground)] to-[var(--accent-color)] -z-10 opacity-70"></div>
        </span>
        <br className="hidden sm:inline" />
        <span className="sm:mt-2 inline-block">
          &nbsp;just for{" "}
          <span className="font-bold italic relative">
            you!
            <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-6 sm:h-8 md:h-10 lg:h-12 bg-gradient-to-r from-[var(--accent-foreground)] to-[var(--accent-color)] -z-10 opacity-70"></div>
          </span>
        </span>
      </h1>
      <div className="flex justify-center space-x-4 sm:space-x-6">
        <Button
          variant="outline"
          size="large"
          className="shadow-lg hover:shadow-xl sm:px-10 md:px-14"
        >
          See Demo
        </Button>
        <Link href="/learn">
          <Button
            variant="gradient"
            size="large"
            className="shadow-lg md:px-14 sm:px-10 hover:shadow-xl "
          >
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
};

const sansation = Sansation({ subsets: ["latin"], weight: "400" });
const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 backdrop-blur-md">
      <div
        className={`${sansation.className} text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-wide`}
      >
        Knowlect
      </div>
      <div className="space-x-2 sm:space-x-4">
        <Button variant="outline" size="small" className="text-xs sm:text-sm">
          Log In
        </Button>
        <Button variant="gradient" size="small" className="text-xs sm:text-sm">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

interface ButtonProps {
  variant: "outline" | "gradient";
  size: "small" | "large";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  className,
}) => {
  const baseClasses =
    "font-inter font-medium transition-all duration-200 text-[var(--text-primary)]";
  const sizeClasses = {
    small: "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-[0.5rem]",
    large:
      "px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-md sm:text-lg md:text-xl lg:text-2xl rounded-xl",
  };
  const variantClasses = {
    outline:
      "border-2 border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white",
    gradient:
      "bg-gradient-to-b from-[var(--accent-foreground)] to-[var(--accent-color)] hover:opacity-90",
  };

  return (
    <button
      className={cn(
        `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`
      )}
    >
      {children}
    </button>
  );
};
