import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import SchemaMarkup from '@/components/SchemaMarkup';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://globaltracklogistics.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Package Delivery Express (PDEX) - Fast & Reliable Shipping Solutions',
    template: 'Package Delivery Express (PDEX) | %s',
  },
  description: 'Package Delivery Express (PDEX) provides comprehensive shipping and logistics solutions. Real-time package tracking, air freight, sea freight, warehousing, and express delivery services. Trusted by 10,000+ businesses worldwide.',
  keywords: [
    'package delivery',
    'shipping services',
    'package tracking',
    'air freight',
    'sea freight',
    'ground transport',
    'warehousing',
    'express delivery',
    'cargo tracking',
    'international shipping',
    'logistics company',
    'supply chain',
    'freight forwarding',
    'PDEX',
  ],
  authors: [{ name: 'Package Delivery Express' }],
  creator: 'Package Delivery Express',
  publisher: 'Package Delivery Express',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      useFastLoader: true,
      siteLinksSearchBox: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Package Delivery Express (PDEX)',
    title: 'Package Delivery Express (PDEX) - Fast & Reliable Shipping Solutions',
    description: 'Package Delivery Express (PDEX) provides comprehensive shipping and logistics solutions. Real-time package tracking, air freight, sea freight, warehousing, and express delivery services.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Package Delivery Express (PDEX) - Your Trusted Shipping Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Package Delivery Express (PDEX) - Fast & Reliable Shipping Solutions',
    description: 'Package Delivery Express (PDEX) provides comprehensive shipping and logistics solutions. Real-time package tracking, air freight, sea freight, warehousing, and express delivery services.',
    images: ['/og-image.png'],
    creator: '@PDEXDelivery',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      { url: '/icon0.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: BASE_URL,
  },
  category: 'Logistics & Transportation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#14532d" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="antialiased">
        <SchemaMarkup />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}