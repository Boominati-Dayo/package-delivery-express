'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <img 
        src="/PDEXLogo.png" 
        alt="Package Delivery Express (PDEX) Logo"
        className="h-12 w-auto"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </Link>
  );
}