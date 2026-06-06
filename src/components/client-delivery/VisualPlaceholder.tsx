import React from 'react';
import { Map, Image, MapPin, ArrowRight, PieChart, Calendar } from 'lucide-react';
import { PlaceholderType, placeholderLabel } from '../../data/clientDeliveryTemplate';

const placeholderIcon: Record<PlaceholderType, React.ReactNode> = {
  'route-map': <Map size={20} className="text-cool-gray-400" />,
  'destination-mood': <Image size={20} className="text-cool-gray-400" />,
  'neighborhood-map': <MapPin size={20} className="text-cool-gray-400" />,
  'transfer-diagram': <ArrowRight size={20} className="text-cool-gray-400" />,
  'budget-allocation': <PieChart size={20} className="text-cool-gray-400" />,
  'booking-timeline': <Calendar size={20} className="text-cool-gray-400" />,
};

interface VisualPlaceholderProps {
  type: PlaceholderType;
  height?: 'sm' | 'md' | 'lg';
  className?: string;
}

const heightClass = { sm: 'h-28', md: 'h-44', lg: 'h-64' };

export default function VisualPlaceholder({ type, height = 'md', className = '' }: VisualPlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-cool-gray-50 border border-dashed border-cool-gray-300 rounded-custom ${heightClass[height]} ${className}`}
      aria-label={`Placeholder visual: ${placeholderLabel[type]}`}
    >
      {placeholderIcon[type]}
      <span className="text-[10px] uppercase tracking-widest font-bold text-cool-gray-400 font-sans">
        {placeholderLabel[type]}
      </span>
    </div>
  );
}
