import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cmonbollo.com"),
  title: "C'mon, Bollo! — 16 августа 2026 · Хват · Самара",
  description:
    "C'mon, Bollo! открывают «Что-то почувствовать фест» 16 августа 2026 года в баре «Хват», Самара. Двери в 18:00, наш сет в 18:30.",
  openGraph: {
    title: "C'mon, Bollo! — 16 agosto 2026 · Hvat · Samara",
    description: "Что-то почувствовать фест · porte 18:00 · C'mon, Bollo! 18:30.",
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["it_IT", "en_GB"],
    images: [
      {
        url: "/character-atlas.png",
        alt: "C'mon, Bollo! — Что-то почувствовать фест, Самара, 16 августа 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C'mon, Bollo! — 16 agosto 2026 · Hvat · Samara",
    description: "Что-то почувствовать фест · двери 18:00 · C'mon, Bollo! 18:30.",
    images: ["/character-atlas.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="silly">
      <body>{children}</body>
    </html>
  );
}
