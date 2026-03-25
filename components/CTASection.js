'use client';

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function CTASection() {
  return (
    <section id="cta-main" className="bg-red py-16 md:py-20 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-bebas text-[12rem] md:text-[18rem] text-white/5 leading-none pointer-events-none select-none">
        SECURE
      </div>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection animation="left">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              Ready to Secure Your<br />Business or Home?
            </h2>
            <p className="text-white/70 text-sm md:text-base mb-6">
              Emergency response within 30 minutes. Speak to our security experts now.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-red text-sm font-semibold tracking-[0.125em] uppercase transition-all duration-300 hover:bg-off hover:-translate-y-0.5"
            >
              Book a Free Consultation →
            </Link>
          </AnimatedSection>
          <AnimatedSection animation="right" className="md:text-right">
            <a href="tel:7020898975" className="font-bebas text-4xl md:text-5xl text-white hover:opacity-80 transition-opacity">
              70208 98975
            </a>
            <div className="text-xs text-white/50 mt-2">
              Alt: 72494 95118<br />
              Office: 9 AM – 8 PM · Emergency: 24/7
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}