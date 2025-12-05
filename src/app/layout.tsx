import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DarkGreen Solutions | ESG Reporting & Uhlíková stopa",
  description:
    "V Dark Green Solutions vás efektivně provedeme ESG reportingem a výpočtem uhlíkové stopy. Nabízíme data-driven řešení, která minimalizují rizika a odhalují příležitosti pro udržitelný růst vašeho podnikání.",
  keywords: [
    "ESG",
    "uhlíková stopa",
    "udržitelnost",
    "sustainability",
    "carbon footprint",
    "ESG reporting",
    "zelené řešení",
  ],
  authors: [{ name: "Dark Green Solutions" }],
  openGraph: {
    title: "DarkGreen Solutions | ESG Reporting & Uhlíková stopa",
    description:
      "V Dark Green Solutions vás efektivně provedeme ESG reportingem a výpočtem uhlíkové stopy.",
    url: "https://www.darkgreensolutions.cz",
    siteName: "DarkGreen Solutions",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
