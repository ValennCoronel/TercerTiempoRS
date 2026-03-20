import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tercer Tiempo - Rugby Store",
  description:
    "Drops limitados de camisetas de rugby retro. Stock único, sin reposición.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="text-tt-beige antialiased">
        <div className="min-h-screen flex flex-col">
          <header>
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div className="font-display text-xl tracking-[0.25em] uppercase">
                Tercer Tiempo
              </div>
              <nav className="flex gap-6 text-sm uppercase tracking-[0.2em]">
                <a href="/" className="nav-link">
                  Shop
                </a>
                <a href="/nuevo-drop" className="nav-link">
                  Nuevo Drop
                </a>
                <a href="/about" className="nav-link">
                  About
                </a>
                <a href="/cart" className="nav-link">
                  Cart
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
          </main>

          <footer className="py-6">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.2em] text-tt-muted md:flex-row">
              <span>Tercer Tiempo Rugby Store</span>
              <div className="flex gap-4">
                <a href="/" className="nav-link text-tt-muted">
                  Shop
                </a>
                <a href="/nuevo-drop" className="nav-link text-tt-muted">
                  Archive
                </a>
                <a href="/about" className="nav-link text-tt-muted">
                  About
                </a>
                <a href="https://instagram.com" className="nav-link text-tt-muted">
                  Instagram
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
