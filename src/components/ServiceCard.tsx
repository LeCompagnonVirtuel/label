import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList } from 'lucide-react';
import type { Service } from '../config/company';

const iconMap: Record<string, React.ElementType> = {
  Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList,
};

interface Props {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service }: Props) {
  const Icon = iconMap[service.icon] || Building2;

  return (
    <Link
      to={`/services/${service.id}`}
      className="group relative bg-white rounded-2xl p-5 md:p-6 premium-shadow premium-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden flex flex-col h-full"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange to-orange-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="w-12 h-12 md:w-14 md:h-14 bg-orange/10 group-hover:bg-orange rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
        <Icon size={24} className="text-orange group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="font-heading font-bold text-base md:text-lg text-navy mb-2 group-hover:text-orange transition-colors">
        {service.title}
      </h3>
      <p className="text-steel text-sm leading-relaxed mb-4 flex-1">
        {service.shortDesc}
      </p>

      <div className="flex items-center gap-2 text-orange font-medium text-sm group-hover:gap-3 transition-all mt-auto">
        En savoir plus
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
