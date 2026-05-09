import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://globaltracklogistics.com';

export const homeMetadata: Metadata = {
  title: 'Global Track Logistics - Your Trusted Global Logistics Partner',
  description: 'Comprehensive global shipping and logistics solutions. Real-time package tracking, air freight, sea freight, warehousing, and express delivery services. Trusted by 10,000+ businesses worldwide.',
  keywords: ['global logistics', 'shipping services', 'package tracking', 'air freight', 'sea freight', 'express delivery', 'warehousing'],
  openGraph: {
    title: 'Global Track Logistics - Your Trusted Global Logistics Partner',
    description: 'Comprehensive global shipping and logistics solutions. Real-time package tracking, air freight, sea freight, warehousing, and express delivery services.',
    url: BASE_URL,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Global Track Logistics' }],
  },
};

export const trackMetadata: Metadata = {
  title: 'Track Your Package | Real-Time Shipment Tracking',
  description: 'Track your package in real-time with Global Track Logistics. Enter your tracking number for instant updates on shipment status, location, and delivery estimates.',
  keywords: ['track package', 'shipment tracking', 'package status', 'delivery tracking', 'tracking number', ' shipment status'],
  openGraph: {
    title: 'Track Your Package | Global Track Logistics',
    description: 'Track your package in real-time. Get instant updates on shipment status, location, and delivery estimates.',
    url: `${BASE_URL}/track`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Package Tracking' }],
  },
};

export const servicesMetadata: Metadata = {
  title: 'Our Services | Air Freight, Sea Freight, Warehousing & More',
  description: 'Explore our comprehensive logistics services: Air Freight, Sea Freight, Ground Transport, Warehousing, Express Delivery, Customs Brokerage, and Cargo Insurance.',
  keywords: ['logistics services', 'air freight', 'sea freight', 'ground transport', 'warehousing', 'express delivery', 'customs brokerage', 'cargo insurance', 'freight services'],
  openGraph: {
    title: 'Our Services | Global Track Logistics',
    description: 'Explore our comprehensive logistics services: Air Freight, Sea Freight, Ground Transport, Warehousing, Express Delivery, Customs Brokerage, and Cargo Insurance.',
    url: `${BASE_URL}/services`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Our Services' }],
  },
};

export const aboutMetadata: Metadata = {
  title: 'About Us | Our Story & Mission',
  description: 'Learn about Global Track Logistics - our 19+ years of experience, global network spanning 150+ countries, and commitment to delivering excellence in logistics.',
  keywords: ['about us', 'logistics company', 'our story', 'company history', 'global network', 'team', 'mission', 'values'],
  openGraph: {
    title: 'About Us | Global Track Logistics',
    description: 'Learn about Global Track Logistics - our 19+ years of experience and global network spanning 150+ countries.',
    url: `${BASE_URL}/about`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Us' }],
  },
};

export const contactMetadata: Metadata = {
  title: 'Contact Us | Get in Touch',
  description: 'Contact Global Track Logistics for all your shipping and logistics needs. Get custom quotes, schedule pickups, and reach our 24/7 customer support team.',
  keywords: ['contact us', 'customer support', 'get quote', 'contact logistics', 'shipping inquiry', 'support'],
  openGraph: {
    title: 'Contact Us | Global Track Logistics',
    description: 'Contact Global Track Logistics for all your shipping and logistics needs. Get custom quotes and reach our support team.',
    url: `${BASE_URL}/contact`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Us' }],
  },
};

export const faqMetadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions',
  description: 'Find answers to common questions about package tracking, shipping services, delivery times, customs, and more. Everything you need to know about Global Track Logistics.',
  keywords: ['faq', 'frequently asked questions', 'help', 'support', 'shipping faq', 'tracking faq'],
  openGraph: {
    title: 'FAQ | Global Track Logistics',
    description: 'Find answers to common questions about package tracking, shipping services, and delivery.',
    url: `${BASE_URL}/faq`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'FAQ' }],
  },
};

export const privacyMetadata: Metadata = {
  title: 'Privacy Policy | Data Protection',
  description: 'Read Global Track Logistics Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with data protection regulations.',
  keywords: ['privacy policy', 'data protection', 'privacy', 'data security', 'personal information'],
  openGraph: {
    title: 'Privacy Policy | Global Track Logistics',
    description: 'Read our Privacy Policy. Learn how we collect, use, and protect your personal information.',
    url: `${BASE_URL}/privacy`,
  },
};

export const termsMetadata: Metadata = {
  title: 'Terms of Service | Service Agreement',
  description: 'Read Global Track Logistics Terms of Service. Understand the terms and conditions governing your use of our shipping and logistics services.',
  keywords: ['terms of service', 'terms and conditions', 'service agreement', 'legal'],
  openGraph: {
    title: 'Terms of Service | Global Track Logistics',
    description: 'Read our Terms of Service and understand the terms governing your use of our services.',
    url: `${BASE_URL}/terms`,
  },
};

export const notFoundMetadata: Metadata = {
  title: '404 - Page Not Found | Global Track Logistics',
  description: 'The page you are looking for could not be found. Return to the homepage or use our tracking tool.',
};