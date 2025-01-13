import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Exam Prep",
  description: "En guide til Next.js koncepter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <Navigation />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
