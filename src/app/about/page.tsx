'use client';

import Link from 'next/link';
import { useTheme } from '@/components/ClientLayout';
import { FaGlobe, FaAward, FaUsers, FaClock, FaShieldAlt, FaHeadset, FaArrowRight, FaQuoteLeft, FaCheckCircle, FaMedal, FaChartLine, FaBuilding } from 'react-icons/fa';

const milestones = [
  { year: '2000', title: 'Company Founded', desc: 'Package Delivery Express (PDEX) established in Pennsylvania, USA' },
  { year: '2004', title: 'Domestic Growth', desc: 'Expanded operations across all 50 US states' },
  { year: '2008', title: 'International Expansion', desc: 'Began serving customers across 25+ countries worldwide' },
  { year: '2014', title: 'Service Diversification', desc: 'Launched pet transport and valuable goods handling services' },
  { year: '2018', title: 'Technology Upgrade', desc: 'Implemented advanced GPS tracking system for real-time shipments' },
  { year: '2024', title: 'Global Leader', desc: 'Serving customers across 50+ countries with 1M+ deliveries' },
];

const services = [
  { icon: FaGlobe, title: 'Domestic USA Shipping', desc: 'Reliable shipping across all 50 states with guaranteed delivery times' },
  { icon: FaGlobe, title: 'International Shipping', desc: 'Global reach to over 50 countries with customs clearance support' },
  { icon: FaUsers, title: 'Pet Transport', desc: 'Safe and comfortable transport for pets with specialized care' },
  { icon: FaShieldAlt, title: 'Valuable Goods & Documents', desc: 'Secure handling of high-value items and important documents' },
  { icon: FaChartLine, title: 'Parcel & Package Delivery', desc: 'Fast and efficient delivery for packages of all sizes' },
];

const team = [
  { name: "Daniel Whitmore", role: "CEO & Founder", bio: "25+ years in global freight and supply chain leadership", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
  { name: "Amelia Laurent", role: "Chief Operations Officer", bio: "Specialist in international operations and cargo optimization", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { name: "Victor Mendes", role: "Head of Technology", bio: "Expert in logistics automation and AI-powered tracking systems", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { name: "Naomi Carter", role: "Customer Success Director", bio: "Focused on enterprise client relationships and global support", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
];

export default function About() {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#14532d] to-[#166534] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1950&q=80"
            alt="Global logistics"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Package Delivery Express (PDEX)</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Delivering Beyond Borders Since 2000 — Reliable shipping services across USA and internationally
          </p>
        </div>
      </div>

      {/* Mission Section - Text Left Image Right */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#14532d] dark:text-[#22c55e] font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                Connecting the World,<br />One Package at a Time
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Founded in 2000, Package Delivery Express (PDEX) has grown from a local delivery service to a worldwide logistics network. Based in Pennsylvania, USA, we specialize in domestic and international shipping with a commitment to safe handling of all cargo types.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                We believe that great logistics shouldn't be complicated. Our team works around the clock to ensure your packages arrive safely, on time, and in perfect condition. From small documents to large freight, we handle every shipment with the same care and dedication.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: FaGlobe, value: '50+', label: 'Countries' },
                  { icon: FaUsers, value: '500+', label: 'Team Members' },
                  { icon: FaClock, value: '24/7', label: 'Support' },
                  { icon: FaAward, value: '98%', label: 'Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <stat.icon className="text-2xl text-[#22c55e] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80"
                alt="Our mission"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#22c55e] rounded-xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-[#14532d]">24+</p>
                <p className="text-sm text-[#14532d]/80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#14532d] dark:text-[#22c55e] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Services We Offer</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive shipping solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-2xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do, from daily operations to long-term strategy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaShieldAlt, title: 'Reliability', desc: 'We deliver on our promises. Your shipments arrive safely and on time, every time.' },
              { icon: FaClock, title: 'Speed', desc: 'Fast and efficient delivery ensuring your packages reach their destination quickly.' },
              { icon: FaShieldAlt, title: 'Safety', desc: 'Commitment to safe handling of all cargo types, from documents to valuable goods.' },
              { icon: FaGlobe, title: 'Global Reach', desc: 'Serving customers across 50+ countries with international shipping expertise.' },
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-3xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Over 24 years of logistics excellence — Serving customers across 50+ countries</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#22c55e] hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                      <p className="text-3xl font-bold text-[#22c55e] mb-2">{milestone.year}</p>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#22c55e] rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#14532d] dark:text-[#22c55e] font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to your shipping success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-[#22c55e] font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14532d] to-[#166534]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the Package Delivery Express (PDEX) difference today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#22c55e] text-[#14532d] font-bold rounded-lg hover:bg-[#16a34a]">
              Contact Us <FaArrowRight className="ml-2" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#14532d]">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}