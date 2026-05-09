'use client';

import Link from 'next/link';
import { useTheme } from '@/components/ClientLayout';
import { FaPlane, FaShip, FaTruck, FaWarehouse, FaArrowRight, FaCheck, FaClock, FaShieldAlt, FaGlobe, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalculator, FaBolt, FaFileContract, FaBox, FaBoxes, FaHandshake, FaRocket, FaHeart, FaThermometerHalf } from 'react-icons/fa';

const allServices = [
  {
    icon: FaTruck,
    title: 'Domestic Shipping',
    desc: 'Nationwide coverage across USA with reliable delivery solutions. We ensure your packages reach any destination within the country safely and on time.',
    features: ['Nationwide coverage across USA', 'Standard and express delivery options', 'Real-time tracking', 'Door-to-door service'],
    price: 'From $12.99/pkg',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: FaGlobe,
    title: 'International Shipping',
    desc: 'Global delivery to 150+ countries with comprehensive logistics support. Our international experts handle the complexities so you can focus on your business.',
    features: ['Global delivery to 150+ countries', 'Customs clearance assistance', 'Border-to-border logistics', 'Multi-modal shipping options'],
    price: 'From $49.99/pkg',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: FaHeart,
    title: 'Pet Transport',
    desc: 'Safe and comfortable pet shipping services that treat your furry family members with the utmost care. We ensure stress-free transport for pets of all sizes.',
    features: ['Safe and comfortable pet shipping', 'Compliance with regulations', 'Door-to-door service', 'Climate-controlled vehicles'],
    price: 'From $199.99',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: FaShieldAlt,
    title: 'Valuable Goods',
    desc: 'Insured shipping for precious items and high-value cargo. We provide enhanced security measures and comprehensive coverage for your most important shipments.',
    features: ['Insured shipping for precious items', 'Secure handling', 'High-value cargo protection', 'White-glove service'],
    price: 'From 2% of value',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: FaBox,
    title: 'Parcel Delivery',
    desc: 'Efficient small and medium package shipping solutions for businesses and individuals. From documents to e-commerce orders, we deliver with speed and reliability.',
    features: ['Small and medium packages', 'Document shipping', 'E-commerce fulfillment', 'Flexible delivery options'],
    price: 'From $8.99/pkg',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80'
  },
  {
    icon: FaBoxes,
    title: 'Specialized Cargo',
    desc: 'Advanced shipping solutions for unique requirements including temperature control, oversized items, and fragile handling. Our expertise ensures safe delivery.',
    features: ['Temperature-controlled shipping', 'Oversized packages', 'Fragile items handling', 'Specialized equipment'],
    price: 'Custom quote',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80'
  },
];

const additionalServices = [
  { icon: FaBolt, title: 'Express Delivery', desc: 'Same-day and next-day delivery for urgent shipments' },
  { icon: FaFileContract, title: 'Customs Brokerage', desc: 'Professional clearance services for international cargo' },
  { icon: FaThermometerHalf, title: 'Cold Chain Logistics', desc: 'Temperature-controlled shipping for perishables' },
  { icon: FaCalculator, title: 'Freight Quoting', desc: 'Instant quotes for your shipments' },
];

export default function Services() {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#14532d] to-[#166534] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1950&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">PDEX Shipping Services</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto px-4">
            Reliable shipping solutions across the USA and worldwide. From domestic deliveries to international logistics, we've got you covered.
          </p>
        </div>
      </div>

      {/* Main Services Grid with Images */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {allServices.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#22c55e] text-[#14532d] rounded-full text-sm font-bold">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#14532d] dark:bg-[#22c55e] rounded-xl flex items-center justify-center">
                    <service.icon className="text-2xl text-white dark:text-[#14532d]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{service.desc}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#14532d] dark:bg-[#22c55e] text-white dark:text-[#14532d] font-bold rounded-lg hover:opacity-90 transition-opacity hover:scale-105 transition-transform">
                  Get Quote <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services Grid */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Additional Services</h2>
            <p className="text-gray-600 dark:text-gray-400">Complementary shipping solutions to enhance your logistics experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-shadow">
                <div className="w-14 h-14 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-2xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FaGlobe, title: 'Global Network', desc: '150+ countries worldwide' },
              { icon: FaClock, title: 'On-Time Delivery', desc: '99.9% success rate' },
              { icon: FaShieldAlt, title: 'Secure Handling', desc: 'Fully insured shipments' },
              { icon: FaMapMarkerAlt, title: 'Real-Time Tracking', desc: 'Live GPS monitoring' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-2xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Different Color */}
      <div className="bg-[#22c55e] py-16 text-center">
        <h2 className="text-3xl font-bold text-[#14532d] mb-4">Ready to Get Started?</h2>
        <p className="text-[#14532d]/80 mb-8">Contact us for a custom quote tailored to your needs</p>
        <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#14532d] text-white font-bold rounded-lg hover:bg-[#166534] transition-all">
          Contact Us <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}