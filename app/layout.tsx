import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cmonbollo.com"),
  title: "C'mon, Bollo! — reunion a Samara / реюнион в Самаре",
  description:
    "C'mon, Bollo! return to Samara: reunion concert, old songs, archive chaos, Bollo and the unexplained sheep.",
  openGraph: {
    title: "C'mon, Bollo! — di nuovo dal vivo",
    description: "Samara · 2026 · reunion, vecchi MP3 e una pecora.",
    type: "website",
    locale: "it_IT",
    alternateLocale: ["ru_RU", "en_GB"],
    images: [
      {
        url: "/character-atlas.png",
        alt: "C'mon, Bollo! — reunion a Samara nel 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C'mon, Bollo! — di nuovo dal vivo",
    description: "Samara · 2026 · reunion, vecchi MP3 e una pecora.",
    images: ["/character-atlas.png"],
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
