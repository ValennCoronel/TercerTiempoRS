"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HOME", href: "/" },
    { name: "NUEVO DROP", href: "/nuevo-drop" },
    { name: "STORE", href: "/shop" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <>
      <nav className="sticky top-0 w-full flex justify-between items-center px-6 py-4 max-w-none bg-[#1c1b1b] z-50 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <Link
          className="text-2xl font-black italic tracking-tighter text-[#a50418] font-headline"
          href="/"
        >
          TERCER TIEMPO
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;

            if (isActive) {
              return (
                <Link
                  key={link.name}
                  className="font-headline italic font-black uppercase tracking-tighter leading-[0.85] text-[#a50418] border-b-4 border-[#a50418] pb-1 skew-active transition-transform"
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <Link
                key={link.name}
                className="font-headline italic font-black uppercase tracking-tighter leading-[0.85] text-white opacity-80 hover:opacity-100 transition-all hover:text-[#a50418] hover:scale-105"
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4 text-[#a50418]">
        <button className="p-2 hover:scale-110 transition-transform">
          <span className="material-symbols-outlined" data-icon="shopping_cart">
            shopping_cart
          </span>
        </button>
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(true)}
        >
          <span className="material-symbols-outlined" data-icon="menu">
            menu
          </span>
        </button>
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#111111] bg-[url('/texturas/fondoGrunge.png')] flex flex-col items-center justify-center md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>

        <button
          className="absolute top-6 right-6 p-2 text-white hover:text-[#a50418] transition-colors z-10"
          onClick={() => setIsOpen(false)}
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        
        <div className="flex flex-col items-center gap-10 mt-8 w-full z-10">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-headline italic font-black uppercase text-2xl tracking-widest transition-all duration-300 ${
                  isActive 
                    ? "text-[#a50418] border-b-2 border-[#a50418] pb-1 skew-active scale-110" 
                    : "text-white opacity-80 hover:scale-105 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
