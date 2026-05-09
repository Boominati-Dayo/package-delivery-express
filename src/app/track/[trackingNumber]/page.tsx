'use client';

import { useState, useEffect } from 'react';
import { useParams, Link } from 'next/navigation';
import { useTheme } from '@/components/ClientLayout';
import TrackingMap from '@/components/TrackingMap';
import { getStatusBg, getStatusText, formatStatus } from '@/lib/statusUtils';
import { FaBox, FaTruck, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaClock, FaCheck, FaCheckCircle, FaExclamationTriangle, FaPause, FaPlane, FaCopy, FaRoute, FaMapPin, FaShareAlt, FaInfoCircle, FaArrowRight, FaShippingFast, FaHeadset } from 'react-icons/fa';

const STATUS_ICONS: Record<string, any> = {
  'pending': FaClock,
  'picked up': FaBox,
  'in transit': FaTruck,
  'out for delivery': FaMapPin,
  'delivered': FaCheckCircle,
  'delayed': FaExclamationTriangle,
  'exception': FaExclamationTriangle,
  'on hold': FaPause,
  'returned': FaPlane,
};

const STATUS_COLORS: Record<string, string> = {
  'pending': '#f59e0b',
  'picked up': '#a855f7',
  'in transit': '#3b82f6',
  'out for delivery': '#06b6d4',
  'delivered': '#22c55e',
  'delayed': '#ef4444',
  'exception': '#f97316',
  'on hold': '#eab308',
  'returned': '#6b7280',
};

interface Package {
  quantity: string;
  pieceType: string;
  description: string;
  length: string;
  width: string;
  height: string;
  weight: string;
}

interface ShipmentHistory {
  date: string;
  time: string;
  location: string;
  status: string;
  updatedBy: string;
  remarks: string;
}

interface Shipment {
  _id: string;
  trackingNumber: string;
  shipperName: string;
  shipperAddress: string;
  shipperPhone: string;
  shipperEmail: string;
  receiverName: string;
  receiverAddress: string;
  receiverPhone: string;
  receiverEmail: string;
  origin: string;
  destination: string;
  carrier: string;
  shipmentType: string;
  shipmentMode: string;
  product: string;
  paymentMode: string;
  totalFreight: string;
  expectedDeliveryDate: string;
  pickupDate: string;
  packages: Package[];
  shipmentHistory: ShipmentHistory[];
  status: string;
  currentLocation: string;
  showLiveMap: boolean;
}

export default function TrackByNumber() {
  const params = useParams();
  const trackingNumber = params.trackingNumber as string;
  const { isDarkMode } = useTheme();
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (trackingNumber) fetchTracking();
  }, [trackingNumber]);

  const fetchTracking = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/trackings/${trackingNumber}`);
      const data = await response.json();
      if (data.success) setShipment(data.data);
      else setError('Shipment not found');
    } catch {
      setError('Failed to fetch tracking information');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyTracking = () => {
    navigator.clipboard.writeText(trackingNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTracking = async () => {
    const shareUrl = `${window.location.origin}/track/${shipment?.trackingNumber}`;
    if (navigator.share) {
      await navigator.share({ title: 'Track PDEX Shipment', text: `Track your package: ${shipment?.trackingNumber}`, url: shareUrl });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Tracking link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#14532d] mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !shipment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <FaBox className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Shipment Not Found</h1>
          <p className="text-gray-500 mb-6">{error || 'The tracking number you entered does not exist.'}</p>
          <Link href="/track" className="px-6 py-3 bg-[#14532d] text-white rounded-lg hover:bg-[#166534]">Try Another Search</Link>
        </div>
      </div>
    );
  }

  const statusColor = STATUS_COLORS[shipment.status.toLowerCase()] || '#6b7280';
  const StatusIconComponent = STATUS_ICONS[shipment.status.toLowerCase()] || FaBox;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="bg-[#14532d] dark:bg-gray-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Track Shipment</h1>
            <p className="text-gray-300 mt-1">Real-time tracking updates</p>
          </div>
          <Link href="/track" className="text-[#22c55e] hover:underline flex items-center gap-2">
            <FaArrowRight className="rotate-180" /> New Search
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-5">
        {/* Header Card */}
        <div className={`rounded-xl p-4 md:p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-lg'}`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-1">Tracking Number</p>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{shipment.trackingNumber}</span>
                <button onClick={handleCopyTracking} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                </button>
              </div>
            </div>
            <span className={`px-4 py-2 rounded-full font-semibold ${getStatusBg(shipment.status)}`}>
              <span className="flex items-center gap-2">
                <StatusIconComponent className={`text-sm ${getStatusText(shipment.status)}`} />
                {formatStatus(shipment.status)}
              </span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <button onClick={shareTracking} className="flex items-center gap-2 px-3 py-2 bg-[#22c55e]/10 text-[#14532d] dark:text-[#22c55e] rounded-lg text-sm font-medium hover:bg-[#22c55e]/20">
              <FaShareAlt /> Share
            </button>
          </div>
        </div>

        {/* Route Map */}
        {shipment.showLiveMap && (
        <div className={`rounded-xl p-4 md:p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-lg'}`}>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <FaRoute className="text-[#22c55e]" /> Shipment Route
          </h2>
          <TrackingMap origin={shipment.origin} destination={shipment.destination} currentLocation={shipment.currentLocation} />
          
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">From</p>
              <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{shipment.origin}</p>
            </div>
            <div className="flex items-center justify-center"><FaArrowRight className="text-[#22c55e] text-xl" /></div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">To</p>
              <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{shipment.destination}</p>
            </div>
          </div>
        </div>
        )}

        {/* Timeline */}
        <div className={`rounded-xl p-4 md:p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-lg'}`}>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <FaShippingFast className="text-[#22c55e]" /> Shipment Progress
          </h2>
          
          <div className="relative">
            <div className="absolute left-[21px] md:left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-5 md:space-y-6">
              {[...shipment.shipmentHistory].reverse().map((history, index) => {
                const s = history.status.toLowerCase();
                const color = STATUS_COLORS[s] || '#6b7280';
                const IconComponent = STATUS_ICONS[s] || FaBox;
                const isFirst = index === 0;
                
                return (
                  <div key={index} className="relative pl-12 md:pl-16">
                    <div className="absolute left-0 md:left-1 -ml-[6px] md:-ml-[8px] mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: isFirst ? color : `${color}20`, border: `2px solid ${color}` }}>
                      <IconComponent className={`text-lg md:text-xl ${isFirst ? 'text-white' : ''}`} style={{ color: isFirst ? 'white' : color }} />
                    </div>
                    <div className={`p-3 md:p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} ${isFirst ? 'ring-2 ring-offset-2' : ''}`} style={isFirst ? { ringColor: color } : {}}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <span className="font-bold text-base md:text-lg" style={{ color }}>{formatStatus(history.status)}</span>
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{history.date} at {history.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm md:text-base">
                        <FaMapMarkerAlt className="text-[#22c55e] flex-shrink-0" />
                        <span className="font-medium text-gray-900 dark:text-white">{history.location}</span>
                      </div>
                      {history.remarks && <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">"{history.remarks}"</p>}
                      <p className="text-xs text-gray-400 mt-2">By: {history.updatedBy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Shipment Details */}
        <div className={`rounded-xl p-4 md:p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-lg'}`}>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <FaInfoCircle className="text-[#22c55e]" /> Shipment Details
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { label: 'Carrier', value: shipment.carrier, icon: FaPlane },
              { label: 'Mode', value: shipment.shipmentMode, icon: FaTruck },
              { label: 'Type', value: shipment.shipmentType || 'Standard', icon: FaBox },
              { label: 'Payment', value: shipment.paymentMode, icon: FaPlane },
            ].map((detail, i) => {
              const Icon = detail.icon;
              return (
              <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 md:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="text-[#22c55e] text-sm" />
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{detail.label}</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{detail.value}</p>
              </div>
              );
            })}
          </div>
          <div className="mt-4 p-4 bg-[#22c55e]/10 rounded-lg border border-[#22c55e]/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#22c55e] rounded-full flex items-center justify-center">
                <FaCalendarAlt className="text-[#14532d] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expected Delivery</p>
                <p className="font-bold text-[#14532d] dark:text-[#22c55e] text-lg">{shipment.expectedDeliveryDate || 'TBD'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className={`rounded-xl p-4 md:p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-lg'}`}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#14532d] text-white rounded-full flex items-center justify-center text-sm">S</span>Shipper
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaUser className="text-[#22c55e] mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white">{shipment.shipperName}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{shipment.shipperAddress}</p>
                </div>
              </div>
              <div className="flex items-center gap-3"><FaPhone className="text-[#22c55e] flex-shrink-0" /><span className="text-gray-900 dark:text-white text-sm">{shipment.shipperPhone}</span></div>
              <div className="flex items-center gap-3"><FaEnvelope className="text-[#22c55e] flex-shrink-0" /><span className="text-gray-900 dark:text-white text-sm truncate">{shipment.shipperEmail}</span></div>
            </div>
          </div>

          <div className={`rounded-xl p-4 md:p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-lg'}`}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#22c55e] text-[#14532d] rounded-full flex items-center justify-center text-sm font-bold">R</span>Receiver
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaUser className="text-[#22c55e] mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white">{shipment.receiverName}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{shipment.receiverAddress}</p>
                </div>
              </div>
              <div className="flex items-center gap-3"><FaPhone className="text-[#22c55e] flex-shrink-0" /><span className="text-gray-900 dark:text-white text-sm">{shipment.receiverPhone}</span></div>
              <div className="flex items-center gap-3"><FaEnvelope className="text-[#22c55e] flex-shrink-0" /><span className="text-gray-900 dark:text-white text-sm truncate">{shipment.receiverEmail}</span></div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className={`rounded-xl p-4 md:p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-lg'}`}>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <FaBox className="text-[#22c55e]" /> Package Details
          </h2>
          <div className="space-y-3">
            {(shipment.packages?.length > 0 ? shipment.packages : [{ quantity: '1', pieceType: 'Box', description: 'N/A', weight: '0' }]).map((pkg, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><p className="text-xs text-gray-500 mb-1">Quantity</p><p className="font-semibold text-gray-900 dark:text-white">{pkg.quantity}</p></div>
                  <div><p className="text-xs text-gray-500 mb-1">Type</p><p className="font-semibold text-gray-900 dark:text-white">{pkg.pieceType}</p></div>
                  <div><p className="text-xs text-gray-500 mb-1">Description</p><p className="font-semibold text-gray-900 dark:text-white text-sm">{pkg.description || 'N/A'}</p></div>
                  <div><p className="text-xs text-gray-500 mb-1">Weight</p><p className="font-semibold text-gray-900 dark:text-white">{pkg.weight} kg</p></div>
                </div>
              </div>
            ))}
          </div>
          {shipment.totalFreight && (
            <div className="mt-4 p-4 bg-[#14532d] dark:bg-[#22c55e]/10 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-white/80 dark:text-gray-400 font-medium">Total Freight</span>
                <span className="text-xl md:text-2xl font-bold text-[#22c55e]">${shipment.totalFreight}</span>
              </div>
            </div>
          )}
        </div>

        {/* Help */}
        <div className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#14532d] rounded-full flex items-center justify-center">
                <FaHeadset className="text-[#22c55e] text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14532d]">Need Help?</h3>
                <p className="text-[#14532d]/70 text-sm">Contact our support team</p>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-3 bg-[#14532d] text-white font-bold rounded-lg hover:bg-[#166534] transition-colors text-center">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}