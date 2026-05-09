'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaSearch, FaCompass, FaArrowRight, FaBox, FaMap } from 'react-icons/fa';

export default function NotFound() {
  const [hoverDirection, setHoverDirection] = useState<'left' | 'right'>('right');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14532d] via-[#166534] to-[#14532d] flex items-center justify-center px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#22c55e]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Packages */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/5 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          >
            <FaBox size={40 + i * 5} />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Glitch 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] via-white to-[#22c55e] animate-gradient tracking-tighter select-none"
            style={{ textShadow: '0 0 80px rgba(34,197,94,0.3)' }}>
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <FaCompass className="text-white/10 animate-spin" style={{ animationDuration: '20s' }} size={120} />
          </div>
        </div>

        {/* Message */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-center w-20 h-20 bg-[#22c55e]/20 rounded-full mx-auto mb-6">
            <FaMap className="text-[#22c55e] text-4xl" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            You've Gone Off-Route
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            The page you're looking for has either been relocated, deleted, or never existed. 
            Let's get you back on track.
          </p>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#22c55e] text-[#14532d] font-bold rounded-xl hover:bg-[#16a34a] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaHome />
              <span>Back to Home</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/track"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <FaSearch />
              <span>Track a Package</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
              { href: '/faq', label: 'FAQ' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 hover:border-white/20"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Tracking Input */}
        <div className="mt-8">
          <p className="text-white/50 text-sm mb-3">Know your tracking number?</p>
          <form action="/track" method="get" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="text"
              name="tracking"
              placeholder="Enter tracking number..."
              className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent backdrop-blur"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#22c55e] text-[#14532d] font-bold rounded-xl hover:bg-[#16a34a] transition-all flex items-center justify-center gap-2"
            >
              <FaSearch />
              <span>Track</span>
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </div>
  );
}