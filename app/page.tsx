import React from "react";
import Link from "next/link";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/core/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className={`text-[var(--text-primary)] min-h-screen flex flex-col`}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Header />
      </div>
      <Footer />{" "}
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
