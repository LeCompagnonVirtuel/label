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

export default function ServiceCard({ service, index = 0 }: Props) {
  const Icon = iconMap[service.icon] || Building2;

  return (
    <Link
      to={`/services/${service.id}`}
      className="group relative bg-white rounded-2xl p-6 premium-shadow premium-shadow-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange to-orange-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="w-14 h-14 bg-orange/10 group-hover:bg-orange rounded-xl flex items-center justify-center mb-4 transition-all duration-500">
        <Icon size={28} className="text-orange group-hover:text-white transition-colors duration-500" />
      </div>

      <h3 className="font-heading font-bold text-lg text-navy mb-3 group-hover:text-orange transition-colors">
        {service.title}
      </h3>
      <p className="text-steel text-sm leading-relaxed mb-4">
        {service.shortDesc}
      </p>

      <div className="flex items-center gap-2 text-orange font-medium text-sm group-hover:gap-3 transition-all">
        En savoir plus
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
