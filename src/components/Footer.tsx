'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = 2024;

  return (
    <footer className="bg-[#14532d] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/PDEXLogo.png" alt="Package Delivery Express (PDEX)" className="h-12 mb-4" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
           
            <p className="text-gray-300 mb-4">
              Since 2000, we've delivered packages, pets, and valuable goods across the USA and worldwide. Reliable, secure, and on-time—trust PDEX for all your shipping needs.
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs text-gray-400">Powered by</span>
              <img 
                src="/assets/United_Parcel_Service_logo_2014.svg.png" 
                alt="UPS" 
                className="h-5 w-auto opacity-80"
                onError={(e) => {
                  e.currentTarget.src = 'https://www.ups.com/assets/resources/webimages/ups_logo_white.png';
                }}
              />
              <span className="text-xs text-gray-400">& Global Partners</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#22c55e] transition-colors"><FaFacebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#22c55e] transition-colors"><FaTwitter size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#22c55e] transition-colors"><FaLinkedin size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#22c55e] transition-colors"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-[#22c55e] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#22c55e] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#22c55e] transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-[#22c55e] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-[#22c55e] transition-colors">Domestic Shipping</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#22c55e] transition-colors">International Shipping</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#22c55e] transition-colors">Pet Transport</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#22c55e] transition-colors">Valuable Goods</Link></li>
              <li><Link href="/track" className="text-gray-300 hover:text-[#22c55e] transition-colors">Track Shipment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#22c55e] mt-1" />
                <span className="text-gray-300">
                  Allentown, PA<br />
                  Serving all 50 states and international destinations
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#22c55e]" />
                <a href="tel:+14842237024" className="text-gray-300 hover:text-[#22c55e] transition-colors">+1(484)223-7024</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#22c55e]" />
                <a href="mailto:info@pdex.com" className="text-gray-300 hover:text-[#22c55e] transition-colors">info@pdex.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="text-[#22c55e]" />
                <span className="text-gray-300">Mon-Sat: 8AM - 12AM EST</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/assets/United_Parcel_Service_logo_2014.svg.png" 
                alt="UPS" 
                className="h-6 w-auto opacity-80"
                onError={(e) => {
                  e.currentTarget.src = 'https://www.ups.com/assets/resources/webimages/ups_logo_white.png';
                }}
              />
              <span className="text-xs text-gray-400">& Global Partners</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} Package Delivery Express (PDEX). All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Founded in Pennsylvania, USA • Since 2000
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-2 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-[#22c55e] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-[#22c55e] transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}