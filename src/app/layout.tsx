import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "TRP — The Rooftop Project | Rooftop Bar & Kitchen, MG Road, Pune",
  description: "A breezy terrace by day, a live-music rooftop by night. Global & Indian dining, craft cocktails, and celebrations on MG Road, Pune. ~4.1★.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${playfair.variable} antialiased bg-cream-50 text-ink-900`}>
        {children}
      </body>
    </html>
  );
}
