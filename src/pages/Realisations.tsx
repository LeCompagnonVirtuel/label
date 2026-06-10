import { useState } from 'react';
import { MapPin, Clock, ArrowRight, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const categories = ['Tous', ...Array.from(new Set(company.projects.map(p => p.category)))];
const projectEmojis: Record<string, string> = {
  'Construction': '🏗️', 'Travaux Publics': '🛤️', 'Génie Civil': '🌉', 'VRD': '🏘️',
  'Assainissement': '💧', 'Terrassement': '🚜', 'Réhabilitation': '🔨',
};

export default function Realisations() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filtered = company.projects.filter(p => {
    const matchesCategory = activeCategory === 'Tous' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentProject = selectedProject !== null ? filtered[selectedProject] : null;

  return (
    <>
      <SEOHead
        title="Réalisations - LABEL PRO CI | Portfolio Construction Côte d'Ivoire"
        description="Découvrez nos réalisations : bâtiments, routes, ponts, VRD et infrastructures en Côte d'Ivoire."
        url="https://labelproci.com/realisations"
      />

      <PageHero
        badge="Portfolio"
        title={<>Nos <span className="text-orange">réalisations</span></>}
        description="Découvrez les projets que nous avons réalisés avec succès à travers la Côte d'Ivoire."
      />

      <section className="py-6 md:py-8 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeCategory === cat ? 'bg-orange text-white' : 'bg-gray-100 text-steel hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-56">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text" placeholder="Rechercher..." value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:border-orange text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          {filtered.length === 0 ? (
            <div className="text-center py-16"><p className="text-steel text-base">Aucun projet trouvé.</p></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
              {filtered.map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 0.04}>
                  <div onClick={() => setSelectedProject(i)} className="group bg-white rounded-xl overflow-hidden premium-shadow premium-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="relative h-40 md:h-48 bg-gradient-to-br from-navy to-navy-light overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl opacity-15 group-hover:scale-110 transition-transform duration-500">
                          {projectEmojis[project.category] || '🏗️'}
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 z-20">
                        <span className="bg-orange text-white px-2.5 py-0.5 rounded-full text-[10px] font-medium">{project.category}</span>
                      </div>
                      <div className="absolute top-3 right-3 z-20">
                        <span className="bg-white/15 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[10px] font-medium">{project.year}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 z-20">
                        <h3 className="font-heading font-bold text-white text-sm group-hover:text-orange transition-colors">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 text-steel text-xs mb-2">
                        <span className="flex items-center gap-1"><MapPin size={11} className="text-orange" /> {project.location}</span>
                        <span className="flex items-center gap-1"><Clock size={11} className="text-orange" /> {project.duration}</span>
                      </div>
                      <p className="text-steel text-xs leading-relaxed line-clamp-2 mb-3">{project.description}</p>
                      <div className="flex items-center gap-1.5 text-orange font-medium text-xs group-hover:gap-2.5 transition-all">
                        Voir les détails <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {currentProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative h-48 md:h-56 bg-gradient-to-br from-navy to-navy-light rounded-t-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl opacity-20">{projectEmojis[currentProject.category] || '🏗️'}</div>
              </div>
              <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 w-8 h-8 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-colors z-10">
                <X size={16} />
              </button>
              <div className="absolute bottom-3 left-4 z-10">
                <span className="bg-orange text-white px-2.5 py-0.5 rounded-full text-xs font-medium">{currentProject.category}</span>
              </div>
            </div>
            <div className="p-5 md:p-6">
              <h2 className="font-heading font-extrabold text-xl text-navy mb-3">{currentProject.title}</h2>
              <p className="text-steel text-sm leading-relaxed mb-5">{currentProject.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: 'Localisation', value: currentProject.location, icon: MapPin },
                  { label: 'Durée', value: currentProject.duration, icon: Clock },
                  { label: 'Type', value: currentProject.category },
                  { label: 'Année', value: String(currentProject.year) },
                ].map((item, i) => (
                  <div key={i} className="bg-light rounded-lg p-3">
                    <div className="text-steel text-[10px]">{item.label}</div>
                    <div className="font-heading font-bold text-navy text-sm flex items-center gap-1">
                      {item.icon && <item.icon size={12} className="text-orange" />}
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {selectedProject !== null && selectedProject > 0 && (
                  <button onClick={(e) => { e.stopPropagation(); setSelectedProject(selectedProject - 1); }} className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-navy px-3 py-2 rounded-lg transition-colors text-xs font-medium">
                    <ChevronLeft size={14} /> Précédent
                  </button>
                )}
                {selectedProject !== null && selectedProject < filtered.length - 1 && (
                  <button onClick={(e) => { e.stopPropagation(); setSelectedProject(selectedProject + 1); }} className="flex items-center gap-1.5 bg-orange hover:bg-orange-dark text-white px-3 py-2 rounded-lg transition-colors text-xs font-medium ml-auto">
                    Suivant <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </>
  );
}
