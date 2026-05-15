'use client';

import { useTheme } from '@/components/ClientLayout';
import { FaShieldAlt, FaUserShield, FaLock, FaDatabase, FaCookie, FaExchangeAlt, FaEnvelope } from 'react-icons/fa';

export default function Privacy() {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#14532d] to-[#166534] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-200">Last updated: January 2024</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
          {/* Introduction */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaShieldAlt className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              At Package Delivery Express (PDEX), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. By using our site, you consent to the practices described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaDatabase className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              We collect information that you provide directly to us, such as when you create an account, request a quote, track a package, or contact us for support. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Name, email address, phone number, and physical address</li>
              <li>Shipping and delivery information (origin, destination, package details)</li>
              <li>Payment information (processed securely through third-party payment providers)</li>
              <li>Communication preferences and inquiry history</li>
              <li>Account credentials and authentication data</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaUserShield className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Your Information</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Process and fulfill your shipping requests</li>
              <li>Provide real-time tracking updates</li>
              <li>Send transactional emails (shipment status, delivery confirmations)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services based on usage patterns</li>
              <li>Send marketing communications (only with your consent)</li>
              <li>Comply with legal obligations and prevent fraud</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaExchangeAlt className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information Sharing</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Service providers who assist in our operations (shipping partners, payment processors)</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business partners with your explicit consent for co-branded services</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaLock className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Security</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure servers, regular security audits, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaCookie className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cookies & Tracking</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We use essential cookies (required for basic site functionality), analytics cookies (to understand site usage), and marketing cookies (with your consent). You can control cookie preferences through your browser settings.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaUserShield className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Rights</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-[#22c55e]/10 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaEnvelope className="text-2xl text-[#14532d] dark:text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
            </p>
            <p className="text-gray-900 dark:text-white font-medium mt-2">
              Email: admin@packagedeliveryexpress.com<br />
              Address: Allentown, PA<br />
              Phone: +1(267)223-9811
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Policy Updates</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}