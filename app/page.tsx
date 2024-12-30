import React from 'react';
import Navbar from '@/components/main/Navbar';
import Header from '@/components/main/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className} text-[var(--text-primary)] min-h-screen flex flex-col`}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Header />
      </div>
      <footer className="text-center py-4 text-sm text-[var(--text-primary)] opacity-60">
        © 2023 Knowlect. All rights reserved.
      </footer>
    </main>
  );
}

