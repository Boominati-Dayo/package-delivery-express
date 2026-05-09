'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const originIcon = L.divIcon({
  html: `<div style="background:#14532d;color:white;padding:8px 12px;border-radius:20px;font-weight:bold;box-shadow:0 2px 8px rgba(0,0,0,0.3)">Origin</div>`,
  className: 'custom-marker',
  iconSize: [80, 30],
  iconAnchor: [40, 15]
});

const destIcon = L.divIcon({
  html: `<div style="background:#22c55e;color:#14532d;padding:8px 12px;border-radius:20px;font-weight:bold;box-shadow:0 2px 8px rgba(0,0,0,0.3)">Destination</div>`,
  className: 'custom-marker',
  iconSize: [100, 30],
  iconAnchor: [50, 15]
});

const currentIcon = L.divIcon({
  html: `<div style="background:#3b82f6;color:white;padding:6px 10px;border-radius:20px;font-size:12px;font-weight:bold;box-shadow:0 2px 8px rgba(0,0,0,0.3);animation:pulse 2s infinite">Current</div>`,
  className: 'custom-marker',
  iconSize: [80, 26],
  iconAnchor: [40, 13]
});

const defaultCenter: [number, number] = [40.7128, -74.0060];

const locations: Record<string, [number, number]> = {
  'new york': [40.7128, -74.0060],
  'los angeles': [34.0522, -118.2437],
  'chicago': [41.8781, -87.6298],
  'houston': [29.7604, -95.3698],
  'phoenix': [33.4484, -112.0740],
  'philadelphia': [39.9526, -75.1652],
  'san antonio': [29.4241, -98.4936],
  'san diego': [32.7157, -117.1611],
  'dallas': [32.7767, -96.7970],
  'san jose': [37.3382, -121.8863],
  'austin': [30.2672, -97.7431],
  'jacksonville': [30.3322, -81.6557],
  'fort worth': [32.7555, -97.3308],
  'columbus': [39.9612, -82.9988],
  'charlotte': [35.2271, -80.8431],
  'indianapolis': [39.7684, -86.1581],
  'seattle': [47.6062, -122.3321],
  'denver': [39.7392, -104.9903],
  'boston': [42.3601, -71.0589],
  'nashville': [36.1627, -86.7816],
  'detroit': [42.3314, -83.0458],
  'memphis': [35.1495, -90.0490],
  'portland': [45.5152, -122.6784],
  'las vegas': [36.1699, -115.1398],
  'london': [51.5074, -0.1278],
  'paris': [48.8566, 2.3522],
  'berlin': [52.5200, 13.4050],
  'tokyo': [35.6762, 139.6503],
  'sydney': [-33.8688, 151.2093],
  'dubai': [25.2048, 55.2708],
  'singapore': [1.3521, 103.8198],
  'hong kong': [22.3193, 114.1694],
  'toronto': [43.6532, -79.3832],
  'vancouver': [49.2827, -123.1207],
  'mumbai': [19.0760, 72.8777],
  'shanghai': [31.2304, 121.4737],
  'beijing': [39.9042, 116.4074],
  'lagos': [6.5244, 3.3792],
  'cairo': [30.0444, 31.2357],
  'johannesburg': [-26.2041, 28.0473],
  'nairobi': [-1.2921, 36.8219],
  'accra': [5.6037, -0.1870],
  'mcclellan-palomar airport': [33.1283, -117.1063],
  'chicago rockford international': [42.2536, -89.0972],
  'damas': [33.5138, 36.2765],
  'entre terre rouge': [-20.1609, 57.4989],
};

function getCoordinates(location: string): [number, number] {
  const loc = location.toLowerCase();
  for (const [key, coords] of Object.entries(locations)) {
    if (loc.includes(key) || key.includes(loc.split(',')[0].trim())) {
      return coords;
    }
  }
  return defaultCenter;
}

interface MapComponentProps {
  origin: string;
  destination: string;
  currentLocation?: string;
}

export default function MapComponent({ origin, destination, currentLocation }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const originCoords = getCoordinates(origin);
    const destCoords = getCoordinates(destination);
    const currentCoords = currentLocation ? getCoordinates(currentLocation) : null;

    const map = L.map(mapRef.current).setView(currentCoords || originCoords, 5);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    L.marker(originCoords, { icon: originIcon }).addTo(map).bindPopup(`<b>Origin:</b> ${origin}`);
    L.marker(destCoords, { icon: destIcon }).addTo(map).bindPopup(`<b>Destination:</b> ${destination}`);

    if (currentCoords) {
      L.marker(currentCoords, { icon: currentIcon }).addTo(map).bindPopup(`<b>Current Location:</b> ${currentLocation}`);
    }

    const latlngs: L.LatLngExpression[] = [originCoords];
    if (currentCoords) latlngs.push(currentCoords);
    latlngs.push(destCoords);

    L.polyline(latlngs, {
      color: '#22c55e',
      weight: 4,
      opacity: 0.8,
      dashArray: '10, 10',
    }).addTo(map);

    const bounds = L.latLngBounds(latlngs as [number, number][]);
    map.fitBounds(bounds, { padding: [50, 50] });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [origin, destination, currentLocation]);

  return (
    <>
      <style>{`
        .custom-marker { background: transparent; border: none; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
      <div ref={mapRef} className="w-full h-80 md:h-96 rounded-xl z-0" />
    </>
  );
}