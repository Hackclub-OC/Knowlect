import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="text-center px-4 -mt-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter mb-8 sm:mb-10 md:mb-12 relative inline-block text-[var(--text-primary)] leading-tight">
        Concepts made{' '}
        <span className="font-medium italic relative">
          simple
          <div className="absolute -bottom-1 left-0 w-full h-3 sm:h-4 md:h-5 lg:h-6 bg-gradient-to-r from-[var(--accent-foreground)] to-[var(--accent-color)] -z-10 opacity-70"></div>
        </span>
        <br className="hidden sm:inline" />
        <span className="sm:mt-2 inline-block">
          just for{' '}
          <span className="font-bold italic relative">
            you!
            <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-6 sm:h-8 md:h-10 lg:h-12 bg-gradient-to-r from-[var(--accent-foreground)] to-[var(--accent-color)] -z-10 opacity-70"></div>
          </span>
        </span>
      </h1>
      <div className="flex justify-center space-x-4 sm:space-x-6">
        <Button variant="outline" size="large" className="shadow-lg hover:shadow-xl text-sm sm:text-base">See Demo</Button>
        <Button variant="gradient" size="large" className="shadow-lg hover:shadow-xl text-sm sm:text-base">Get Started</Button>
      </div>
    </header>
  );
};

export default Header;

