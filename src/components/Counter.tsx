import { useEffect } from 'react';
import { useCountUp, useScrollAnimation } from '../hooks/useScrollAnimation';

interface Props {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function Counter({ end, suffix = '', label, duration = 2000 }: Props) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const { count, setIsActive } = useCountUp(end, duration);

  useEffect(() => {
    if (isVisible) setIsActive(true);
  }, [isVisible, setIsActive]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-extrabold text-orange mb-2">
        {isVisible ? count : 0}{suffix}
      </div>
      <div className="text-white/80 font-body text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
