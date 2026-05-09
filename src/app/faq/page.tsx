'use client';

import { useState } from 'react';
import { useTheme } from '@/components/ClientLayout';
import { FaQuestionCircle, FaPlus, FaMinus, FaSearch, FaBox, FaTruck, FaPlane, FaShip, FaWarehouse, FaGlobe, FaLock, FaCreditCard, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const faqCategories = [
  { id: 'all', label: 'All', icon: FaQuestionCircle },
  { id: 'tracking', label: 'Tracking', icon: FaBox },
  { id: 'shipping', label: 'Shipping', icon: FaTruck },
  { id: 'services', label: 'Services', icon: FaGlobe },
  { id: 'payment', label: 'Payment', icon: FaCreditCard },
  { id: 'account', label: 'Account', icon: FaLock },
];

const faqs = [
  {
    category: 'tracking',
    question: 'How do I track my package?',
    answer: 'You can track your package by entering your tracking number on our Track page. The tracking number was provided to you when the shipment was created. You can also sign up for SMS or email notifications to receive automatic updates about your shipment status.',
  },
  {
    category: 'tracking',
    question: 'My tracking information hasn\'t updated. What should I do?',
    answer: 'If your tracking information hasn\'t updated, please wait 24-48 hours as updates may take time to reflect. If the issue persists, contact our customer support team with your tracking number, and we\'ll investigate the delay immediately.',
  },
  {
    category: 'tracking',
    question: 'Can I track multiple packages at once?',
    answer: 'Yes, you can track multiple packages by entering all tracking numbers separated by commas on our Track page. This feature allows you to view all your shipments in one convenient dashboard.',
  },
  {
    category: 'shipping',
    question: 'What are your shipping options?',
    answer: 'We offer multiple shipping options: Air Freight (1-3 days), Express Delivery (same-day or next-day), Ground Transport (3-7 days), and Sea Freight (14-30 days for international). The available options depend on your origin and destination.',
  },
  {
    category: 'shipping',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 150 countries worldwide. International shipping times and costs vary based on destination, package size, and selected service. Customs duties and taxes may apply and are the responsibility of the recipient.',
  },
  {
    category: 'shipping',
    question: 'What items cannot be shipped?',
    answer: 'Prohibited items include: hazardous materials (chemicals, batteries), flammable items, weapons, illegal substances, perishables without proper packaging, and items restricted by international law. Please contact us before shipping if you\'re unsure about an item.',
  },
  {
    category: 'shipping',
    question: 'How should I package my items?',
    answer: 'Use a sturdy box appropriate for the item size with adequate cushioning material (bubble wrap, packing peanuts). Seal all edges securely. Fragile items should be clearly marked. We offer professional packing services at select locations.',
  },
  {
    category: 'services',
    question: 'Do you offer warehousing services?',
    answer: 'Yes, we provide secure warehousing with climate control options, inventory management, pick-and-pack services, and distribution. Contact our sales team for customized storage solutions and competitive rates.',
  },
  {
    category: 'services',
    question: 'Can I schedule a pickup?',
    answer: 'Yes, you can schedule a pickup online or by contacting our customer service. We offer flexible pickup windows to accommodate your schedule. Same-day pickups are available in most service areas.',
  },
  {
    category: 'services',
    question: 'Do you offer customs brokerage services?',
    answer: 'Yes, our experienced customs brokerage team handles all documentation and clearance procedures for international shipments. We ensure compliance with all regulations to minimize delays at customs.',
  },
  {
    category: 'payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards (Visa, MasterCard, American Express), bank transfers, PayPal, and corporate accounts with prior approval. Business customers may apply for Net 30 terms.',
  },
  {
    category: 'payment',
    question: 'Are there any hidden fees?',
    answer: 'No, we believe in transparent pricing. All fees are clearly stated before you confirm your shipment. Additional charges may apply for fuel surcharges, residential deliveries, oversized packages, and remote area deliveries. These will be disclosed during the quote process.',
  },
  {
    category: 'payment',
    question: 'Do you offer insurance?',
    answer: 'Yes, we offer comprehensive shipping insurance. Standard coverage of up to $100 is included with every shipment. Extended coverage for higher-value items is available for purchase based on declared value.',
  },
  {
    category: 'account',
    question: 'How do I create an account?',
    answer: 'You can create an account by clicking the "Login" button in the navigation and selecting "Register." You\'ll need to provide your email address and create a password. For business accounts, contact our sales team for bulk pricing.',
  },
  {
    category: 'account',
    question: 'I forgot my password. What should I do?',
    answer: 'Click the "Forgot Password" link on the login page and enter your email address. We\'ll send you instructions to reset your password. If you don\'t receive the email, check your spam folder or contact support.',
  },
  {
    category: 'account',
    question: 'How do I update my account information?',
    answer: 'Log in to your account and navigate to "Account Settings" to update your personal information, address book, and notification preferences. You can also manage your payment methods and saved addresses.',
  },
];

export default function FAQ() {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#14532d] to-[#166534] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto px-4">
          Find answers to common questions about our services, shipping, tracking, and more.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#22c55e] text-[#14532d] font-semibold'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <cat.icon className="text-sm" />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  expandedIndex === index ? 'bg-[#22c55e] text-[#14532d]' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'
                }`}>
                  {expandedIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>
              {expandedIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <FaQuestionCircle className="text-5xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No questions found matching your search.</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#14532d] to-[#166534] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-gray-300 mb-6">Our support team is ready to help you 24/7</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+15551234567" className="inline-flex items-center justify-center px-6 py-3 bg-[#22c55e] text-[#14532d] font-bold rounded-lg hover:bg-[#16a34a]">
              <FaPhone className="mr-2" />
              Call Us
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#14532d]">
              <FaEnvelope className="mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}