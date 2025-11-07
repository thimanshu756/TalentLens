import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TalentLens AI | AI-Powered GDPR-Compliant Recruitment Platform",
  description: "Transform hiring with AI. TalentLens AI delivers 75% faster candidate screening with explainable AI scoring, hosted securely on your Azure cloud. Fully GDPR-compliant recruitment solutions for European and US agencies.",
  keywords: ["AI recruitment", "GDPR recruitment software", "candidate screening", "Azure recruitment", "European hiring solutions", "AI candidate scoring"],
  authors: [{ name: "TalentLens AI" }],
  openGraph: {
    title: "TalentLens AI | AI-Powered Recruitment Platform",
    description: "Transform hiring with AI: 75% faster candidate screening, fully GDPR-compliant",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentLens AI | AI-Powered Recruitment Platform",
    description: "Transform hiring with AI: 75% faster candidate screening, fully GDPR-compliant",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
