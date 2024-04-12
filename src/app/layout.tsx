import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musicas Liturgia",
  description: "Musicas para liturgia",
  other: {
    "google-adsense-account": 'ca-pub-1129823157320382',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1129823157320382"
          crossOrigin="anonymous"></Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
