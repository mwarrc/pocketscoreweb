import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PocketScore - Modern Score Keeping for Android",
  description: "A modern, expressive score-keeping app for Android. Built with Kotlin and Jetpack Compose, featuring Material You design that adapts to your style. Track game scores, manage players, and celebrate victories.",
  keywords: ["score keeper", "android app", "game tracker", "scoreboard", "material design", "kotlin", "jetpack compose", "open source"],
  authors: [{ name: "mwarrc", url: "https://github.com/mwarrc" }],
  creator: "mwarrc",
  publisher: "mwarrc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pocketscore.app",
    title: "PocketScore - Modern Score Keeping for Android",
    description: "A modern, expressive score-keeping app for Android with Material You design",
    siteName: "PocketScore",
  },
  twitter: {
    card: "summary_large_image",
    title: "PocketScore - Modern Score Keeping for Android",
    description: "A modern, expressive score-keeping app for Android with Material You design",
    creator: "@mwarrc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
