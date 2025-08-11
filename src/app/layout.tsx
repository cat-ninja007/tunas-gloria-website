import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ['latin']})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://tunasgloria.sch.id'),
  title: {
    default: 'Tunas Gloria - Excellence in Christian Education',
    template:  '%s | Tunas Gloria'
  },
  description: 'Tunas Gloria School provides quality Christian education from Kindergarten to Senior School. Join us for academic excellencce and character development.',
  keywords: ['Christian school', 'private school', 'quality education', 'best school in Kupang', 'Sekolah di Kupang', 'Tunas Gloria'],
  authors: [{ name: 'Tunas Gloria School'}],
  creator: 'Tunas Gloria School',
  publisher: 'Tunas Gloria School',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://tunasgloria.sch.id',
    siteName: 'Tunas Gloria School  - Excellence in Christian Education',
    title: 'Tunas Gloria School  - Excellence in Christian Education',
    description: 'Quality Christian education from Kindergarten to Senior School. Join us for academic excellence and character development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tunas Gloria School'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tunas Glorria - Excellence in Christian Education',
    description: 'Quality Christian education from Kindergarten to Senior School. Join us for academic excellence and character development.',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
