'use client';

import Link from 'next/link';
import { useTheme } from './ClientLayout';
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaBox, FaHeadset, FaInfo, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

export default function Navbar() {
  const { isDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: FaHome },
    { href: '/services', label: 'Services', icon: FaBox },
    { href: '/about', label: 'About', icon: FaInfo },
    { href: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - PDEX */}
      <div className="bg-[#14532d] dark:bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-300">Powered by</span>
              <img 
                src="/assets/United_Parcel_Service_logo_2014.svg.png" 
                alt="UPS" 
                className="h-6 w-auto opacity-80"
                onError={(e) => {
                  e.currentTarget.src = 'https://www.ups.com/assets/resources/webimages/ups_logo_white.png';
                }}
              />
              <span className="text-xs text-gray-300">& Global Partners</span>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-xs">
              <Link href="/privacy" className="hover:text-[#22c55e] transition-colors">Privacy Policy</Link>
              <span className="text-gray-500">|</span>
              <Link href="/terms" className="hover:text-[#22c55e] transition-colors">Terms of Service</Link>
              <span className="text-gray-500">|</span>
              <Link href="/faq" className="hover:text-[#22c55e] transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`${isDarkMode ? 'text-gray-300 hover:text-[#22c55e]' : 'text-gray-700 hover:text-[#14532d]'} font-medium transition-colors`}>
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/track" 
                className="px-5 py-2.5 bg-[#14532d] dark:bg-[#22c55e] text-white dark:text-[#14532d] font-semibold rounded-lg hover:opacity-90 transition-all shadow-md"
              >
                Track Package
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} className="text-[#14532d]" /> : <FaBars size={24} className="text-[#14532d]" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} transition-colors`}
                  >
                    <link.icon className="text-[#22c55e]" />
                    {link.label}
                  </Link>
                ))}
                <Link 
                  href="/track" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-[#22c55e] text-[#14532d] font-bold rounded-lg shadow-md"
                >
                  Track Package
                </Link>
              </div>
              
              {/* Mobile Top Links */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link href="/privacy" onClick={() => setMobileMenuOpen(false)} className="text-xs text-gray-500 hover:text-[#22c55e]">Privacy</Link>
                <Link href="/terms" onClick={() => setMobileMenuOpen(false)} className="text-xs text-gray-500 hover:text-[#22c55e]">Terms</Link>
                <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-xs text-gray-500 hover:text-[#22c55e]">FAQ</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}