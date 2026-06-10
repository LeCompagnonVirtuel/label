import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock, Shield, Users, CheckCircle, Award, Phone, FileText, Play, Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import Counter from '../components/Counter';
import CTASection from '../components/CTASection';

const serviceIcons: Record<string, React.ElementType> = {
  Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList,
};

export default function Home() {
  return (
    <>
      <SEOHead />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark" />
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-orange rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full container-site pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 bg-orange/15 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border border-orange/20">
                  <Shield size={13} />
                  Entreprise certifiée BTP & Génie Civil
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.1}>
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.1] mb-5">
                  Nous construisons les{' '}
                  <span className="gradient-text">infrastructures</span>{' '}
                  qui façonnent l'avenir.
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.15}>
                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                  {company.shortDescription}
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link
                    to="/devis"
                    className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-[1.02] animate-pulse-glow"
                  >
                    <FileText size={18} />
                    Demander un devis gratuit
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/realisations"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all border border-white/15"
                  >
                    <Play size={16} />
                    Voir nos réalisations
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.25}>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/50 text-xs">
                  {['Devis gratuit', 'Réponse sous 24h', 'Sans engagement'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle size={13} className="text-green-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-left" delay={0.2} className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: '🏗️', label: 'Construction', desc: 'Bâtiments modernes' },
                      { icon: '🛤️', label: 'Travaux Publics', desc: 'Routes & Ponts' },
                      { icon: '💧', label: 'Assainissement', desc: 'Réseaux & Drainage' },
                      { icon: '📐', label: 'Études', desc: 'Conception & Calcul' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/15 transition-colors cursor-pointer">
                        <div className="text-2xl mb-1.5">{item.icon}</div>
                        <div className="text-white font-semibold text-xs">{item.label}</div>
                        <div className="text-white/40 text-[10px]">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-[10px]">Appelez-nous</div>
                      <div className="text-white font-bold text-sm">{company.contact.phone}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-orange rounded-xl flex items-center justify-center text-white font-heading font-extrabold text-xl shadow-lg animate-float">
                  {company.stats.years}+
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
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

      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Nos Expertises
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-3">
              Des services complets pour{' '}
              <span className="gradient-text">tous vos projets</span>
            </h2>
            <p className="text-steel max-w-xl mx-auto text-base">
              De l'étude technique à la livraison, nous couvrons l'ensemble des métiers du BTP.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {company.services.map((service, i) => {
              const Icon = serviceIcons[service.icon] || Building2;
              return (
                <AnimatedSection key={service.id} delay={i * 0.04}>
                  <Link
                    to={`/services/${service.id}`}
                    className="group block bg-white rounded-xl p-5 premium-shadow premium-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full"
                  >
                    <div className="w-10 h-10 bg-orange/10 group-hover:bg-orange rounded-lg flex items-center justify-center mb-3 transition-colors duration-300">
                      <Icon size={20} className="text-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-bold text-sm md:text-base text-navy mb-1.5 group-hover:text-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-steel text-xs leading-relaxed mb-3 line-clamp-2">
                      {service.shortDesc}
                    </p>
                    <div className="flex items-center gap-1.5 text-orange font-medium text-xs group-hover:gap-2.5 transition-all">
                      En savoir plus <ArrowRight size={13} />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-orange hover:text-orange-dark font-semibold text-sm transition-colors group">
              Voir tous nos services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  Pourquoi nous choisir
                </div>
                <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
                  Pourquoi faire confiance à{' '}
                  <span className="gradient-text">{company.name}</span> ?
                </h2>
                <p className="text-steel text-base leading-relaxed mb-6">
                  Depuis plus de {company.stats.years} ans, nous mettons notre expertise au service des projets les plus exigeants en Côte d'Ivoire.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 gap-3">
                {company.whyUs.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 0.05} animation="fade-right">
                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-light transition-colors group">
                      <div className="w-8 h-8 bg-orange/10 group-hover:bg-orange rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                        <CheckCircle size={16} className="text-orange group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-navy text-xs mb-0.5">{item.title}</h3>
                        <p className="text-steel text-[11px] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection animation="fade-left">
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 md:p-8 text-white">
                  <h3 className="font-heading font-bold text-xl mb-5">Chiffres clés</h3>
                  <div className="space-y-5">
                    {[
                      { label: 'Projets livrés', value: `${company.stats.projects}+`, icon: Award },
                      { label: 'Clients satisfaits', value: `${company.stats.clients}+`, icon: Users },
                      { label: 'Années d\'expertise', value: `${company.stats.years}+`, icon: Clock },
                      { label: 'Taux de satisfaction', value: `${company.stats.satisfaction}%`, icon: Star },
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange/15 rounded-lg flex items-center justify-center">
                          <stat.icon size={20} className="text-orange" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white/50 text-xs">{stat.label}</div>
                          <div className="font-heading font-extrabold text-xl">{stat.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-orange rounded-xl flex items-center justify-center shadow-xl">
                  <Shield size={32} className="text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Portfolio
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-3">
              Nos <span className="gradient-text">réalisations</span> récentes
            </h2>
            <p className="text-steel max-w-xl mx-auto text-base">
              Découvrez quelques-uns des projets que nous avons réalisés avec succès.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {company.projects.slice(0, 6).map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.05}>
                <Link
                  to="/realisations"
                  className="group block bg-white rounded-xl overflow-hidden premium-shadow premium-shadow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-40 md:h-48 bg-gradient-to-br from-navy to-navy-light overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl opacity-15 group-hover:scale-110 transition-transform duration-500">
                        {project.category === 'Construction' ? '🏗️' : project.category === 'Travaux Publics' ? '🛤️' : project.category === 'Génie Civil' ? '🌉' : project.category === 'VRD' ? '🏘️' : project.category === 'Assainissement' ? '💧' : project.category === 'Terrassement' ? '🚜' : '🔨'}
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-orange text-white px-2.5 py-0.5 rounded-full text-[10px] font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-20">
                      <h3 className="font-heading font-bold text-white text-sm md:text-base group-hover:text-orange transition-colors">
                        {project.title}
                      </h3>
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
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <Link to="/realisations" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105">
              Voir toutes nos réalisations <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
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
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {company.process.map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.08} className="relative">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange text-white rounded-xl flex items-center justify-center font-heading font-extrabold text-xl mb-3 mx-auto relative z-10 shadow-md">
                      {step.step}
                    </div>
                    <h3 className="font-heading font-bold text-navy text-sm mb-1">{step.title}</h3>
                    <p className="text-steel text-xs leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="container-site">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/15 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Témoignages
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-white mb-3">
              Ce que disent nos <span className="text-orange">clients</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {company.testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-orange/20 transition-colors h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} className="text-orange fill-orange" />
                    ))}
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed mb-4 flex-1 italic">
                    "{t.content}"
                  </p>
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <MapPin size={13} /> Zone d'Intervention
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-navy mb-4">
                Présents sur tout le{' '}
                <span className="gradient-text">territoire ivoirien</span>
              </h2>
              <p className="text-steel text-base leading-relaxed mb-6">
                Basée à Yamoussoukro, LABEL PRO CI intervient dans les principales villes de Côte d'Ivoire.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {company.zones.map((zone, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white p-2.5 rounded-lg shadow-sm text-xs">
                    <MapPin size={12} className="text-orange flex-shrink-0" />
                    <span className="text-navy font-medium">{zone}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-5 md:p-6 text-white">
                <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden mb-4">
                  <iframe
                    title="Localisation LABEL PRO CI"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127671.75702777756!2d${company.contact.gps.lng}!3d${company.contact.gps.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ee9756089e37%3A0x549047f7c26c8af5!2sYamoussoukro!5e0!3m2!1sfr!2sci!4v1700000000000!5m2!1sfr!2sci`}
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Siège social</div>
                    <div className="text-white/60 text-xs">{company.contact.fullAddress}</div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {[
              { icon: Clock, title: 'Devis rapide', desc: 'Nous vous fournissons un devis détaillé sous 24 à 48 heures.' },
              { icon: CheckCircle, title: 'Respect des délais', desc: 'Nous nous engageons sur des calendriers réalistes et les respectons.' },
              { icon: Users, title: 'Accompagnement personnalisé', desc: 'Un chef de projet dédié vous accompagne tout au long du chantier.' },
              { icon: Shield, title: 'Solutions adaptées au budget', desc: 'Nous proposons des solutions optimales adaptées à votre budget.' },
              { icon: Award, title: 'Qualité professionnelle', desc: 'Des matériaux certifiés et une exécution conforme aux normes.' },
              { icon: Star, title: 'Suivi du chantier', desc: 'Rapports réguliers et transparence totale sur l\'avancement des travaux.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-light hover:bg-orange/5 transition-colors group h-full">
                  <div className="w-9 h-9 bg-orange/10 group-hover:bg-orange rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <item.icon size={18} className="text-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm mb-0.5">{item.title}</h3>
                    <p className="text-steel text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
