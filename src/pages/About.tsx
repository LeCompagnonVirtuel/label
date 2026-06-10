import { Shield, Target, Eye, Heart, Award, Users, Building2, MapPin, Calendar, Briefcase } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import Counter from '../components/Counter';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

export default function About() {
  return (
    <>
      <SEOHead
        title="À Propos - LABEL PRO CI | Entreprise BTP Yamoussoukro"
        description="Découvrez LABEL PRO CI, entreprise ivoirienne spécialisée en BTP et Génie Civil basée à Yamoussoukro. Plus de 12 ans d'expertise au service de vos projets."
        url="https://labelproci.com/a-propos"
      />

      {/* Hero */}
      <PageHero
        badge="À Propos de Nous"
        title={<>Construire avec <span className="text-orange">excellence</span></>}
        description="Découvrez l'histoire, les valeurs et l'expertise qui font de LABEL PRO CI un acteur majeur du BTP en Côte d'Ivoire."
      />

      {/* Stats */}
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={company.stats.projects} suffix="+" label="Projets Réalisés" />
            <Counter end={company.stats.clients} suffix="+" label="Clients Satisfaits" />
            <Counter end={company.stats.years} suffix="+" label="Années d'Expérience" />
            <Counter end={company.stats.satisfaction} suffix="%" label="Taux de Satisfaction" />
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Building2, label: 'Construction' },
                      { icon: Users, label: 'Équipe' },
                      { icon: MapPin, label: 'Yamoussoukro' },
                      { icon: Calendar, label: `${company.stats.years}+ Ans` },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                        <item.icon size={32} className="text-orange mx-auto mb-2" />
                        <div className="text-white font-semibold text-sm">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-orange rounded-2xl flex items-center justify-center shadow-xl">
                  <Award size={36} className="text-white" />
                </div>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection animation="fade-left">
                <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Briefcase size={16} />
                  Notre Histoire
                </div>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-6">
                  Une entreprise <span className="gradient-text">engagée</span> pour l'excellence
                </h2>
                <p className="text-steel text-lg leading-relaxed mb-6">
                  {company.description}
                </p>
                <p className="text-steel leading-relaxed mb-6">
                  Forte d'une équipe de professionnels expérimentés et d'un parc d'équipements modernes, LABEL PRO CI a su se positionner comme un acteur incontournable du secteur de la construction en Côte d'Ivoire.
                </p>
                <p className="text-steel leading-relaxed mb-8">
                  Notre engagement envers la qualité, la sécurité et le respect des délais nous a permis de bâtir une réputation solide et de fidéliser une clientèle diversifiée.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-up">
              <div className="bg-white rounded-2xl p-8 premium-shadow h-full">
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-orange" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">Notre Mission</h3>
                <p className="text-steel leading-relaxed">
                  Construire des infrastructures de qualité qui répondent aux besoins de nos clients et contribuent au développement de la Côte d'Ivoire. Nous nous engageons à fournir des solutions de construction innovantes, durables et adaptées aux exigences du marché.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="bg-white rounded-2xl p-8 premium-shadow h-full">
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-orange" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">Notre Vision</h3>
                <p className="text-steel leading-relaxed">
                  Devenir le leader du BTP en Côte d'Ivoire en repoussant les limites de l'innovation et de l'excellence. Nous aspirons à être le partenaire de référence pour tous les projets de construction et d'infrastructure en Afrique de l'Ouest.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nos Valeurs
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-4">
              Les valeurs qui nous <span className="gradient-text">animent</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {company.values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-light hover:bg-orange/5 transition-all group h-full">
                  <div className="w-14 h-14 bg-orange/10 group-hover:bg-orange rounded-xl flex items-center justify-center mx-auto mb-4 transition-all">
                    {i === 0 && <Award size={28} className="text-orange group-hover:text-white transition-colors" />}
                    {i === 1 && <Shield size={28} className="text-orange group-hover:text-white transition-colors" />}
                    {i === 2 && <Heart size={28} className="text-orange group-hover:text-white transition-colors" />}
                    {i === 3 && <Target size={28} className="text-orange group-hover:text-white transition-colors" />}
                    {i === 4 && <Users size={28} className="text-orange group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="font-heading font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              Notre Équipe
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
              Une équipe <span className="text-orange">d'experts</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Des professionnels qualifiés et expérimentés au service de vos projets.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'Direction Générale', role: 'Stratégie & Développement', desc: 'Pilotage stratégique et développement de l\'entreprise.' },
              { name: 'Bureau d\'Études', role: 'Conception & Ingénierie', desc: 'Études techniques, calculs et conception de projets.' },
              { name: 'Direction Technique', role: 'Exécution & Contrôle', desc: 'Supervision des chantiers et contrôle qualité.' },
              { name: 'Service QSE', role: 'Qualité, Sécurité, Environnement', desc: 'Assurance qualité et sécurité sur tous les chantiers.' },
            ].map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange/30 transition-all text-center">
                  <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-orange" />
                  </div>
                  <h3 className="font-heading font-bold text-white mb-1">{member.name}</h3>
                  <div className="text-orange text-sm font-medium mb-3">{member.role}</div>
                  <p className="text-white/60 text-sm">{member.desc}</p>
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
