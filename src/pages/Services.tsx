import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList, FileText, Phone, MessageCircle } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const iconMap: Record<string, React.ElementType> = {
  Building2, Landmark, Route, Network, Tractor, Droplets, RefreshCw, ClipboardList,
};

export function ServicesList() {
  return (
    <>
      <SEOHead
        title="Services - LABEL PRO CI | BTP, Génie Civil, Travaux Publics"
        description="Découvrez tous nos services : construction de bâtiments, génie civil, travaux publics, VRD, terrassement, assainissement et études techniques."
        url="https://labelproci.com/services"
      />

      <PageHero
        badge="Nos Services"
        title={<>Des solutions <span className="text-orange">complètes</span> pour vos projets</>}
        description="De l'étude technique à la livraison, nous couvrons l'ensemble des métiers du BTP et du génie civil."
      />

      <section className="py-20 bg-light">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {company.services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export function ServiceDetail() {
  const { id } = useParams();
  const service = company.services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-navy mb-4">Service non trouvé</h1>
          <Link to="/services" className="text-orange hover:underline">Retour aux services</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Building2;
  const otherServices = company.services.filter(s => s.id !== id);

  return (
    <>
      <SEOHead
        title={`${service.title} - LABEL PRO CI | Yamoussoukro`}
        description={service.description}
        url={`https://labelproci.com/services/${service.id}`}
      />

      {/* Hero */}
      <PageHero
        badge={<><Icon size={16} /> Service</>}
        title={service.title}
        description={service.shortDesc}
      />

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-6">Description</h2>
                <p className="text-steel text-lg leading-relaxed mb-10">{service.description}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-6">Nos Avantages</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.advantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-light rounded-xl">
                      <CheckCircle size={20} className="text-orange flex-shrink-0 mt-0.5" />
                      <span className="text-steel">{adv}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-6">Notre Méthodologie</h2>
                <div className="space-y-4">
                  {service.methodology.map((step, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-light rounded-xl group hover:bg-orange/5 transition-all">
                      <div className="w-10 h-10 bg-orange text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <span className="text-navy font-medium">{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection animation="fade-left">
                <div className="bg-light rounded-2xl p-6 sticky top-32">
                  <h3 className="font-heading font-bold text-xl text-navy mb-6">Demander un devis</h3>
                  <p className="text-steel text-sm mb-6">
                    Obtenez un devis gratuit et personnalisé pour votre projet de {service.title.toLowerCase()}.
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="/devis"
                      className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3 rounded-xl font-semibold transition-all w-full"
                    >
                      <FileText size={18} />
                      Demander un devis
                    </Link>
                    <a
                      href={`tel:${company.contact.phoneClean}`}
                      className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-xl font-semibold transition-all w-full"
                    >
                      <Phone size={18} />
                      Appeler maintenant
                    </a>
                    <a
                      href={`https://wa.me/${company.contact.whatsappClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all w-full"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-heading font-bold text-navy mb-4">Autres services</h4>
                    <div className="space-y-2">
                      {otherServices.slice(0, 5).map(s => (
                        <Link
                          key={s.id}
                          to={`/services/${s.id}`}
                          className="flex items-center gap-2 text-steel hover:text-orange text-sm transition-colors"
                        >
                          <ArrowRight size={14} />
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`Besoin de ${service.title.toLowerCase()} ?`} subtitle="Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé." />
    </>
  );
}
