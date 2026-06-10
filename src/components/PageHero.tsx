import type { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';

interface Props {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
}

export default function PageHero({ badge, title, description }: Props) {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-navy via-navy-light to-navy-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 container-site">
        <AnimatedSection>
          {badge && (
            <div className="inline-flex items-center gap-2 bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              {badge}
            </div>
          )}
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-white/70 text-base md:text-lg max-w-2xl">
              {description}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
