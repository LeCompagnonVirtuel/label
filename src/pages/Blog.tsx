import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { company } from '../config/company';
import { images } from '../config/images';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';

const categories = ['Tous', ...company.blogCategories];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const filtered = company.blogPosts.filter(p => activeCategory === 'Tous' || p.category === activeCategory);

  return (
    <>
      <SEOHead title="Blog - LABEL PRO CI | Actualités BTP & Génie Civil" description="Retrouvez nos articles et conseils sur la construction et le génie civil en Côte d'Ivoire." url="https://labelproci.com/blog" />
      <PageHero
        badge={<><Calendar size={14} /> Blog</>}
        title={<>Actualités & <span className="text-orange">Conseils</span></>}
        description="Restez informé des dernières tendances et conseils du secteur BTP."
      />

      <section className="py-6 md:py-8 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="container-site">
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeCategory === cat ? 'bg-orange text-white' : 'bg-gray-100 text-steel hover:bg-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-light">
        <div className="container-site">
          {filtered.length === 0 ? (
            <div className="text-center py-16"><p className="text-steel text-base">Aucun article dans cette catégorie.</p></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.05}>
                  <article className="bg-white rounded-xl overflow-hidden premium-shadow premium-shadow-hover transition-all duration-300 hover:-translate-y-1 group">
                    <div className="relative h-40 md:h-44 overflow-hidden">
                      <img
                        src={images.blog[i % images.blog.length]}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="flex items-center gap-1 bg-orange text-white px-2.5 py-0.5 rounded-full text-[10px] font-medium">
                          <Tag size={10} /> {post.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl opacity-10">
                          {post.category === 'Construction' ? '🏗️' : post.category === 'Génie Civil' ? '🌉' : post.category === 'BTP' ? '🏢' : post.category === 'Conseils' ? '💡' : '🔬'}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:p-5">
                      <div className="flex items-center gap-3 text-steel text-[10px] mb-2">
                        <span className="flex items-center gap-1"><Calendar size={10} /> {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                      </div>
                      <h2 className="font-heading font-bold text-sm md:text-base text-navy mb-2 group-hover:text-orange transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-steel text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-1.5 text-orange font-medium text-xs group-hover:gap-2.5 transition-all">
                        Lire l'article <ArrowRight size={13} />
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection title="Vous avez un projet ?" subtitle="Notre équipe est prête à étudier votre projet et vous accompagner." />
    </>
  );
}
