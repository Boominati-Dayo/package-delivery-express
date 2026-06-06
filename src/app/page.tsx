'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/ClientLayout';
import { FaGlobe, FaCheckCircle, FaBox, FaPlane, FaShip, FaTruck, FaWarehouse, FaArrowRight, FaShieldAlt, FaHeadset, FaChartLine, FaStar, FaQuoteLeft, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaShippingFast, FaUser, FaAward, FaCertificate, FaMedal, FaHandshake, FaLeaf, FaSearch, FaSpinner, FaPaw } from 'react-icons/fa';

const reviews = [
  { name: "Marcus Thompson", role: "Supply Chain Director", company: "TechFlow Industries", rating: 5, text: "Package Delivery Express has transformed our logistics operations. Their real-time tracking is incredibly accurate.", location: "Chicago, IL" },
  { name: "Jennifer Nakamura", role: "Operations Manager", company: "Sakura Electronics", rating: 5, text: "The customs clearance process is seamless. They handle all the documentation professionally.", location: "Los Angeles, CA" },
  { name: "Robert Chen", role: "Import/Export Manager", company: "Pacific Trade Co", rating: 4, text: "Reliable partner for our cross-border shipments. Their communication is excellent.", location: "Seattle, WA" },
  { name: "Sarah Mitchell", role: "E-commerce Owner", company: "Urban Trends Boutique", rating: 5, text: "As a small business owner, I need a logistics partner I can trust.", location: "Austin, TX" },
  { name: "David Kowalski", role: "Logistics Coordinator", company: "Midwest Manufacturing", rating: 4, text: "Their warehouse management system integration saved us hours of manual work.", location: "Detroit, MI" },
  { name: "Amanda Price", role: "CEO", company: "GreenLeaf Organics", rating: 5, text: "Sustainability matters to our brand. PDEX's carbon-offset program aligns perfectly.", location: "Portland, OR" },
  { name: "Michael Santos", role: "Procurement Manager", company: "Apex Construction", rating: 4, text: "Heavy equipment shipping requires expertise. They have the right equipment.", location: "Phoenix, AZ" },
  { name: "Emily Watson", role: "Fulfillment Lead", company: "HomeStyle Decor", rating: 5, text: "The bulk shipping rates are competitive, and their LTL services are perfect.", location: "Charlotte, NC" },
  { name: "James Okonkwo", role: "International Sales", company: "AfroTech Solutions", rating: 5, text: "Shipping to 12 African countries used to be a nightmare. No more!", location: "Atlanta, GA" },
  { name: "Lisa Fernandez", role: "Pharma Operations", company: "MedCore Pharmaceuticals", rating: 5, text: "Temperature-controlled shipping for our medical supplies is critical. They deliver.", location: "Miami, FL" },
  { name: "Kevin O'Brien", role: "Fleet Manager", company: "O'Brien Fresh Foods", rating: 4, text: "Perishable goods need speed and reliability. Their refrigerated fleet is modern.", location: "Boston, MA" },
  { name: "Priya Sharma", role: "Fashion Buyer", company: "Boutique Boulevard", rating: 5, text: "Fashion moves fast, and so does PDEX. Same-day delivery is a game-changer.", location: "New York, NY" },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <FaStar key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
  ));
};

export default function Home() {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setIsTracking(true);
      router.push(`/track?tracking=${encodeURIComponent(trackingNumber)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#14532d] to-[#166534] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1950&q=80"
            alt="Global logistics"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <FaGlobe className="text-[#22c55e] mr-2" />
                <span className="text-white text-sm">Since 2000</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Package Delivery<br />
                <span className="text-[#22c55e]">Express (PDEX)</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-xl">
                Comprehensive package delivery services. We handle everything from small packages to large shipments, ensuring efficient and secure delivery worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/track"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#22c55e] text-[#14532d] font-bold rounded-lg hover:bg-[#16a34a] transition-all shadow-lg"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Track Package
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#14532d] transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="lg:hidden mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-white text-lg font-bold mb-4">Quick Tracking</h3>
                <form onSubmit={handleQuickTrack} className="space-y-4">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                  />
                  <button
                    type="submit"
                    disabled={isTracking}
                    className="w-full py-3 bg-[#22c55e] text-[#14532d] font-bold rounded-lg hover:bg-[#16a34a] transition-all flex items-center justify-center gap-2"
                  >
                    {isTracking ? <FaSpinner className="animate-spin" /> : <FaSearch />}
                    {isTracking ? 'Tracking...' : 'Track Now'}
                  </button>
                </form>
              </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transform skew-x-[-2deg]">
                <h3 className="text-white text-xl font-bold mb-6">Quick Tracking</h3>
                <form onSubmit={handleQuickTrack} className="space-y-4">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                  />
                  <button
                    type="submit"
                    disabled={isTracking}
                    className="w-full py-3 bg-[#22c55e] text-[#14532d] font-bold rounded-lg hover:bg-[#16a34a] transition-all flex items-center justify-center gap-2"
                  >
                    {isTracking ? <FaSpinner className="animate-spin" /> : <FaSearch />}
                    {isTracking ? 'Tracking...' : 'Track Now'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#22c55e] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Countries Served' },
              { value: '24+', label: 'Years of Excellence' },
              { value: '1M+', label: 'Packages Delivered' },
              { value: 'USA & International', label: 'Service Areas' },
            ].map((stat, index) => (
              <div key={index} className="text-[#14532d]">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-[#14532d]/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaTruck, title: 'Domestic Shipping', desc: 'Reliable ground shipping across the USA with real-time tracking.', delay: '0' },
              { icon: FaPlane, title: 'International Shipping', desc: 'Global reach with customs clearance and door-to-door delivery.', delay: '100' },
              { icon: FaPaw, title: 'Pet Transport', desc: 'Safe and compassionate pet transport services worldwide.', delay: '200' },
              { icon: FaBox, title: 'Valuable Goods', desc: 'Secure handling and insurance for high-value shipments.', delay: '300' },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#22c55e] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 bg-[#14532d] dark:bg-[#22c55e] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-2xl text-white dark:text-[#14532d]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-[#14532d] dark:text-[#22c55e] font-medium group-hover:underline">
                  Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Section - Text Left Image Right */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <span className="text-[#14532d] dark:text-[#22c55e] font-semibold text-sm uppercase tracking-wider">Why Choose PDEX</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                Trusted Package Delivery<br />Since 2000
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                With over 24 years of experience, PDEX has built a reputation for reliability, transparency, and exceptional customer service in the logistics industry.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaClock, title: '24+ Years Experience', desc: 'Since 2000, delivering excellence in package logistics' },
                  { icon: FaShieldAlt, title: 'Fully Insured', desc: 'All shipments fully insured for peace of mind' },
                  { icon: FaMapMarkerAlt, title: 'Real-Time Tracking', desc: 'Track your package from pickup to delivery' },
                  { icon: FaHeadset, title: 'Dedicated Support', desc: '24/7 customer support for all your needs' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-xl text-[#14532d] dark:text-[#22c55e]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center mt-8 px-6 py-3 bg-[#14532d] dark:bg-[#22c55e] text-white dark:text-[#14532d] font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Explore Our Services <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Logistics operations"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl max-w-xs transform -skew-x-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">On-Time Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Creative Section - Full Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/globalNetwork.jpg"
            alt="Global network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14532d]/95 via-[#14532d]/85 to-[#14532d]/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#22c55e] font-semibold text-sm uppercase tracking-wider">Global Reach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              USA & International Package Delivery
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              From domestic ground shipping to international deliveries, PDEX connects you to over 50 countries worldwide with reliable, on-time service.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: FaGlobe, label: '50+ Countries' },
                { icon: FaShippingFast, label: 'Express Options' },
                { icon: FaLeaf, label: 'Eco-Friendly' },
                { icon: FaAward, label: 'Since 2000' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#22c55e]/20 backdrop-blur rounded-lg flex items-center justify-center border border-[#22c55e]/30">
                    <item.icon className="text-[#22c55e] text-xl" />
                  </div>
                  <span className="font-medium text-white">{item.label}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center mt-10 px-6 py-3 bg-[#22c55e] text-[#14532d] font-bold rounded-lg hover:bg-[#16a34a] transition-all shadow-lg"
            >
              Learn About Our Network <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Our Certifications</h2>
            <p className="text-gray-600 dark:text-gray-400">Recognized for excellence in global logistics</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { icon: FaAward, label: 'ISO 9001:2015' },
              { icon: FaCertificate, label: 'IATA Member' },
              { icon: FaMedal, label: 'C-TPAT Certified' },
              { icon: FaHandshake, label: 'AEO Certified' },
            ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#14532d]/10 dark:bg-[#22c55e]/10 rounded-full flex items-center justify-center mb-2">
                  <cert.icon className="text-2xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Testimonials - Horizontal Scroll */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <span className="text-[#14532d] dark:text-[#22c55e] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
        </div>

        {/* Marquee/Scroll Container */}
        <div className="relative overflow-hidden py-4">
          <div className="flex gap-6 marquee-container">
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="flex-shrink-0 w-[380px] bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-600">
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(review.rating)}
                </div>
                <FaQuoteLeft className="text-[#22c55e]/30 text-2xl mb-3" />
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm min-h-[60px]">"{review.text}"</p>
                <div className="flex items-center mt-auto pt-3 border-t border-gray-100 dark:border-gray-600">
                  <div className="w-10 h-10 bg-[#14532d] dark:bg-[#22c55e] rounded-full flex items-center justify-center text-white dark:text-[#14532d] font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{review.role}, {review.company}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white dark:bg-gray-700 rounded-full px-6 py-3 shadow-lg">
            <span className="text-2xl font-bold text-[#14532d] dark:text-[#22c55e] mr-2">4.8</span>
            <div className="flex mr-2">{renderStars(5)}</div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Based on 847 reviews</span>
          </div>
        </div>
      </section>

      {/* CTA Section - Different from Footer */}
      <section className="py-20 bg-gradient-to-r from-[#22c55e] to-[#16a34a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#14532d] mb-6">
            Ready to Ship with Us?
          </h2>
          <p className="text-xl text-[#14532d]/80 mb-8">
            Experience the difference of professional package delivery services
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#14532d] text-white font-bold rounded-lg hover:bg-[#166534] transition-all shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#14532d] text-[#14532d] font-bold rounded-lg hover:bg-[#14532d] hover:text-white transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}