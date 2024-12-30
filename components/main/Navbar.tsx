import React from 'react';
import Button from './Button';
import { PT_Sans_Caption as Sansation } from 'next/font/google';

const sansation = Sansation({ subsets: ['latin'], weight: '400' });

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 backdrop-blur-md">
      <div className={`${sansation.className} text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-wide`}>Knowlect</div>
      <div className="space-x-2 sm:space-x-4">
        <Button variant="outline" size="small" className="text-xs sm:text-sm">Log In</Button>
        <Button variant="gradient" size="small" className="text-xs sm:text-sm">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;

