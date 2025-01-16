import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import PrintButton from "@/components/PrintButton";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exam Prep",
  description:
    "En guide til at forberede sig til eksamen for frontend udviklere",
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
          <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
            <Navigation />
            <div className="pl-64">
              <section className="max-w-4xl mx-auto px-6 py-12">
                {children}
              </section>
            </div>
            <PrintButton />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
