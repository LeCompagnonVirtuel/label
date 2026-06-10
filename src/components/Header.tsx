import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { company } from '../config/company';

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'À Propos', path: '/a-propos' },
  {
    label: 'Services',
    path: '/services',
    children: company.services.map(s => ({ label: s.title, path: `/services/${s.id}` })),
  },
  { label: 'Réalisations', path: '/realisations' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = useCallback(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center font-heading font-extrabold text-white text-lg group-hover:scale-110 transition-transform">
              L
            </div>
            <div>
              <div className="font-heading font-extrabold text-white text-lg leading-tight">
                {company.name}
              </div>
              <div className="text-white/60 text-[10px] uppercase tracking-widest">
                BTP & Génie Civil
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                      location.pathname.startsWith(item.path)
                        ? 'text-orange'
                        : 'text-white/90 hover:text-orange'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-scale-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-steel hover:text-orange hover:bg-orange/5 transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? 'text-orange'
                      : 'text-white/90 hover:text-orange'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="flex items-center gap-2 text-white/80 hover:text-orange transition-colors text-sm"
            >
              <Phone size={16} />
              <span>{company.contact.phone}</span>
            </a>
            <a
              href={`https://wa.me/${company.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <Link
              to="/devis"
              className="bg-orange hover:bg-orange-dark text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 animate-pulse-glow"
            >
              Demander un Devis
            </Link>
          </div>

          <button
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-navy-dark/98 backdrop-blur-lg border-t border-white/10 animate-fade-up">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenus}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    location.pathname === item.path
                      ? 'text-orange bg-white/5'
                      : 'text-white/90 hover:text-orange hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && location.pathname.startsWith('/services') && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={closeMenus}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-orange transition-all"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href={`tel:${company.contact.phoneClean}`}
                className="flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-3 rounded-lg font-medium"
              >
                <Phone size={18} />
                Appeler maintenant
              </a>
              <a
                href={`https://wa.me/${company.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-medium"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <Link
                to="/devis"
                className="flex items-center justify-center gap-2 bg-orange text-white px-4 py-3 rounded-lg font-semibold"
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
