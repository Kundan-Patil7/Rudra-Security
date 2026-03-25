'use client';

import AnimatedSection from './AnimatedSection';

export default function MapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <span className="section-label">Find Us</span>
          <h2 className="section-title">
            Our <em>Headquarters</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="up" delay={0.2} className="mt-8">
          <div className="bg-off border border-border h-80 flex items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(#E2E0DC 1px, transparent 1px),
                  linear-gradient(90deg, #E2E0DC 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative z-10 text-center">
              <div className="text-4xl animate-bounce-slow">📍</div>
              <h4 className="font-playfair text-lg font-bold text-ink mt-2">Rudra Security Pvt Ltd</h4>
              <p className="text-sm text-ink3 mt-1">Ground Floor, Bhagwati Banquet, Sinner, Nashik</p>
              <a
                href="https://maps.google.com/?q=Sinner+Nashik+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs font-semibold tracking-[0.125em] uppercase text-red border-b border-red/30 hover:border-red transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}