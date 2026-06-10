import type { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: number;
}

export default function AnimatedSection({ children, className = '', animation = 'fade-up', delay = 0 }: Props) {
  const { ref, isVisible } = useScrollAnimation(0.05);

  const animClass = {
    'fade-up': 'animate-fade-up',
    'fade-left': 'animate-fade-left',
    'fade-right': 'animate-fade-right',
    'scale-in': 'animate-scale-in',
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animClass : ''}`}
      style={isVisible ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
