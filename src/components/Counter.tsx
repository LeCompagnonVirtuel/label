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
    <div ref={ref} className="text-center py-2">
      <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-orange mb-2">
        {isVisible ? count : 0}{suffix}
      </div>
      <div className="text-white/70 text-xs md:text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
