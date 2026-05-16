import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Systems for SME - Indian SME Business Systems & Consulting",
  description: "Stop doing everything yourself. We help Indian SME founders build scalable systems for inventory, leads, SOPs, and delegation. Book your strategy session today.",
  keywords: [
    "SME consulting India",
    "business systems",
    "SME growth",
    "operational systems",
    "business optimization"
  ],
  authors: [{ name: "Raghav Kansal" }],
  openGraph: {
    type: "website",
    url: "https://systemsforsme.com",
    title: "Systems for SME - Build Systems That Run Your Business",
    description: "We help Indian SMEs escape operational chaos and build scalable systems.",
    images: [
      {
        url: "https://systemsforsme.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems for SME",
    description: "Build Systems That Run Your Business — Not Your Life",
    creator: "@systems_for_sme",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Systems for SME" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
