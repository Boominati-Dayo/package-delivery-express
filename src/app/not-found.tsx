'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaHome, FaSearch, FaCompass, FaArrowRight, FaBox, FaMap, FaTruck, FaPackage } from 'react-icons/fa';

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 4 + 2,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14532d] via-[#166534] to-[#0f3d1f] flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[500px] h-[500px] bg-[#22c55e]/10 rounded-full blur-[100px] transition-all duration-1000 ease-out"
          style={{ 
            left: `${mousePos.x - 250}px`, 
            top: `${mousePos.y - 250}px`,
            transform: 'translate(0, 0)'
          }}
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#22c55e]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#166534]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full animate-float-slow"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto py-12">
        <div className="relative mb-10">
          <h1 className="text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] via-white to-[#22c55e] animate-gradient tracking-tighter select-none drop-shadow-2xl"
            style={{ textShadow: '0 0 100px rgba(34,197,94,0.4)' }}>
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <FaCompass className="text-white/5 animate-spin-slow" style={{ animationDuration: '30s' }} size={150} />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-14 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#22c55e]/30 to-[#166534]/30 rounded-full mx-auto mb-8 border border-white/10">
            <FaTruck className="text-[#22c55e] text-5xl animate-bounce-slow" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Package Lost in Transit
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Just like a package without a tracking number, this page seems to have gone off the grid. 
            Let's get you back on the delivery route.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <Link
              href="/"
              className="group flex items-center justify-center gap-4 px-8 py-5 bg-[#22c55e] text-[#14532d] font-bold rounded-2xl hover:bg-[#16a34a] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <FaHome className="text-2xl" />
              <span className="text-lg">Back to Home</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform text-xl" />
            </Link>
            <Link
              href="/track"
              className="group flex items-center justify-center gap-4 px-8 py-5 bg-white/10 text-white font-bold rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all backdrop-blur"
            >
              <FaSearch className="text-2xl" />
              <span className="text-lg">Track a Package</span>
              <FaPackage className="group-hover:translate-x-2 transition-transform text-xl" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/services', label: 'Services', icon: FaTruck },
              { href: '/about', label: 'About Us', icon: FaMap },
              { href: '/contact', label: 'Contact', icon: FaBox },
              { href: '/faq', label: 'FAQ', icon: FaSearch },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 px-5 py-3 text-sm text-white/60 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-all border border-white/10 hover:border-white/30 backdrop-blur"
              >
                <link.icon className="text-xs" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
          <p className="text-white/40 text-sm mb-3">Enter a tracking number to find your package</p>
          <form action="/track" method="get" className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="text"
              name="tracking"
              placeholder="Enter PDE-XXXXXXXXXX"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent backdrop-blur text-lg"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#22c55e] text-[#14532d] font-bold rounded-xl hover:bg-[#16a34a] transition-all flex items-center justify-center gap-3 text-lg shadow-lg"
            >
              <FaSearch />
              <span>Track</span>
            </button>
          </form>
        </div>

        <p className="mt-8 text-white/30 text-sm">
          Need help? <Link href="/contact" className="text-[#22c55e] hover:underline">Contact our support team</Link>
        </p>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.6; }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}