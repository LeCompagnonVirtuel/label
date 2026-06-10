import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';
import { company } from '../config/company';

const navItems = [
  { label: 'Accueil', path: '/', num: '01' },
  { label: 'À Propos', path: '/a-propos', num: '02' },
  { label: 'Services', path: '/services', num: '03' },
  { label: 'Réalisations', path: '/realisations', num: '04' },
  { label: 'Blog', path: '/blog', num: '05' },
  { label: 'Contact', path: '/contact', num: '06' },
];

const overlayVariants = {
  hidden: { clipPath: 'circle(0% at calc(100% - 40px) 32px)' },
  visible: {
    clipPath: 'circle(150% at calc(100% - 40px) 32px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    clipPath: 'circle(0% at calc(100% - 40px) 32px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.4 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const isHome = location.pathname === '/';

  return (
    <>
      {/* MINIMAL HEADER BAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isOpen
            ? 'bg-transparent'
            : scrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
              : isHome
                ? 'bg-transparent'
                : 'bg-navy/95 backdrop-blur-lg'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2.5 group relative z-[110]">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-lg transition-all duration-300 ${
                isOpen
                  ? 'bg-white text-navy'
                  : scrolled
                    ? 'bg-orange text-white'
                    : 'bg-orange text-white shadow-[0_4px_16px_rgba(249,115,22,0.35)]'
              } group-hover:scale-105`}>
                L
              </div>
              <div className="hidden sm:block">
                <div className={`font-heading font-black text-[15px] leading-tight transition-colors duration-300 ${
                  isOpen ? 'text-white' : scrolled ? 'text-navy' : 'text-white'
                }`}>
                  {company.name}
                </div>
                <div className={`text-[7px] uppercase tracking-[0.25em] font-bold transition-colors duration-300 ${
                  isOpen ? 'text-white/40' : scrolled ? 'text-steel' : 'text-white/35'
                }`}>
                  BTP & Génie Civil
                </div>
              </div>
            </Link>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* CTA desktop - only when not open */}
              {!isOpen && (
                <div className="hidden md:flex items-center gap-2.5">
                  <a
                    href={`https://wa.me/${company.contact.whatsappClean}`}
                    target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-semibold transition-all ${
                      scrolled ? 'bg-[#25D366] text-white hover:bg-[#128C7E]' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    <MessageCircle size={14} />
                    <span className="hidden lg:inline">WhatsApp</span>
                  </a>
                  <Link
                    to="/devis"
                    className={`px-4 py-2 rounded-lg text-[12px] font-bold transition-all ${
                      scrolled
                        ? 'bg-orange text-white hover:bg-orange-dark hover:shadow-[0_4px_16px_rgba(249,115,22,0.4)]'
                        : 'bg-orange text-white hover:bg-orange-dark shadow-[0_4px_16px_rgba(249,115,22,0.3)]'
                    } hover:scale-[1.02]`}
                  >
                    Devis Gratuit
                  </Link>
                </div>
              )}

              {/* BURGER */}
              <button
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-[110] w-10 h-10 flex items-center justify-center rounded-xl transition-all"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={22} className="text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center gap-[5px]"
                    >
                      <span className={`block w-5 h-[2px] rounded-full transition-colors ${scrolled ? 'bg-navy' : 'bg-white'}`} />
                      <span className={`block w-4 h-[2px] rounded-full transition-colors ${scrolled ? 'bg-navy' : 'bg-white'}`} />
                      <span className={`block w-5 h-[2px] rounded-full transition-colors ${scrolled ? 'bg-navy' : 'bg-white'}`} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[90] bg-navy overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange rounded-full blur-[200px]" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[200px]" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }} />

            <div className="relative z-10 h-full flex flex-col justify-center container-site py-20">
              <div className="grid lg:grid-cols-[1fr,auto] gap-10 lg:gap-20 items-center h-full">
                {/* NAVIGATION */}
                <nav className="flex flex-col justify-center">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className="group flex items-center gap-4 py-3 md:py-4 border-b border-white/5 hover:border-orange/20 transition-colors"
                      >
                        <span className="text-orange/40 text-[11px] font-mono font-bold group-hover:text-orange transition-colors">
                          {item.num}
                        </span>
                        <span className={`font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-colors duration-300 ${
                          location.pathname === item.path ? 'text-orange' : 'text-white/80 group-hover:text-white'
                        }`}>
                          {item.label}
                        </span>
                        <ArrowRight size={20} className="text-white/0 group-hover:text-orange transition-all ml-auto -translate-x-4 group-hover:translate-x-0" />
                      </Link>
                    </motion.div>
                  ))}

                  {/* CTA in menu */}
                  <motion.div
                    custom={navItems.length}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mt-6 flex flex-col sm:flex-row gap-3"
                  >
                    <Link
                      to="/devis"
                      onClick={closeMenu}
                      className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
                    >
                      Demander un devis gratuit <ArrowRight size={16} />
                    </Link>
                    <a
                      href={`tel:${company.contact.phoneClean}`}
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors border border-white/10"
                    >
                      <Phone size={16} /> Appeler maintenant
                    </a>
                  </motion.div>
                </nav>

                {/* INFO PANEL */}
                <div className="hidden lg:flex flex-col justify-center gap-8 min-w-[280px]">
                  {/* Contact */}
                  <motion.div custom={0} variants={infoVariants} initial="hidden" animate="visible">
                    <h4 className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Contact</h4>
                    <div className="space-y-2.5">
                      <a href={`tel:${company.contact.phoneClean}`} className="flex items-center gap-2.5 text-white/60 hover:text-orange transition-colors text-sm">
                        <Phone size={14} /> {company.contact.phone}
                      </a>
                      <a href={`tel:${company.contact.phoneSecondaryClean}`} className="flex items-center gap-2.5 text-white/60 hover:text-orange transition-colors text-sm">
                        <Phone size={14} /> {company.contact.phoneSecondary}
                      </a>
                      <a href={`mailto:${company.contact.email}`} className="flex items-center gap-2.5 text-white/60 hover:text-orange transition-colors text-sm">
                        <Mail size={14} /> {company.contact.email}
                      </a>
                      <div className="flex items-start gap-2.5 text-white/60 text-sm">
                        <MapPin size={14} className="mt-0.5 flex-shrink-0" /> {company.contact.fullAddress}
                      </div>
                    </div>
                  </motion.div>

                  {/* WhatsApp */}
                  <motion.div custom={1} variants={infoVariants} initial="hidden" animate="visible">
                    <a
                      href={`https://wa.me/${company.contact.whatsappClean}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-xl p-4 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center">
                        <MessageCircle size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Écrivez-nous</div>
                        <div className="text-white/40 text-xs">Réponse rapide garantie</div>
                      </div>
                    </a>
                  </motion.div>

                  {/* Hours */}
                  <motion.div custom={2} variants={infoVariants} initial="hidden" animate="visible">
                    <h4 className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Horaires</h4>
                    <div className="space-y-1 text-sm text-white/50">
                      <div>{company.hours.weekdays}</div>
                      <div>{company.hours.saturday}</div>
                      <div className="text-white/25">{company.hours.sunday}</div>
                    </div>
                  </motion.div>

                  {/* Social */}
                  <motion.div custom={3} variants={infoVariants} initial="hidden" animate="visible">
                    <h4 className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Suivez-nous</h4>
                    <div className="flex gap-2">
                      {[
                        { label: 'FB', href: company.social.facebook },
                        { label: 'IN', href: company.social.linkedin },
                        { label: 'IG', href: company.social.instagram },
                        { label: 'YT', href: company.social.youtube },
                      ].map(s => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-white/5 hover:bg-orange rounded-lg flex items-center justify-center text-[10px] font-bold text-white/40 hover:text-white transition-all"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
