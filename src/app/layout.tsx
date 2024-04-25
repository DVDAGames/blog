import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

import EasterEgg from "@/app/_components/easter-egg";
import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

import "./globals.css";

const ibm = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Dead Villager Dead Adventurer Games`,
  description: `A wannabe indie game studio and open source tool developer.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css" />
      </head>
      <body className={ibm.className}>
        <div className="min-h-screen">{children}</div>
        <Footer />
        <EasterEgg />
      </body>
    </html>
  );
}
