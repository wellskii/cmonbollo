import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cmonbollo.com"),
  title: "C'mon, Bollo! — reunion a Samara / реюнион в Самаре",
  description:
    "C'mon, Bollo! torna a suonare a Samara. Песни, архив и реюнион-концерт группы C'mon, Bollo!",
  openGraph: {
    title: "C'mon, Bollo! — di nuovo dal vivo",
    description: "Samara · 2026 · reunion, vecchi MP3 e una pecora.",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/silly-hero.png",
        width: 1728,
        height: 896,
        alt: "C'mon, Bollo! — reunion a Samara nel 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C'mon, Bollo! — di nuovo dal vivo",
    description: "Samara · 2026 · reunion, vecchi MP3 e una pecora.",
    images: ["/silly-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
