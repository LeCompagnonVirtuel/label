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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenus = useCallback(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center font-heading font-extrabold text-white text-base group-hover:scale-105 transition-transform">
              L
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-extrabold text-white text-base leading-tight">{company.name}</div>
              <div className="text-white/50 text-[9px] uppercase tracking-[0.15em]">BTP & Génie Civil</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
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
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                      location.pathname.startsWith(item.path) ? 'text-orange' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={13} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 animate-scale-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-steel hover:text-orange hover:bg-orange/5 transition-colors"
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
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path ? 'text-orange' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="flex items-center gap-1.5 text-white/70 hover:text-orange transition-colors text-sm px-2 py-1.5"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">{company.contact.phone}</span>
            </a>
            <a
              href={`https://wa.me/${company.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
            <Link
              to="/devis"
              className="bg-orange hover:bg-orange-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 animate-pulse-glow"
            >
              Devis Gratuit
            </Link>
          </div>

          <button
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 -mr-2"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-navy/98 backdrop-blur-xl z-40 overflow-y-auto">
          <div className="container-site py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenus}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-orange bg-white/5'
                      : 'text-white/90 hover:text-orange hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-0.5 mt-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={closeMenus}
                        className="block px-4 py-2 text-sm text-white/60 hover:text-orange transition-colors rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2 border-t border-white/10 mt-4">
              <a
                href={`tel:${company.contact.phoneClean}`}
                className="flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-3 rounded-xl font-medium text-sm"
              >
                <Phone size={16} /> Appeler maintenant
              </a>
              <a
                href={`https://wa.me/${company.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-xl font-medium text-sm"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <Link
                to="/devis"
                onClick={closeMenus}
                className="flex items-center justify-center gap-2 bg-orange text-white px-4 py-3 rounded-xl font-semibold text-sm"
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
