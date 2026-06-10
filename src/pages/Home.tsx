import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, MapPin, Clock, Shield, Users, CheckCircle, Award, Phone, FileText, Play, Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList } from 'lucide-react';
import { company } from '../config/company';
import { images, projectImageMap } from '../config/images';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import Counter from '../components/Counter';
import CTASection from '../components/CTASection';

const serviceIcons: Record<string, React.ElementType> = {
  Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList,
};

const serviceImages: Record<string, string> = {
  'construction-batiments': images.services.construction,
  'genie-civil': images.services.genieCivil,
  'travaux-publics': images.services.travauxPublics,
  'vrd': images.services.vrd,
  'terrassement': images.services.terrassement,
  'assainissement': images.services.assainissement,
  'rehabilitation': images.services.rehabilitation,
  'etudes-techniques': images.services.etudes,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <>
      <SEOHead />

      {/* HERO ANIMÉ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark" />
          <img
            src={images.hero.main}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-light/85 to-navy-dark/90" />
        </motion.div>

        <div className="absolute inset-0 opacity-[0.06]">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-orange rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px]"
          />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full container-site pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
                <div className="inline-flex items-center gap-2 bg-orange/15 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border border-orange/20">
                  <Shield size={13} />
                  Entreprise certifiée BTP & Génie Civil
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp} custom={1} initial="hidden" animate="visible"
                className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.1] mb-5"
              >
                Nous construisons les{' '}
                <motion.span
                  className="gradient-text inline-block"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                >
                  infrastructures
                </motion.span>{' '}
                qui façonnent l'avenir.
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} initial="hidden" animate="visible"
                className="text-white/60 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                {company.shortDescription}
              </motion.p>

              <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible"
                className="flex flex-col sm:flex-row gap-3 mb-8">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/devis" className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-colors animate-pulse-glow w-full sm:w-auto">
                    <FileText size={18} /> Demander un devis gratuit <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/realisations" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-colors border border-white/15 w-full sm:w-auto">
                    <Play size={16} /> Voir nos réalisations
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible"
                className="flex flex-wrap items-center gap-4 md:gap-6 text-white/50 text-xs">
                {['Devis gratuit', 'Réponse sous 24h', 'Sans engagement'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-green-400" /> {item}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden h-[420px]">
                  <img src={images.hero.construction} alt="Chantier de construction" className="w-full h-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-2 gap-2.5 mb-4">
                      {[
                        { icon: '🏗️', label: 'Construction' },
                        { icon: '🛤️', label: 'Travaux Publics' },
                        { icon: '💧', label: 'Assainissement' },
                        { icon: '📐', label: 'Études' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 text-center hover:bg-white/20 transition-colors cursor-pointer"
                        >
                          <div className="text-lg mb-0.5">{item.icon}</div>
                          <div className="text-white font-semibold text-[10px]">{item.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Phone size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white/50 text-[9px]">Appelez-nous</div>
                        <div className="text-white font-bold text-xs">{company.contact.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                  className="absolute -top-3 -right-3 w-16 h-16 bg-orange rounded-xl flex items-center justify-center text-white font-heading font-extrabold text-xl shadow-lg animate-float"
                >
                  {company.stats.years}+
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-navy py-12 md:py-14 border-y border-white/5">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <Counter end={company.stats.projects} suffix="+" label="Projets Réalisés" />
            <Counter end={company.stats.clients} suffix="+" label="Clients Satisfaits" />
            <Counter end={company.stats.years} suffix="+" label="Années d'Expérience" />
            <Counter end={company.stats.satisfaction} suffix="%" label="Taux de Satisfaction" />
          </div>
        </div>
      </section>

      {/* SERVICES AVEC IMAGES */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Nos Expertises
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-3">
              Des services complets pour <span className="gradient-text">tous vos projets</span>
            </h2>
            <p className="text-steel max-w-xl mx-auto text-base">
              De l'étude technique à la livraison, nous couvrons l'ensemble des métiers du BTP.
            </p>
          </AnimatedSection>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
          >
            {company.services.map((service) => {
              const Icon = serviceIcons[service.icon] || Building2;
              const img = serviceImages[service.id];
              return (
                <motion.div key={service.id} variants={fadeUp} custom={0}>
                  <Link to={`/services/${service.id}`} className="group block bg-white rounded-xl overflow-hidden premium-shadow premium-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                    <div className="relative h-36 overflow-hidden">
                      <img src={img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-orange/90 rounded-lg flex items-center justify-center">
                            <Icon size={16} className="text-white" />
                          </div>
                          <h3 className="font-heading font-bold text-white text-sm group-hover:text-orange transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-steel text-xs leading-relaxed mb-3 line-clamp-2">{service.shortDesc}</p>
                      <div className="flex items-center gap-1.5 text-orange font-medium text-xs group-hover:gap-2.5 transition-all">
                        En savoir plus <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <AnimatedSection className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-orange hover:text-orange-dark font-semibold text-sm transition-colors group">
              Voir tous nos services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY US AVEC IMAGE */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  Pourquoi nous choisir
                </div>
                <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
                  Pourquoi faire confiance à <span className="gradient-text">{company.name}</span> ?
                </h2>
                <p className="text-steel text-base leading-relaxed mb-6">
                  Depuis plus de {company.stats.years} ans, nous mettons notre expertise au service des projets les plus exigeants en Côte d'Ivoire.
                </p>
              </AnimatedSection>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-3"
              >
                {company.whyUs.map((item, i) => (
                  <motion.div key={i} variants={fadeUp} custom={0}>
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-light transition-colors group">
                      <div className="w-8 h-8 bg-orange/10 group-hover:bg-orange rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                        <CheckCircle size={16} className="text-orange group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-navy text-xs mb-0.5">{item.title}</h3>
                        <p className="text-steel text-[11px] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <AnimatedSection animation="fade-left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img src={images.about.site} alt="Chantier LABEL PRO CI" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-4">Chiffres clés</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: `${company.stats.projects}+`, label: 'Projets livrés' },
                        { value: `${company.stats.clients}+`, label: 'Clients satisfaits' },
                        { value: `${company.stats.years}+`, label: 'Années d\'expertise' },
                        { value: `${company.stats.satisfaction}%`, label: 'Satisfaction' },
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center"
                        >
                          <div className="font-heading font-extrabold text-xl text-orange">{stat.value}</div>
                          <div className="text-white/60 text-[10px]">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -bottom-3 -left-3 w-16 h-16 bg-orange rounded-xl flex items-center justify-center shadow-xl"
                >
                  <Shield size={28} className="text-white" />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PORTFOLIO AVEC IMAGES */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Portfolio
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-3">
              Nos <span className="gradient-text">réalisations</span> récentes
            </h2>
          </AnimatedSection>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5"
          >
            {company.projects.slice(0, 6).map((project, i) => (
                  <motion.div key={i} variants={fadeUp} custom={0}>
                    <Link to="/realisations" className="group block bg-white rounded-xl overflow-hidden premium-shadow premium-shadow-hover transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-40 md:h-48 overflow-hidden">
                    <img
                      src={projectImageMap[project.category] || images.projects[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-orange text-white px-2.5 py-0.5 rounded-full text-[10px] font-medium">{project.category}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-20">
                      <h3 className="font-heading font-bold text-white text-sm md:text-base group-hover:text-orange transition-colors">{project.title}</h3>
                      <div className="flex items-center gap-3 text-white/60 text-[10px] mt-1">
                        <span className="flex items-center gap-1"><MapPin size={10} /> {project.location}</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> {project.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-steel text-xs leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-orange font-medium text-xs group-hover:gap-2.5 transition-all">
                      Voir le projet <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection className="text-center mt-8">
            <Link to="/realisations" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              Voir toutes nos réalisations <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS AVEC ANIMATIONS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-site">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Notre Processus
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-3">
              Comment nous <span className="gradient-text">travaillons</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {company.process.map((step, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="relative">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                      className="w-14 h-14 bg-orange text-white rounded-xl flex items-center justify-center font-heading font-extrabold text-xl mb-3 mx-auto relative z-10 shadow-md"
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="font-heading font-bold text-navy text-sm mb-1">{step.title}</h3>
                    <p className="text-steel text-xs leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={images.hero.team} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container-site">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/15 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Témoignages
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-white mb-3">
              Ce que disent nos <span className="text-orange">clients</span>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5"
          >
            {company.testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} custom={0}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-orange/20 transition-colors h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} className="text-orange fill-orange" />
                    ))}
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed mb-4 flex-1 italic">"{t.content}"</p>
                  <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
                    <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white font-bold text-[10px]">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-xs">{t.name}</div>
                      <div className="text-white/40 text-[10px]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ZONES AVEC IMAGE */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <MapPin size={13} /> Zone d'Intervention
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
                Présents sur tout le <span className="gradient-text">territoire ivoirien</span>
              </h2>
              <p className="text-steel text-base leading-relaxed mb-6">
                Basée à Yamoussoukro, LABEL PRO CI intervient dans les principales villes de Côte d'Ivoire.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {company.zones.map((zone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-1.5 bg-white p-2.5 rounded-lg shadow-sm text-xs"
                  >
                    <MapPin size={12} className="text-orange flex-shrink-0" />
                    <span className="text-navy font-medium">{zone}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={images.hero.crane} alt="Engins de chantier" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Siège social</div>
                      <div className="text-white/60 text-xs">{company.contact.fullAddress}</div>
                    </div>
                  </div>
                  <div className="w-full h-40 rounded-xl overflow-hidden">
                    <iframe
                      title="Localisation LABEL PRO CI"
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127671.75702777756!2d${company.contact.gps.lng}!3d${company.contact.gps.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ee9756089e37%3A0x549047f7c26c8af5!2sYamoussoukro!5e0!3m2!1sfr!2sci!4v1700000000000!5m2!1sfr!2sci`}
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-site">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Confiance & Fiabilité
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-3">
              Des engagements <span className="gradient-text">tenus</span>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {[
              { icon: Clock, title: 'Devis rapide', desc: 'Nous vous fournissons un devis détaillé sous 24 à 48 heures.' },
              { icon: CheckCircle, title: 'Respect des délais', desc: 'Nous nous engageons sur des calendriers réalistes.' },
              { icon: Users, title: 'Accompagnement personnalisé', desc: 'Un chef de projet dédié vous accompagne.' },
              { icon: Shield, title: 'Solutions adaptées au budget', desc: 'Des solutions optimales adaptées à votre budget.' },
              { icon: Award, title: 'Qualité professionnelle', desc: 'Des matériaux certifiés et une exécution conforme.' },
              { icon: Star, title: 'Suivi du chantier', desc: 'Rapports réguliers et transparence totale.' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={0}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-light hover:bg-orange/5 transition-colors group h-full">
                  <div className="w-9 h-9 bg-orange/10 group-hover:bg-orange rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <item.icon size={18} className="text-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm mb-0.5">{item.title}</h3>
                    <p className="text-steel text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
