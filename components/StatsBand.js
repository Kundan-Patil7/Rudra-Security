'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from './AnimatedSection';

const stats = [
  { num: 6, suffix: '+', label: 'Years of Service' },
  { num: 50, suffix: '+', label: 'Security Personnel' },
  { num: 98, suffix: '%', label: 'Client Retention Rate' },
  { num: 10, suffix: 'K+ hrs', label: 'Personnel Trained' },
];

function AnimatedNumber({ end, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref}>
      <div className="font-bebas text-5xl md:text-6xl text-white leading-none">
        {Math.floor(count)}<em className="text-red not-italic">{suffix}</em>
      </div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <div className="bg-ink py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center py-8 md:py-10 relative">
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10 hidden md:block" />
              )}
              <AnimatedNumber end={stat.num} suffix={stat.suffix} />
              <div className="text-[0.72rem] font-semibold tracking-[0.156rem] uppercase text-white/40 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}