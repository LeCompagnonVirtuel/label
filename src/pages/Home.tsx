import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock, Shield, Users, CheckCircle, Award, Phone, FileText, Play } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import Counter from '../components/Counter';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <SEOHead />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shield size={16} />
                  Entreprise certifiée BTP & Génie Civil
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.1}>
                <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                  Nous construisons les{' '}
                  <span className="gradient-text">infrastructures</span>{' '}
                  qui façonnent l'avenir.
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.2}>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  {company.shortDescription}
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    to="/devis"
                    className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 animate-pulse-glow"
                  >
                    <FileText size={20} />
                    Demander un devis
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/realisations"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm border border-white/20"
                  >
                    <Play size={18} />
                    Voir nos réalisations
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.4}>
                <div className="flex items-center gap-6 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Devis gratuit
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Réponse sous 24h
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Sans engagement
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-left" delay={0.2} className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange/20 to-orange/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: '🏗️', label: 'Construction', desc: 'Bâtiments modernes' },
                      { icon: '🛤️', label: 'Travaux Publics', desc: 'Routes & Ponts' },
                      { icon: '💧', label: 'Assainissement', desc: 'Réseaux & Drainage' },
                      { icon: '📐', label: 'Études', desc: 'Conception & Calcul' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all cursor-pointer">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <div className="text-white font-semibold text-sm">{item.label}</div>
                        <div className="text-white/50 text-xs">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Appelez-nous</div>
                      <div className="text-white font-bold">{company.contact.phone}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange rounded-2xl flex items-center justify-center text-white font-heading font-extrabold text-2xl shadow-lg animate-float">
                  {company.stats.years}+
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={company.stats.projects} suffix="+" label="Projets Réalisés" />
            <Counter end={company.stats.clients} suffix="+" label="Clients Satisfaits" />
            <Counter end={company.stats.years} suffix="+" label="Années d'Expérience" />
            <Counter end={company.stats.satisfaction} suffix="%" label="Taux de Satisfaction" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nos Expertises
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-4">
              Des services complets pour{' '}
              <span className="gradient-text">tous vos projets</span>
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg">
              De l'étude technique à la livraison, nous couvrons l'ensemble des métiers du BTP et du génie civil.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} index={i} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-orange hover:text-orange-dark font-semibold transition-all group"
            >
              Voir tous nos services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Pourquoi nous choisir
                </div>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-6">
                  Pourquoi faire confiance à{' '}
                  <span className="gradient-text">{company.name}</span> ?
                </h2>
                <p className="text-steel text-lg leading-relaxed mb-8">
                  Depuis plus de {company.stats.years} ans, nous mettons notre expertise au service des projets les plus exigeants. Notre engagement envers la qualité et la satisfaction client fait de nous le partenaire idéal pour vos travaux.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 gap-4">
                {company.whyUs.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 0.1} animation="fade-right">
                    <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-light transition-all group">
                      <div className="w-10 h-10 bg-orange/10 group-hover:bg-orange rounded-lg flex items-center justify-center flex-shrink-0 transition-all">
                        <CheckCircle size={20} className="text-orange group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-navy text-sm mb-1">{item.title}</h3>
                        <p className="text-steel text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection animation="fade-left">
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8 text-white">
                  <h3 className="font-heading font-bold text-2xl mb-6">Chiffres clés</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Projets livrés', value: `${company.stats.projects}+`, icon: Award },
                      { label: 'Clients satisfaits', value: `${company.stats.clients}+`, icon: Users },
                      { label: 'Années d\'expertise', value: `${company.stats.years}+`, icon: Clock },
                      { label: 'Taux de satisfaction', value: `${company.stats.satisfaction}%`, icon: Star },
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center">
                          <stat.icon size={24} className="text-orange" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white/60 text-sm">{stat.label}</div>
                          <div className="font-heading font-extrabold text-2xl">{stat.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange rounded-2xl flex items-center justify-center shadow-xl">
                  <Shield size={40} className="text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              Portfolio
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-4">
              Nos <span className="gradient-text">réalisations</span> récentes
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg">
              Découvrez quelques-uns des projets que nous avons réalisés avec succès.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.projects.slice(0, 6).map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <Link
                  to="/realisations"
                  className="group block bg-white rounded-2xl overflow-hidden premium-shadow premium-shadow-hover transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-48 bg-gradient-to-br from-navy to-navy-light overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                        {project.category === 'Construction' ? '🏗️' : project.category === 'Travaux Publics' ? '🛤️' : project.category === 'Génie Civil' ? '🌉' : project.category === 'VRD' ? '🏘️' : project.category === 'Assainissement' ? '💧' : project.category === 'Terrassement' ? '🚜' : '🔨'}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="font-heading font-bold text-white text-lg mb-1 group-hover:text-orange transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/70 text-xs">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-steel text-sm leading-relaxed">{project.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-orange font-medium text-sm group-hover:gap-3 transition-all">
                      Voir le projet
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Voir toutes nos réalisations
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              Notre Processus
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-4">
              Comment nous <span className="gradient-text">travaillons</span>
            </h2>
            <p className="text-steel max-w-2xl mx-auto text-lg">
              Un processus clair et méthodique pour garantir le succès de chaque projet.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange/50 via-orange to-orange/50 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {company.process.map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.15} className="relative">
                  <div className="text-center">
                    <div className="relative inline-flex">
                      <div className="w-16 h-16 bg-orange text-white rounded-2xl flex items-center justify-center font-heading font-extrabold text-2xl mb-4 relative z-10 shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-steel text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              Témoignages
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
              Ce que disent nos <span className="text-orange">clients</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              La satisfaction de nos clients est notre meilleure publicité.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange/30 transition-all h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-orange fill-orange" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1 italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/50 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin size={16} />
                Zone d'Intervention
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-6">
                Présents sur tout le{' '}
                <span className="gradient-text">territoire ivoirien</span>
              </h2>
              <p className="text-steel text-lg leading-relaxed mb-8">
                Basée à Yamoussoukro, LABEL PRO CI intervient dans les principales villes de Côte d'Ivoire pour répondre à tous vos besoins en construction et génie civil.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {company.zones.map((zone, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm">
                    <MapPin size={16} className="text-orange flex-shrink-0" />
                    <span className="text-navy font-medium text-sm">{zone}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8 text-white">
                <div className="w-full h-64 rounded-2xl overflow-hidden mb-6">
                  <iframe
                    title="Localisation LABEL PRO CI"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127671.75702777756!2d${company.contact.gps.lng}!3d${company.contact.gps.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ee9756089e37%3A0x549047f7c26c8af5!2sYamoussoukro!5e0!3m2!1sfr!2sci!4v1700000000000!5m2!1sfr!2sci`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Siège social</div>
                    <div className="text-white/70 text-sm">{company.contact.fullAddress}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              Confiance & Fiabilité
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-4">
              Des engagements <span className="gradient-text">tenus</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: 'Devis rapide', desc: 'Nous vous fournissons un devis détaillé sous 24 à 48 heures.' },
              { icon: CheckCircle, title: 'Respect des délais', desc: 'Nous nous engageons sur des calendriers réalistes et les respectons.' },
              { icon: Users, title: 'Accompagnement personnalisé', desc: 'Un chef de projet dédié vous accompagne tout au long du chantier.' },
              { icon: Shield, title: 'Solutions adaptées au budget', desc: 'Nous proposons des solutions optimales adaptées à votre budget.' },
              { icon: Award, title: 'Qualité professionnelle', desc: 'Des matériaux certifiés et une exécution conforme aux normes.' },
              { icon: Star, title: 'Suivi du chantier', desc: 'Rapports réguliers et transparence totale sur l\'avancement des travaux.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-light hover:bg-orange/5 transition-all group">
                  <div className="w-12 h-12 bg-orange/10 group-hover:bg-orange rounded-xl flex items-center justify-center flex-shrink-0 transition-all">
                    <item.icon size={24} className="text-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-steel text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </>
  );
}
