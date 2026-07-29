import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cmonbollo.com"),
  title: "C'mon, Bollo! — Di nuovo insieme · Samara 2026",
  description:
    "Il ritorno della band italo-volgana C'mon, Bollo! Concerto di reunion a Samara nel 2026.",
  openGraph: {
    title: "C'mon, Bollo! — Di nuovo insieme",
    description: "Samara · 2026 · Data e luogo da annunciare.",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "C'mon, Bollo! Di nuovo insieme — Samara 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C'mon, Bollo! — Di nuovo insieme",
    description: "Samara · 2026 · Data e luogo da annunciare.",
    images: ["/og.png"],
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
