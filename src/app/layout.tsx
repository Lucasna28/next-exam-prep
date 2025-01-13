import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import PrintButton from "@/components/PrintButton";

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
    <html lang="da" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
            <Navigation />
            <div className="pl-64">
              <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
            </div>
            <PrintButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
