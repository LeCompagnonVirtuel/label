import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { company } from '../config/company';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const categories = ['Tous', ...company.blogCategories];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = company.blogPosts.filter(
    p => activeCategory === 'Tous' || p.category === activeCategory
  );

  return (
    <>
      <SEOHead
        title="Blog - LABEL PRO CI | Actualités BTP & Génie Civil"
        description="Retrouvez nos articles et conseils sur la construction, le génie civil et les travaux publics en Côte d'Ivoire."
        url="https://labelproci.com/blog"
      />

      {/* Hero */}
      <PageHero
        badge={<><Calendar size={16} /> Blog</>}
        title={<>Actualités & <span className="text-orange">Conseils</span></>}
        description="Restez informé des dernières tendances et conseils du secteur BTP."
      />

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="container-site">
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
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-light">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1}>
                <article className="bg-white rounded-2xl overflow-hidden premium-shadow premium-shadow-hover transition-all duration-500 hover:-translate-y-2 group">
                  <div className="relative h-48 bg-gradient-to-br from-navy to-navy-light overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1 bg-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                        <Tag size={12} />
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-15">
                        {post.category === 'Construction' ? '🏗️' : post.category === 'Génie Civil' ? '🌉' : post.category === 'BTP' ? '🏢' : post.category === 'Conseils' ? '💡' : '🔬'}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-steel text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-lg text-navy mb-3 group-hover:text-orange transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-steel text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-orange font-medium text-sm group-hover:gap-3 transition-all">
                      Lire l'article
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-steel text-lg">Aucun article dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection title="Vous avez un projet ?" subtitle="Notre équipe est prête à étudier votre projet et vous accompagner." />
    </>
  );
}
