'use client';

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function LeadershipCTA() {
  return (
    <AnimatedSection animation="up">
      <div className="bg-red py-16 md:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-bebas text-[12rem] md:text-[18rem] text-white/5 leading-none pointer-events-none select-none">
          JOIN US
        </div>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                Work With India's<br />Best Security Team
              </h2>
              <p className="text-white/70 text-sm md:text-base">
                Speak with our leadership team and design your perfect security solution.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red text-sm font-semibold tracking-[0.125em] uppercase transition-all duration-300 hover:bg-off hover:-translate-y-1"
              >
                Contact Our Team →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}