'use client';

import { useState, Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTheme } from '@/components/ClientLayout';
import TrackingMap from '@/components/TrackingMap';
import { getStatusBg, getStatusText, formatStatus, STATUS_CONFIGS } from '@/lib/statusUtils';
import { FaSearch, FaBox, FaTruck, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaCopy, FaCheck, FaSpinner, FaRoute, FaMapPin, FaClock, FaShip, FaInfoCircle, FaShareAlt, FaCheckDouble, FaUndo, FaBan, FaPause, FaArrowRight, FaWeight, FaRuler, FaShippingFast, FaShieldAlt, FaHeadset, FaExclamationTriangle, FaGlobe } from 'react-icons/fa';

const STATUS_ICONS: Record<string, any> = {
  'pending': FaClock,
  'picked up': FaBox,
  'in transit': FaTruck,
  'out for delivery': FaMapPin,
  'delivered': FaCheckDouble,
  'delayed': FaBan,
  'exception': FaExclamationTriangle,
  'on hold': FaPause,
  'returned': FaUndo,
};

const STATUS_COLORS: Record<string, string> = {
  'pending': '#f59e0b',
  'picked up': '#a855f7',
  'in transit': '#3b82f6',
  'out for delivery': '#6366f1',
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
  weight: string;
  length?: string;
  width?: string;
  height?: string;
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

function TrackContent() {
  const { isDarkMode } = useTheme();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const trackingFromUrl = searchParams.get('tracking');
    if (trackingFromUrl) {
      setTrackingNumber(trackingFromUrl);
      fetchTracking(trackingFromUrl);
    }
  }, [searchParams]);

  const fetchTracking = async (tracking: string) => {
    setIsLoading(true);
    setError(null);
    setShipment(null);
    try {
      const response = await fetch(`/api/trackings/${tracking}`);
      const data = await response.json();
      if (data.success) setShipment(data.data);
      else setError('Shipment not found. Please check your tracking number and try again.');
    } catch {
      setError('Shipment not found. Please check your tracking number and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyTracking = () => {
    navigator.clipboard.writeText(`${window.location.origin}/track?tracking=${trackingNumber}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) { setError('Please enter a tracking number'); return; }
    window.history.pushState({}, '', `/track?tracking=${encodeURIComponent(trackingNumber.trim())}`);
    fetchTracking(trackingNumber.trim());
  };

  const shareTracking = async () => {
    const shareUrl = `${window.location.origin}/track?tracking=${trackingNumber}`;
    if (navigator.share) {
      await navigator.share({
        title: 'Track Shipment',
        text: `Track my shipment ${shipment?.trackingNumber}`,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  const statusColor = STATUS_COLORS[shipment?.status?.toLowerCase() || 'pending'] || '#6b7280';
  const statusIcon = STATUS_ICONS[shipment?.status?.toLowerCase() || 'pending'] || FaBox;
  const StatusIconComponent = statusIcon;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="bg-gradient-to-r from-[#14532d] to-[#166534] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Track Your Shipment</h1>
          <p className="text-gray-300 mb-6 md:text-lg">Real-time tracking and shipment updates</p>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number"
                  className="w-full px-5 py-3 md:py-4 rounded-lg text-lg bg-white text-gray-900 placeholder-gray-500 shadow-lg focus:ring-2 focus:ring-[#22c55e] text-base md:text-lg" />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl hidden sm:block" />
              </div>
              <button type="submit" disabled={isLoading}
                className="px-6 md:px-8 py-3 md:py-4 bg-[#22c55e] text-[#14532d] font-bold rounded-lg hover:bg-[#16a34a] disabled:opacity-50 transition-all shadow-lg flex items-center justify-center gap-2 text-base md:text-lg">
                {isLoading ? <><FaSpinner className="animate-spin" /> <span className="hidden sm:inline">Tracking...</span><span className="sm:hidden">...</span></> : <><FaSearch /> <span className="hidden sm:inline">Track</span><span className="sm:hidden">Go</span></>}
              </button>
            </div>
          </form>
        </div>
      </div>

      {error && (
        <div className="max-w-4xl mx-auto px-4 mt-6">
          <div className="bg-red-100 text-red-800 p-4 rounded-lg text-center">{error}</div>
        </div>
      )}

      {shipment && (
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-8 space-y-5 md:space-y-6">
          {/* Tracking Header Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tracking Number</span>
                  <FaInfoCircle className="text-gray-400 text-xs" />
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{shipment.trackingNumber}</span>
                  <button onClick={handleCopyTracking} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-4 py-2 rounded-full font-semibold ${getStatusBg(shipment.status)}`}>
                  <span className="flex items-center gap-2">
                    <StatusIconComponent className={`text-sm ${getStatusText(shipment.status)}`} />
                    <span>{formatStatus(shipment.status)}</span>
                  </span>
                </span>
              </div>
            </div>
            
            {/* Quick Actions - Mobile Friendly */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <button onClick={shareTracking} className="flex items-center gap-2 px-3 py-2 bg-[#22c55e]/10 text-[#14532d] dark:text-[#22c55e] rounded-lg text-sm font-medium hover:bg-[#22c55e]/20 transition-colors">
                <FaShareAlt /> Share
              </button>
            </div>
          </div>

          {/* Route Map */}
          {shipment.showLiveMap && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaRoute className="text-[#22c55e]" /> Shipment Route
            </h2>
            <TrackingMap origin={shipment.origin} destination={shipment.destination} currentLocation={shipment.currentLocation} />
            
            {/* Route Summary - Mobile Tiles */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">From</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm break-words leading-tight">{shipment.origin}</p>
              </div>
              <div className="flex items-center justify-center">
                <FaArrowRight className="text-[#22c55e] text-xl" />
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">To</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm break-words leading-tight">{shipment.destination}</p>
              </div>
            </div>
          </div>
          )}

          {/* Shipment Progress - Timeline */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
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
                      <div 
                        className="absolute left-0 md:left-1 -ml-[6px] md:-ml-[8px] mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md"
                        style={{ backgroundColor: isFirst ? color : `${color}20`, border: `2px solid ${color}` }}
                      >
                        <IconComponent className={`text-lg md:text-xl ${isFirst ? 'text-white' : ''}`} style={{ color: isFirst ? 'white' : color }} />
                      </div>
                      <div className={`p-3 md:p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <span className="font-bold text-base md:text-lg" style={{ color }}>{formatStatus(history.status)}</span>
                          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{history.date} at {history.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                          <FaMapMarkerAlt className="text-[#22c55e] flex-shrink-0" />
                          <span className="font-medium text-gray-900 dark:text-white">{history.location}</span>
                        </div>
                        {history.remarks && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">"{history.remarks}"</p>
                        )}
                        <p className="text-xs text-gray-400 mt-2">Updated by: {history.updatedBy}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Shipment Details - Mobile Tiles */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaInfoCircle className="text-[#22c55e]" /> Shipment Details
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: 'Carrier', value: shipment.carrier, icon: FaShip },
                { label: 'Mode', value: shipment.shipmentMode, icon: FaTruck },
                { label: 'Type', value: shipment.shipmentType || 'Standard', icon: FaBox },
                { label: 'Payment', value: shipment.paymentMode, icon: FaShip },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 md:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-[#22c55e] text-sm" />
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{item.label}</span>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{item.value}</p>
                </div>
                );
              })}
            </div>

            {/* Delivery Estimate */}
            <div className="mt-4 p-4 bg-[#22c55e]/10 rounded-lg border border-[#22c55e]/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#22c55e] rounded-full flex items-center justify-center">
                  <FaCalendarAlt className="text-[#14532d] text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Expected Delivery</p>
                  <p className="font-bold text-[#14532d] dark:text-[#22c55e] text-lg">{shipment.expectedDeliveryDate || 'To be determined'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info - Mobile Tiles */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#14532d] text-white rounded-full flex items-center justify-center text-sm">S</span>
                Shipper
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaUser className="text-[#22c55e] mt-1 flex-shrink-0" />
                  <div className="min-w-0 break-words">
                    <p className="font-medium text-gray-900 dark:text-white">{shipment.shipperName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 break-words">{shipment.shipperAddress}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#22c55e] flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white text-sm break-all">{shipment.shipperPhone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#22c55e] flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white text-sm break-all">{shipment.shipperEmail}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#22c55e] text-[#14532d] rounded-full flex items-center justify-center text-sm font-bold">R</span>
                Receiver
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaUser className="text-[#22c55e] mt-1 flex-shrink-0" />
                  <div className="min-w-0 break-words">
                    <p className="font-medium text-gray-900 dark:text-white">{shipment.receiverName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 break-words">{shipment.receiverAddress}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#22c55e] flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white text-sm break-all">{shipment.receiverPhone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#22c55e] flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white text-sm break-all">{shipment.receiverEmail}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Package Details - Mobile Tiles */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaBox className="text-[#22c55e]" /> Package Details
            </h2>
            
            <div className="space-y-3">
              {(shipment.packages?.length > 0 ? shipment.packages : [{
                quantity: '1', pieceType: 'Box', description: 'N/A',
                weight: '0'
              }]).map((pkg, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Quantity</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{pkg.quantity}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Type</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{pkg.pieceType}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Description</p>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{pkg.description || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Weight</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{pkg.weight} kg</p>
                    </div>
                  </div>
                  {(pkg.length || pkg.width || pkg.height) && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Dimensions</p>
                      <div className="flex items-center gap-2 text-sm">
                        <FaRuler className="text-[#22c55e]" />
                        <span className="text-gray-900 dark:text-white">{pkg.length || 0} × {pkg.width || 0} × {pkg.height || 0} cm</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Total Freight */}
            {shipment.totalFreight && (
              <div className="mt-4 p-4 bg-[#14532d] dark:bg-[#22c55e]/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 dark:text-gray-400 font-medium">Total Freight</span>
                  <span className="text-xl md:text-2xl font-bold text-[#22c55e]">${shipment.totalFreight}</span>
                </div>
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-xl p-4 md:p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#14532d] rounded-full flex items-center justify-center">
                  <FaHeadset className="text-[#22c55e] text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#14532d]">Need Help?</h3>
                  <p className="text-[#14532d]/70 text-sm">Contact our support team for assistance</p>
                </div>
              </div>
              <a href="/contact" className="px-6 py-3 bg-[#14532d] text-white font-bold rounded-lg hover:bg-[#166534] transition-colors text-center">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      )}

      {!shipment && !isLoading && (
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">Why Track With Us?</h2>
            <p className="text-gray-600 dark:text-gray-400">Professional logistics solutions for your business</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: FaMapMarkerAlt, title: 'Real-time Tracking', desc: 'Monitor your shipments with GPS accuracy' },
              { icon: FaShieldAlt, title: 'Secure Handling', desc: 'Your packages are fully insured and protected' },
              { icon: FaBox, title: 'Detailed Updates', desc: 'Complete shipment history and status' },
              { icon: FaHeadset, title: '24/7 Support', desc: 'Get help anytime from our dedicated team' },
              { icon: FaShippingFast, title: 'Fast Delivery', desc: 'Express shipping options available' },
              { icon: FaGlobe, title: 'Global Coverage', desc: 'Track shipments worldwide' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
              <div key={index} className="text-center p-5 md:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-2xl text-[#14532d] dark:text-[#22c55e]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
              </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Track() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><FaSpinner className="animate-spin text-3xl text-[#14532d]" /></div>}>
      <TrackContent />
    </Suspense>
  );
}