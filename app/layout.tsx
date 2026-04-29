import type { Metadata } from "next";
import { jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vitor Henrique's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
