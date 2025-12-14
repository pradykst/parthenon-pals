import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parthenon Pals",
  description: "A battle game built on Movement Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-gray-900`}
      >
        <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="font-bold text-xl tracking-tight text-blue-600">
              <Link href="/">Parthenon Pals</Link>
            </div>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/play" className="hover:text-blue-600 transition-colors">
                Play
              </Link>
              <Link href="/docs" className="hover:text-blue-600 transition-colors">
                Docs
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow max-w-5xl mx-auto px-4 py-8 w-full">
          {children}
        </main>

        <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
          <p>Built for Movement M1 Hackathon</p>
        </footer>
      </body>
    </html>
  );
}
