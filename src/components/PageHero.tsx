import type { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';

interface Props {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
}

export default function PageHero({ badge, title, description }: Props) {
  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-navy via-navy-light to-navy-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-orange rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 container-site">
        <AnimatedSection>
          {badge && (
            <div className="inline-flex items-center gap-2 bg-orange/15 text-orange px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-orange/20">
              {badge}
            </div>
          )}
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3">
            {title}
          </h1>
          {description && (
            <p className="text-white/60 text-sm md:text-base max-w-xl">
              {description}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
