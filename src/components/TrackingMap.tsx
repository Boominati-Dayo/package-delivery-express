'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { FaMapPin, FaSpinner } from 'react-icons/fa';

const MapComponent = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-64 md:h-80 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
      <FaSpinner className="animate-spin text-gray-400 text-2xl" />
    </div>
  )
});

interface MapProps {
  origin: string;
  destination: string;
  currentLocation?: string;
}

export default function TrackingMap({ origin, destination, currentLocation }: MapProps) {
  return (
    <div className="w-full">
      <MapComponent origin={origin} destination={destination} currentLocation={currentLocation} />
    </div>
  );
}