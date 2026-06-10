import { Shield, Target, Eye, Heart, Award, Users, Building2, MapPin, Calendar, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { company } from '../config/company';
import { images } from '../config/images';
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
        description="Découvrez LABEL PRO CI, entreprise ivoirienne spécialisée en BTP et Génie Civil basée à Yamoussoukro. Plus de 12 ans d'expertise."
        url="https://labelproci.com/a-propos"
      />

      <PageHero
        badge="À Propos de Nous"
        title={<>Construire avec <span className="text-orange">excellence</span></>}
        description="Découvrez l'histoire, les valeurs et l'expertise qui font de LABEL PRO CI un acteur majeur du BTP en Côte d'Ivoire."
      />

      <section className="bg-navy py-10 md:py-12 border-b border-white/5">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter end={company.stats.projects} suffix="+" label="Projets Réalisés" />
            <Counter end={company.stats.clients} suffix="+" label="Clients Satisfaits" />
            <Counter end={company.stats.years} suffix="+" label="Années d'Expérience" />
            <Counter end={company.stats.satisfaction} suffix="%" label="Taux de Satisfaction" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={images.about.team} alt="Équipe LABEL PRO CI" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: Building2, label: 'Construction' },
                      { icon: Users, label: 'Équipe' },
                      { icon: MapPin, label: 'Yamoussoukro' },
                      { icon: Calendar, label: `${company.stats.years}+ Ans` },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 text-center"
                      >
                        <item.icon size={20} className="text-orange mx-auto mb-1" />
                        <div className="text-white font-semibold text-[10px]">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection animation="fade-left">
                <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  <Briefcase size={13} /> Notre Histoire
                </div>
                <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-navy mb-4">
                  Une entreprise <span className="gradient-text">engagée</span> pour l'excellence
                </h2>
                <p className="text-steel text-base leading-relaxed mb-4">{company.description}</p>
                <p className="text-steel text-sm leading-relaxed mb-4">
                  Forte d'une équipe de professionnels expérimentés et d'un parc d'équipements modernes, LABEL PRO CI a su se positionner comme un acteur incontournable du secteur de la construction en Côte d'Ivoire.
                </p>
                <p className="text-steel text-sm leading-relaxed">
                  Notre engagement envers la qualité, la sécurité et le respect des délais nous a permis de bâtir une réputation solide et de fidéliser une clientèle diversifiée.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              { icon: Target, title: 'Notre Mission', desc: 'Construire des infrastructures de qualité qui répondent aux besoins de nos clients et contribuent au développement de la Côte d\'Ivoire. Nous nous engageons à fournir des solutions de construction innovantes, durables et adaptées aux exigences du marché.' },
              { icon: Eye, title: 'Notre Vision', desc: 'Devenir le leader du BTP en Côte d\'Ivoire en repoussant les limites de l\'innovation et de l\'excellence. Nous aspirons à être le partenaire de référence pour tous les projets de construction et d\'infrastructure en Afrique de l\'Ouest.' },
            ].map((item, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.1}>
                <div className="bg-white rounded-xl p-5 md:p-6 premium-shadow h-full">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-orange" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-3">{item.title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-site">
          <AnimatedSection className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">Nos Valeurs</div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-navy">
              Les valeurs qui nous <span className="gradient-text">animent</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {company.values.map((value, i) => {
              const icons = [Award, Shield, Heart, Target, Users];
              const Icon = icons[i] || Award;
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="text-center p-4 rounded-xl bg-light hover:bg-orange/5 transition-colors group h-full">
                    <div className="w-10 h-10 bg-orange/10 group-hover:bg-orange rounded-lg flex items-center justify-center mx-auto mb-3 transition-colors">
                      <Icon size={20} className="text-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading font-bold text-navy text-sm mb-1">{value.title}</h3>
                    <p className="text-steel text-xs leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy">
        <div className="container-site">
          <AnimatedSection className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange/15 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4">Notre Équipe</div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-2">
              Une équipe <span className="text-orange">d'experts</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm">Des professionnels qualifiés et expérimentés au service de vos projets.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Direction Générale', role: 'Stratégie & Développement', desc: 'Pilotage stratégique et développement de l\'entreprise.' },
              { name: 'Bureau d\'Études', role: 'Conception & Ingénierie', desc: 'Études techniques, calculs et conception de projets.' },
              { name: 'Direction Technique', role: 'Exécution & Contrôle', desc: 'Supervision des chantiers et contrôle qualité.' },
              { name: 'Service QSE', role: 'Qualité, Sécurité, Environnement', desc: 'Assurance qualité et sécurité sur tous les chantiers.' },
            ].map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-orange/20 transition-colors text-center">
                  <div className="w-14 h-14 bg-orange/15 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users size={24} className="text-orange" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm mb-0.5">{member.name}</h3>
                  <div className="text-orange text-xs font-medium mb-2">{member.role}</div>
                  <p className="text-white/50 text-xs">{member.desc}</p>
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
