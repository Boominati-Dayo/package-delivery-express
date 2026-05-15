'use client';

import { useState } from 'react';
import { useTheme } from '@/components/ClientLayout';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaUser, FaEnvelopeOpenText, FaCheckCircle, FaSpinner, FaPlane, FaShip, FaTruck, FaWarehouse } from 'react-icons/fa';

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#14532d] to-[#166534] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto px-4">
          Get in touch with our team. We're here to help with all your shipping needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Have questions about our services? Need a custom quote? Our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Our Office</h3>
                  <p className="text-gray-600 dark:text-gray-400">Allentown, PA<br />United States</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+1(267)223-9811</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">admin@packagedeliveryexpress.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 8AM - 6PM EST<br />Saturday: 9AM - 2PM EST</p>
                </div>
              </div>
            </div>

            {/* Services Quick Links */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Our Services</h3>
              <div className="space-y-3">
                {[
                  { icon: FaPlane, label: 'Air Freight' },
                  { icon: FaShip, label: 'Sea Freight' },
                  { icon: FaTruck, label: 'Ground Transport' },
                  { icon: FaWarehouse, label: 'Warehousing' },
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <service.icon className="text-[#22c55e]" />
                    <span>{service.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FaEnvelopeOpenText className="text-2xl text-[#14532d] dark:text-[#22c55e]" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
              </div>

              {success && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center space-x-2">
                  <FaCheckCircle />
                  <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="air">Air Freight</option>
                      <option value="sea">Sea Freight</option>
                      <option value="ground">Ground Transport</option>
                      <option value="warehouse">Warehousing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your shipping needs..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#14532d] dark:bg-[#22c55e] text-white dark:text-[#14532d] font-bold rounded-lg hover:bg-[#166534] disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaEnvelope />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}