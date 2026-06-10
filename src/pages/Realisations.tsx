import { useState } from 'react';
import { MapPin, Clock, ArrowRight, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const categories = ['Tous', ...Array.from(new Set(company.projects.map(p => p.category)))];

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

  const projectEmojis: Record<string, string> = {
    'Construction': '🏗️',
    'Travaux Publics': '🛤️',
    'Génie Civil': '🌉',
    'VRD': '🏘️',
    'Assainissement': '💧',
    'Terrassement': '🚜',
    'Réhabilitation': '🔨',
  };

  const currentProject = selectedProject !== null ? filtered[selectedProject] : null;

  return (
    <>
      <SEOHead
        title="Réalisations - LABEL PRO CI | Portfolio Construction Côte d'Ivoire"
        description="Découvrez nos réalisations : bâtiments, routes, ponts, VRD et infrastructures en Côte d'Ivoire. Portfolio de projets BTP par LABEL PRO CI."
        url="https://labelproci.com/realisations"
      />

      {/* Hero */}
      <PageHero
        badge="Portfolio"
        title={<>Nos <span className="text-orange">réalisations</span></>}
        description="Découvrez les projets que nous avons réalisés avec succès à travers la Côte d'Ivoire."
      />

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-orange text-white'
                      : 'bg-gray-100 text-steel hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-steel text-lg">Aucun projet trouvé pour cette recherche.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 0.1}>
                  <div
                    onClick={() => setSelectedProject(i)}
                    className="group bg-white rounded-2xl overflow-hidden premium-shadow premium-shadow-hover transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="relative h-52 bg-gradient-to-br from-navy to-navy-light overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-7xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                          {projectEmojis[project.category] || '🏗️'}
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                          {project.year}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <h3 className="font-heading font-bold text-white text-lg group-hover:text-orange transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-4 text-steel text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} className="text-orange" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} className="text-orange" />
                          {project.duration}
                        </span>
                      </div>
                      <p className="text-steel text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex items-center gap-2 text-orange font-medium text-sm group-hover:gap-3 transition-all">
                        Voir les détails
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {currentProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative h-64 bg-gradient-to-br from-navy to-navy-light rounded-t-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl opacity-30">
                  {projectEmojis[currentProject.category] || '🏗️'}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-6 z-10">
                <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentProject.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="font-heading font-extrabold text-2xl text-navy mb-4">{currentProject.title}</h2>
              <p className="text-steel leading-relaxed mb-6">{currentProject.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-light rounded-xl p-4">
                  <div className="text-steel text-sm">Localisation</div>
                  <div className="font-heading font-bold text-navy flex items-center gap-1">
                    <MapPin size={14} className="text-orange" />
                    {currentProject.location}
                  </div>
                </div>
                <div className="bg-light rounded-xl p-4">
                  <div className="text-steel text-sm">Durée</div>
                  <div className="font-heading font-bold text-navy flex items-center gap-1">
                    <Clock size={14} className="text-orange" />
                    {currentProject.duration}
                  </div>
                </div>
                <div className="bg-light rounded-xl p-4">
                  <div className="text-steel text-sm">Type</div>
                  <div className="font-heading font-bold text-navy">{currentProject.category}</div>
                </div>
                <div className="bg-light rounded-xl p-4">
                  <div className="text-steel text-sm">Année</div>
                  <div className="font-heading font-bold text-navy">{currentProject.year}</div>
                </div>
              </div>
              <div className="flex gap-3">
                {selectedProject !== null && selectedProject > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(selectedProject - 1); }}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-navy px-4 py-2 rounded-lg transition-all"
                  >
                    <ChevronLeft size={16} />
                    Précédent
                  </button>
                )}
                {selectedProject !== null && selectedProject < filtered.length - 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(selectedProject + 1); }}
                    className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-4 py-2 rounded-lg transition-all ml-auto"
                  >
                    Suivant
                    <ChevronRight size={16} />
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
