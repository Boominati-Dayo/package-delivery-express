'use client';

import { useTheme } from '@/components/ClientLayout';
import { FaFileContract, FaGavel, FaShippingFast, FaUserCheck, FaDollarSign, FaExclamationTriangle, FaShieldAlt, FaEnvelope } from 'react-icons/fa';

export default function Terms() {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#14532d] to-[#166534] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-200">Last updated: January 2024</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
          {/* Introduction */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaFileContract className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Agreement to Terms</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Welcome to Package Delivery Express (PDEX). These Terms of Service ("Terms") govern your use of our website and logistics services. By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding agreement between you and Package Delivery Express (PDEX).
            </p>
          </section>

          {/* Services */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaShippingFast className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Services</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Package Delivery Express (PDEX) provides the following services subject to these Terms:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Domestic and international shipping services</li>
              <li>Air, sea, and ground freight transportation</li>
              <li>Warehousing and storage solutions</li>
              <li>Package tracking and logistics management</li>
              <li>Customs clearance and documentation services</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Specific service availability may vary by location. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaUserCheck className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Account & Eligibility</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              To use certain services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Be at least 18 years of age or have parental/guardian consent</li>
              <li>Not share your account credentials with unauthorized parties</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          {/* Shipment Terms */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaShippingFast className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Shipment Terms</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Shipping Restrictions</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  You agree not to ship prohibited items including but not limited to: hazardous materials, illegal substances, weapons, perishables without proper packaging, and items prohibited by international law. We reserve the right to inspect packages and refuse shipment of prohibited items.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Packaging Requirements</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  All packages must be properly packaged to ensure safe delivery. We recommend using industry-standard packaging materials. Package Delivery Express (PDEX) is not responsible for damage resulting from inadequate packaging.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Delivery Times</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Stated delivery times are estimates only and not guaranteed. Delivery times may be affected by weather, customs delays, carrier issues, and other factors beyond our control. We do not guarantee delivery by a specific date or time unless expressly agreed in writing.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing & Payment */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaDollarSign className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pricing & Payment</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              All prices are subject to change without notice. Pricing factors include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Package weight and dimensions</li>
              <li>Distance and destination</li>
              <li>Shipping method and speed</li>
              <li>Fuel surcharges and additional fees</li>
              <li>Customs duties and taxes for international shipments</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Payment is required at time of booking unless credit terms have been established. We accept major credit cards, bank transfers, and corporate accounts. All fees are non-refundable unless otherwise specified.
            </p>
          </section>

          {/* Liability */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaShieldAlt className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Liability & Insurance</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Our liability for lost or damaged shipments is limited as follows:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Standard coverage: Up to $100 per shipment (included free)</li>
              <li>Extended coverage: Available for purchase based on declared value</li>
              <li>Claims must be filed within 30 days of delivery or expected delivery</li>
              <li>Proof of value and damage documentation may be required</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              We are not liable for delays caused by circumstances beyond our control, including natural disasters, war, terrorism, or government actions.
            </p>
          </section>

          {/* Prohibited Uses */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaExclamationTriangle className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Prohibited Uses</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              You agree not to use our services for:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
              <li>Illegal activities or shipping prohibited items</li>
              <li>Fraudulent purposes or misrepresentation</li>
              <li>Harassment, defamation, or harmful content</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Interfering with the proper operation of our services</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaGavel className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Intellectual Property</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              All content on our website, including text, graphics, logos, and software, is the property of Package Delivery Express (PDEX) and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          {/* Termination */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FaGavel className="text-2xl text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Termination</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the services will cease immediately. Termination does not relieve you of obligations incurred prior to termination.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of New York.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-[#22c55e]/10 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaEnvelope className="text-2xl text-[#14532d] dark:text-[#22c55e]" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-900 dark:text-white font-medium mt-2">
              Email: admin@packagedeliveryexpress.com<br />
              Address: Allentown, PA<br />
              Phone: +1(267)223-9811
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}