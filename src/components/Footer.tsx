import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp, MessageCircle, Globe, Share2, Camera, Video } from 'lucide-react';
import { company } from '../config/company';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center font-heading font-extrabold text-lg">
                L
              </div>
              <div>
                <div className="font-heading font-extrabold text-lg">{company.name}</div>
                <div className="text-white/50 text-[10px] uppercase tracking-widest">BTP & Génie Civil</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {company.description.substring(0, 180)}...
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: company.social.facebook, label: 'Facebook' },
                { icon: Share2, href: company.social.linkedin, label: 'LinkedIn' },
                { icon: Camera, href: company.social.instagram, label: 'Instagram' },
                { icon: Video, href: company.social.youtube, label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-orange rounded-lg flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6 relative">
              <span className="relative z-10">Liens Rapides</span>
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange" />
            </h3>
            <ul className="space-y-3">
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
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-orange transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-orange rounded-full" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6 relative">
              <span className="relative z-10">Nos Services</span>
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange" />
            </h3>
            <ul className="space-y-3">
              {company.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-white/70 hover:text-orange transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-orange rounded-full" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6 relative">
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-orange" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${company.contact.phoneClean}`} className="flex items-start gap-3 text-white/70 hover:text-orange transition-colors">
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm">{company.contact.phone}</div>
                    <div className="text-sm">{company.contact.phoneSecondary}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${company.contact.email}`} className="flex items-start gap-3 text-white/70 hover:text-orange transition-colors">
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{company.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">{company.contact.fullAddress}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>{company.hours.weekdays}</div>
                  <div>{company.hours.saturday}</div>
                  <div>{company.hours.sunday}</div>
                </div>
              </li>
              <li>
                <a
                  href={`https://wa.me/${company.contact.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all w-fit"
                >
                  <MessageCircle size={16} />
                  Nous écrire sur WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {company.name}. Tous droits réservés. | Entreprise BTP & Génie Civil à Yamoussoukro
          </p>
          <button
            aria-label="Revenir en haut"
            onClick={scrollToTop}
            className="w-10 h-10 bg-orange hover:bg-orange-dark rounded-lg flex items-center justify-center transition-all hover:scale-110"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
