import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown, Mail, Clock, MapPin } from 'lucide-react';
import { company } from '../config/company';

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'À Propos', path: '/a-propos' },
  {
    label: 'Services',
    path: '/services',
    children: company.services.map(s => ({ label: s.title, path: `/services/${s.id}`, desc: s.shortDesc })),
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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenus = useCallback(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, []);

  const isHome = location.pathname === '/';
  const showTopBar = !scrolled && isHome;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* TOP BAR */}
      <div className={`transition-all duration-300 overflow-hidden ${showTopBar ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-navy-dark/90 backdrop-blur-sm border-b border-white/5">
          <div className="container-site">
            <div className="flex items-center justify-between h-10 text-[11px] text-white/50">
              <div className="hidden md:flex items-center gap-5">
                <a href={`tel:${company.contact.phoneClean}`} className="flex items-center gap-1.5 hover:text-orange transition-colors">
                  <Phone size={11} /> {company.contact.phone}
                </a>
                <a href={`mailto:${company.contact.email}`} className="flex items-center gap-1.5 hover:text-orange transition-colors">
                  <Mail size={11} /> {company.contact.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} /> {company.contact.address}
                </span>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Clock size={11} /> {company.hours.weekdays}
                </span>
                <div className="flex items-center gap-2">
                  {[
                    { label: 'FB', href: company.social.facebook },
                    { label: 'IN', href: company.social.linkedin },
                    { label: 'IG', href: company.social.instagram },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-5 h-5 bg-white/10 hover:bg-orange rounded flex items-center justify-center text-[8px] font-bold transition-colors">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex md:hidden items-center gap-3 w-full justify-between">
                <a href={`tel:${company.contact.phoneClean}`} className="flex items-center gap-1.5 hover:text-orange transition-colors">
                  <Phone size={11} /> {company.contact.phone}
                </a>
                <a href={`https://wa.me/${company.contact.whatsappClean}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
                  <MessageCircle size={11} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className={`transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}>
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-[68px]">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-lg transition-all duration-300 ${
                  scrolled ? 'bg-orange text-white' : 'bg-orange text-white shadow-[0_4px_12px_rgba(249,115,22,0.3)]'
                } group-hover:scale-105`}>
                  L
                </div>
              </div>
              <div className="hidden sm:block">
                <div className={`font-heading font-black text-base leading-tight transition-colors duration-300 ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}>
                  {company.name}
                </div>
                <div className={`text-[8px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
                  scrolled ? 'text-steel' : 'text-white/40'
                }`}>
                  BTP & Génie Civil
                </div>
              </div>
            </Link>

            {/* NAV DESKTOP */}
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
                      className={`relative px-3 py-2 rounded-lg text-[13px] font-semibold transition-colors flex items-center gap-1 ${
                        location.pathname.startsWith(item.path)
                          ? 'text-orange'
                          : scrolled ? 'text-navy/70 hover:text-navy' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={12} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      {location.pathname.startsWith(item.path) && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange rounded-full" />
                      )}
                    </Link>

                    {/* MEGA MENU */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 p-4 animate-scale-in">
                        <div className="grid grid-cols-2 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange/5 transition-colors group/item"
                            >
                              <div className="w-8 h-8 bg-orange/10 group-hover/item:bg-orange rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                                <div className="w-2 h-2 bg-orange group-hover/item:bg-white rounded-full transition-colors" />
                              </div>
                              <div>
                                <div className="text-navy font-semibold text-xs group-hover/item:text-orange transition-colors">{child.label}</div>
                                <div className="text-steel text-[10px] leading-relaxed line-clamp-1 mt-0.5">{child.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                          <Link to="/services" className="text-orange text-xs font-semibold hover:underline">
                            Voir tous nos services →
                          </Link>
                          <Link to="/devis" className="bg-orange text-white px-3 py-1.5 rounded-lg text-[11px] font-semibold hover:bg-orange-dark transition-colors">
                            Demander un devis
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 rounded-lg text-[13px] font-semibold transition-colors ${
                      location.pathname === item.path
                        ? 'text-orange'
                        : scrolled ? 'text-navy/70 hover:text-navy' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange rounded-full" />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* CTA DESKTOP */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={`tel:${company.contact.phoneClean}`}
                className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors px-2.5 py-2 rounded-lg ${
                  scrolled ? 'text-navy/60 hover:text-navy' : 'text-white/60 hover:text-white'
                }`}
              >
                <Phone size={14} />
                <span className="hidden xl:inline">{company.contact.phone}</span>
              </a>
              <a
                href={`https://wa.me/${company.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-3.5 py-2 rounded-lg text-[13px] font-semibold transition-colors"
              >
                <MessageCircle size={14} />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
              <Link
                to="/devis"
                className="bg-orange hover:bg-orange-dark text-white px-4 py-2 rounded-lg text-[13px] font-bold transition-all hover:shadow-[0_4px_16px_rgba(249,115,22,0.4)] hover:scale-[1.02]"
              >
                Devis Gratuit
              </Link>
            </div>

            {/* BURGER */}
            <button
              aria-label={isOpen ? 'Fermer' : 'Menu'}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 -mr-2 transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-white z-[60] overflow-y-auto">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100">
            <Link to="/" onClick={closeMenus} className="flex items-center gap-2">
              <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center font-heading font-black text-base text-white">L</div>
              <div>
                <div className="font-heading font-black text-sm text-navy">{company.name}</div>
                <div className="text-[7px] uppercase tracking-[0.2em] text-steel font-semibold">BTP & Génie Civil</div>
              </div>
            </Link>
            <button aria-label="Fermer" onClick={closeMenus} className="p-2 text-navy">
              <X size={22} />
            </button>
          </div>

          <div className="px-4 py-5 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenus}
                  className={`block px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${
                    location.pathname === item.path
                      ? 'text-orange bg-orange/5'
                      : 'text-navy/80 hover:text-orange hover:bg-orange/5'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 space-y-0.5 mt-1 mb-2 border-l-2 border-orange/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={closeMenus}
                        className="block px-3 py-2 text-[13px] text-steel hover:text-orange transition-colors rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="px-4 pb-6 space-y-2 border-t border-gray-100 pt-4">
            <a href={`tel:${company.contact.phoneClean}`}
              className="flex items-center justify-center gap-2 bg-navy text-white px-4 py-3 rounded-xl font-semibold text-sm">
              <Phone size={16} /> Appeler maintenant
            </a>
            <a href={`https://wa.me/${company.contact.whatsappClean}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-semibold text-sm">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link to="/devis" onClick={closeMenus}
              className="flex items-center justify-center gap-2 bg-orange text-white px-4 py-3 rounded-xl font-bold text-sm">
              Demander un Devis Gratuit
            </Link>
          </div>

          <div className="px-4 pb-8 text-center">
            <div className="text-[11px] text-steel space-y-1">
              <div>{company.contact.phone} · {company.contact.phoneSecondary}</div>
              <div>{company.contact.email}</div>
              <div>{company.contact.fullAddress}</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
