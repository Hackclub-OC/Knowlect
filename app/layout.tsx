import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "./AuthProvider";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knowlect",
  description:
    "App that teaches hard concepts by making them easier and more intuitive!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
        <html lang="en">
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        defaultTheme="system"
      >
          <body className={inter.className}>{children}</body>
      </ThemeProvider>
        </html>
    </AuthProvider>
  );
}
