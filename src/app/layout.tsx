import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ScrollObserver } from "@/components/ScrollObserver";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indra Pranata — Full-Stack Developer Portfolio",
  description:
    "Professional portfolio of Indra Pranata, a full-stack developer specializing in Next.js, React, TypeScript, and Laravel. View projects, skills, and experience.",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Indra Pranata",
    "Indra7Dev",
  ],
  authors: [{ name: "Indra Pranata" }],
  creator: "Indra Pranata",
  metadataBase: new URL("https://indra7dev.vercel.app"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://indra7dev.vercel.app",
    siteName: "Indra Pranata — Portfolio",
    title: "Indra Pranata — Full-Stack Developer Portfolio",
    description:
      "Professional portfolio of Indra Pranata, a full-stack developer specializing in Next.js, React, TypeScript, and Laravel.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Indra Pranata — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indra Pranata — Full-Stack Developer Portfolio",
    description:
      "Professional portfolio of Indra Pranata, a full-stack developer specializing in Next.js, React, TypeScript, and Laravel.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollObserver />
          <a href="#main-content" className="skip-to-content">
            Lewati ke konten utama
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <WhatsAppFloat />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
