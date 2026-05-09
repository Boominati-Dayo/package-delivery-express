export type ShipmentStatus = 
  | 'Pending'
  | 'Picked Up'
  | 'In Transit'
  | 'Out for Delivery'
  | 'Delivered'
  | 'Delayed'
  | 'Exception'
  | 'On Hold'
  | 'Returned';

export interface StatusConfig {
  bg: string;
  text: string;
  border: string;
  icon: 'pending' | 'picked' | 'transit' | 'delivery' | 'delivered' | 'delayed' | 'exception' | 'hold' | 'returned';
}

export const STATUS_CONFIGS: Record<string, StatusConfig> = {
  'pending': {
    bg: 'bg-amber-100 text-amber-900',
    text: 'text-amber-700',
    border: 'border-amber-500',
    icon: 'pending'
  },
  'picked up': {
    bg: 'bg-purple-100 text-purple-900',
    text: 'text-purple-700',
    border: 'border-purple-500',
    icon: 'picked'
  },
  'in transit': {
    bg: 'bg-blue-100 text-blue-900',
    text: 'text-blue-700',
    border: 'border-blue-500',
    icon: 'transit'
  },
  'out for delivery': {
    bg: 'bg-teal-600 text-white',
    text: 'text-white',
    border: 'border-teal-600',
    icon: 'delivery'
  },
  'delivered': {
    bg: 'bg-green-100 text-green-900',
    text: 'text-green-700',
    border: 'border-green-500',
    icon: 'delivered'
  },
  'delayed': {
    bg: 'bg-red-100 text-red-900',
    text: 'text-red-700',
    border: 'border-red-500',
    icon: 'delayed'
  },
  'exception': {
    bg: 'bg-orange-100 text-orange-900',
    text: 'text-orange-700',
    border: 'border-orange-500',
    icon: 'exception'
  },
  'on hold': {
    bg: 'bg-yellow-100 text-yellow-900',
    text: 'text-yellow-700',
    border: 'border-yellow-500',
    icon: 'hold'
  },
  'returned': {
    bg: 'bg-gray-100 text-gray-900',
    text: 'text-gray-700',
    border: 'border-gray-500',
    icon: 'returned'
  },
};

export function getStatusConfig(status: string): StatusConfig {
  const key = status.toLowerCase();
  return STATUS_CONFIGS[key] || STATUS_CONFIGS['pending'];
}

export function getStatusBg(status: string): string {
  return getStatusConfig(status).bg;
}

export function getStatusText(status: string): string {
  return getStatusConfig(status).text;
}

export function getStatusBorder(status: string): string {
  return getStatusConfig(status).border;
}

export function formatStatus(status: string): string {
  return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}