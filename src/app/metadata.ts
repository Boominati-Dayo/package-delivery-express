import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://package-delivery-xpress.vercel.app';

export const homeMetadata: Metadata = {
  title: 'Package Delivery Express (PDEX) - Fast & Reliable Shipping Solutions',
  description: 'Comprehensive package delivery services. We handle everything from small packages to large shipments, ensuring efficient and secure delivery worldwide.',
  keywords: ['package delivery', 'shipping services', 'package tracking', 'domestic shipping', 'international shipping', 'warehousing', 'express delivery'],
  openGraph: {
    title: 'Package Delivery Express (PDEX) - Fast & Reliable Shipping Solutions',
    description: 'Comprehensive package delivery services. We handle everything from small packages to large shipments, ensuring efficient and secure delivery worldwide.',
    url: BASE_URL,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Package Delivery Express' }],
  },
};

export const trackMetadata: Metadata = {
  title: 'Track Your Package | Real-Time Shipment Tracking | PDEX',
  description: 'Track your package in real-time with Package Delivery Express. Enter your tracking number for instant updates on shipment status, location, and delivery estimates.',
  keywords: ['track package', 'shipment tracking', 'package status', 'delivery tracking', 'tracking number', 'shipment status'],
  openGraph: {
    title: 'Track Your Package | Package Delivery Express',
    description: 'Track your package in real-time. Get instant updates on shipment status, location, and delivery estimates.',
    url: `${BASE_URL}/track`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Package Tracking' }],
  },
};

export const servicesMetadata: Metadata = {
  title: 'Our Services | Domestic, International, Pet & Valuable Goods Shipping',
  description: 'Explore our comprehensive delivery services: Domestic Shipping, International Shipping, Pet Transport, and Valuable Goods handling with full insurance.',
  keywords: ['delivery services', 'domestic shipping', 'international shipping', 'pet transport', 'valuable goods', 'freight services'],
  openGraph: {
    title: 'Our Services | Package Delivery Express',
    description: 'Explore our comprehensive delivery services: Domestic Shipping, International Shipping, Pet Transport, and Valuable Goods handling.',
    url: `${BASE_URL}/services`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Our Services' }],
  },
};

export const aboutMetadata: Metadata = {
  title: 'About Us | Our Story & Mission | Package Delivery Express',
  description: 'Learn about Package Delivery Express (PDEX) - our 24+ years of experience, global network spanning 50+ countries, and commitment to delivering excellence in package logistics.',
  keywords: ['about us', 'delivery company', 'our story', 'company history', 'global network', 'team', 'mission', 'values'],
  openGraph: {
    title: 'About Us | Package Delivery Express',
    description: 'Learn about Package Delivery Express - our 24+ years of experience and global network spanning 50+ countries.',
    url: `${BASE_URL}/about`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Us' }],
  },
};

export const contactMetadata: Metadata = {
  title: 'Contact Us | Get in Touch | Package Delivery Express',
  description: 'Contact Package Delivery Express for all your shipping needs. Get custom quotes, schedule pickups, and reach our customer support team.',
  keywords: ['contact us', 'customer support', 'get quote', 'contact delivery', 'shipping inquiry', 'support'],
  openGraph: {
    title: 'Contact Us | Package Delivery Express',
    description: 'Contact Package Delivery Express for all your shipping needs. Get custom quotes and reach our support team.',
    url: `${BASE_URL}/contact`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Us' }],
  },
};

export const faqMetadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | Package Delivery Express',
  description: 'Find answers to common questions about package tracking, shipping services, delivery times, customs, and more. Everything you need to know about Package Delivery Express.',
  keywords: ['faq', 'frequently asked questions', 'help', 'support', 'shipping faq', 'tracking faq'],
  openGraph: {
    title: 'FAQ | Package Delivery Express',
    description: 'Find answers to common questions about package tracking, shipping services, and delivery.',
    url: `${BASE_URL}/faq`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'FAQ' }],
  },
};

export const privacyMetadata: Metadata = {
  title: 'Privacy Policy | Data Protection | Package Delivery Express',
  description: 'Read Package Delivery Express Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with data protection regulations.',
  keywords: ['privacy policy', 'data protection', 'privacy', 'data security', 'personal information'],
  openGraph: {
    title: 'Privacy Policy | Package Delivery Express',
    description: 'Read our Privacy Policy. Learn how we collect, use, and protect your personal information.',
    url: `${BASE_URL}/privacy`,
  },
};

export const termsMetadata: Metadata = {
  title: 'Terms of Service | Service Agreement | Package Delivery Express',
  description: 'Read Package Delivery Express Terms of Service. Understand the terms and conditions governing your use of our shipping and delivery services.',
  keywords: ['terms of service', 'terms and conditions', 'service agreement', 'legal'],
  openGraph: {
    title: 'Terms of Service | Package Delivery Express',
    description: 'Read our Terms of Service and understand the terms governing your use of our services.',
    url: `${BASE_URL}/terms`,
  },
};

export const notFoundMetadata: Metadata = {
  title: '404 - Page Not Found | Package Delivery Express',
  description: 'The page you are looking for could not be found. Return to the homepage or use our tracking tool.',
};