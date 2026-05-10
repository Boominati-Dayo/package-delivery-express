'use client';

import { useEffect, useRef, useState } from 'react';
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

const defaultCenter: [number, number] = [40.4406, -79.9959];

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
  'pittsburgh': [40.4406, -79.9959],
  'allentown': [40.6084, -75.4902],
  'fairless hills': [40.1818, -74.8557],
  'bucks county': [40.2875, -75.0405],
  'lancaster': [40.0379, -76.3056],
  'reading': [40.3356, -75.9274],
  'bethlehem': [40.6284, -75.3674],
  'easton': [40.7420, -75.1066],
  'scranton': [41.4087, -75.6624],
  'harrisburg': [40.2732, -76.8867],
  'york': [39.9626, -76.7276],
  ' Wilkes-Barre': [41.2459, -75.8813],
  'levittown': [40.1551, -74.8285],
  'trevose': [40.1229, -74.9835],
  'feasterville': [40.1434, -74.9796],
  'langhorne': [40.1740, -74.9224],
  'morrisville': [40.2159, -74.7785],
  'warminster': [40.1779, -75.0734],
  'doylestown': [40.3101, -75.1288],
  'perkasie': [40.3718, -75.2924],
  'quakertown': [40.4418, -75.3416],
  'bensalem': [40.1001, -74.9342],
  'phila': [39.9526, -75.1652],
  'philadelphia pa': [39.9526, -75.1652],
  'pittsburgh pa': [40.4406, -79.9959],
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
  'kingston': [17.9714, -76.7936],
  'nassau': [25.0343, -77.3963],
  'port au prince': [18.5944, -72.3074],
  'santo domingo': [18.4861, -69.9312],
  'georgetown': [6.8013, -58.1551],
  'san juan': [18.4655, -66.1057],
  'havana': [23.1136, -82.3666],
};

function extractCityFromAddress(address: string): string {
  const cleaned = address.toLowerCase().replace(/united states|usa|us$/g, '').trim();
  const parts = cleaned.split(',').map(p => p.trim());
  for (let i = parts.length - 1; i >= 0; i--) {
    const part = parts[i].replace(/^\d+.*?\s/, '');
    if (part.length > 2 && !/^\d{5}/.test(part) && !/^pa$|^ny$|^ca$/i.test(part)) {
      return part;
    }
  }
  return parts[0] || cleaned;
}

function findBestMatch(location: string): [number, number] {
  const loc = location.toLowerCase();
  
  for (const [key, coords] of Object.entries(locations)) {
    if (loc.includes(key) || key.includes(loc) || loc.split(',')[0].trim() === key) {
      return coords;
    }
  }
  
  const cityName = extractCityFromAddress(location);
  for (const [key, coords] of Object.entries(locations)) {
    if (cityName.includes(key) || key.includes(cityName)) {
      return coords;
    }
  }
  
  return defaultCenter;
}

interface GeocodingResult {
  lat: number;
  lng: number;
}

async function geocodeAddress(address: string): Promise<GeocodingResult | null> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
    );
    const data = await response.json();
    if (data && data[0]) {
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    }
  } catch (error) {
    console.error('Geocoding failed:', error);
  }
  return null;
}

interface MapComponentProps {
  origin: string;
  destination: string;
  currentLocation?: string;
}

export default function MapComponent({ origin, destination, currentLocation }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = async () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      
      setLoading(true);
      setError(null);
      
      let originCoords = findBestMatch(origin);
      let destCoords = findBestMatch(destination);
      let currentCoords = currentLocation ? findBestMatch(currentLocation) : null;
      
      const geocoded = await Promise.all([
        !locations[origin.toLowerCase()] ? geocodeAddress(origin) : null,
        !locations[destination.toLowerCase()] ? geocodeAddress(destination) : null,
        currentLocation && !locations[currentLocation.toLowerCase()] ? geocodeAddress(currentLocation) : null
      ]);
      
      if (geocoded[0]) originCoords = [geocoded[0].lat, geocoded[0].lng];
      if (geocoded[1]) destCoords = [geocoded[1].lat, geocoded[1].lng];
      if (geocoded[2]) currentCoords = [geocoded[2].lat, geocoded[2].lng];
      
      const map = L.map(mapRef.current).setView(currentCoords || originCoords, 10);
      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const originMarker = L.marker(originCoords, { icon: originIcon }).addTo(map).bindPopup(`<b>Origin:</b><br>${origin}`);
      const destMarker = L.marker(destCoords, { icon: destIcon }).addTo(map).bindPopup(`<b>Destination:</b><br>${destination}`);
      
      markersRef.current = [originMarker, destMarker];

      if (currentCoords) {
        const currentMarker = L.marker(currentCoords, { icon: currentIcon }).addTo(map).bindPopup(`<b>Current Location:</b><br>${currentLocation}`);
        markersRef.current.push(currentMarker);
        
        const latlngs: L.LatLngExpression[] = [originCoords, currentCoords, destCoords];
        L.polyline(latlngs, {
          color: '#22c55e',
          weight: 4,
          opacity: 0.8,
          dashArray: '10, 10',
        }).addTo(map);
        
        const bounds = L.latLngBounds(latlngs as [number, number][]);
        map.fitBounds(bounds, { padding: [50, 50] });
      } else {
        const latlngs: L.LatLngExpression[] = [originCoords, destCoords];
        L.polyline(latlngs, {
          color: '#22c55e',
          weight: 4,
          opacity: 0.8,
          dashArray: '10, 10',
        }).addTo(map);
        
        const bounds = L.latLngBounds(latlngs as [number, number][]);
        map.fitBounds(bounds, { padding: [50, 50] });
      }

      setLoading(false);
    };

    initMap();

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
      <div className="relative w-full h-80 md:h-96 rounded-xl z-0">
        {loading && (
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-500">Loading map...</p>
            </div>
          </div>
        )}
        <div ref={mapRef} className="w-full h-full rounded-xl" />
      </div>
    </>
  );
}