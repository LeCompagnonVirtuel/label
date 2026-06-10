import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp, MessageCircle } from 'lucide-react';
import { company } from '../config/company';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy text-white">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center font-heading font-extrabold text-base">L</div>
              <div>
                <div className="font-heading font-extrabold text-base">{company.name}</div>
                <div className="text-white/40 text-[9px] uppercase tracking-[0.15em]">BTP & Génie Civil</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {company.description.substring(0, 160)}...
            </p>
            <div className="flex gap-2">
              {[
                { label: 'Facebook', href: company.social.facebook },
                { label: 'LinkedIn', href: company.social.linkedin },
                { label: 'Instagram', href: company.social.instagram },
                { label: 'YouTube', href: company.social.youtube },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-orange rounded-lg flex items-center justify-center transition-all text-xs font-bold hover:scale-110"
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm mb-4 text-white/90">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', path: '/' },
                { label: 'À Propos', path: '/a-propos' },
                { label: 'Services', path: '/services' },
                { label: 'Réalisations', path: '/realisations' },
                { label: 'Blog', path: '/blog' },
                { label: 'Demander un Devis', path: '/devis' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/50 hover:text-orange transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm mb-4 text-white/90">Nos Services</h3>
            <ul className="space-y-2">
              {company.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-white/50 hover:text-orange transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm mb-4 text-white/90">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${company.contact.phoneClean}`} className="flex items-start gap-2.5 text-white/50 hover:text-orange transition-colors">
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div>{company.contact.phone}</div>
                    <div>{company.contact.phoneSecondary}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${company.contact.email}`} className="flex items-start gap-2.5 text-white/50 hover:text-orange transition-colors">
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{company.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/50">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">{company.contact.fullAddress}</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/50">
                <Clock size={15} className="mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>{company.hours.weekdays}</div>
                  <div>{company.hours.saturday}</div>
                  <div className="text-white/30">{company.hours.sunday}</div>
                </div>
              </li>
              <li>
                <a
                  href={`https://wa.me/${company.contact.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {company.name}. Tous droits réservés.
          </p>
          <button
            aria-label="Revenir en haut"
            onClick={scrollToTop}
            className="w-8 h-8 bg-white/10 hover:bg-orange rounded-lg flex items-center justify-center transition-all hover:scale-110"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
