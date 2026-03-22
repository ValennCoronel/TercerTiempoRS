import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import TopNav from "@/components/TopNav";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const work = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "TERCER TIEMPO | RUGBY ARCHIVE",
  description: "A tribute to the mud, the grit, and the legendary battles of the 1999 World Cup. Restored archive classics for the modern fan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${jakarta.variable} ${work.variable} bg-background text-on-background font-body selection:bg-primary-container selection:text-white overflow-x-hidden`}
      >
        <div className="fixed inset-0 pointer-events-none grainy-texture z-[100]"></div>

        <TopNav />

        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-center w-full px-8 pb-12 pt-20 text-center border-t border-transparent bg-[#0e0e0e]">
          <div className="text-4xl font-black italic text-[#a50418] mb-4 font-headline tracking-tighter uppercase">
            TERCER TIEMPO
          </div>
          <div className="flex gap-8 mb-12">
            <a
              className="font-['Work_Sans'] uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500 hover:text-white transition-colors duration-300"
              href="#"
            >
              INFO
            </a>
            <a
              className="font-['Work_Sans'] uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500 hover:text-white transition-colors duration-300"
              href="#"
            >
              INSTAGRAM
            </a>
            <a
              className="font-['Work_Sans'] uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500 hover:text-white transition-colors duration-300"
              href="#"
            >
              TERMS
            </a>
          </div>
          <p className="font-['Work_Sans'] uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500 opacity-60">
            © 2024 TERCER TIEMPO RUGBY STORE. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </body>
    </html>
  );
}
