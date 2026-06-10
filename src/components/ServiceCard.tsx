import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList } from 'lucide-react';
import type { Service } from '../config/company';

const iconMap: Record<string, React.ElementType> = {
  Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList,
};

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const Icon = iconMap[service.icon] || Building2;

  return (
    <Link
      to={`/services/${service.id}`}
      className="group block bg-white rounded-xl p-5 premium-shadow premium-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full"
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange to-orange-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-xl" />
      <div className="w-10 h-10 bg-orange/10 group-hover:bg-orange rounded-lg flex items-center justify-center mb-3 transition-colors duration-300">
        <Icon size={20} className="text-orange group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-heading font-bold text-sm md:text-base text-navy mb-1.5 group-hover:text-orange transition-colors">
        {service.title}
      </h3>
      <p className="text-steel text-xs leading-relaxed mb-3 line-clamp-2">
        {service.shortDesc}
      </p>
      <div className="flex items-center gap-1.5 text-orange font-medium text-xs group-hover:gap-2.5 transition-all mt-auto">
        En savoir plus <ArrowRight size={13} />
      </div>
    </Link>
  );
}
