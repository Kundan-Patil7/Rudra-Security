'use client';

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const services = [
  { icon: '🏭', title: 'Industrial Security', desc: 'Factories, manufacturing units, warehouses & SEZs with patrolling and access control.', tag: '24/7 Vigilance' },
  { icon: '🏘️', title: 'Housing Societies', desc: 'Gated communities and apartments with visitor management and night patrol.', tag: 'Residential' },
  { icon: '🏡', title: 'Bungalows & Estates', desc: 'Private estate security, boundary patrolling and alarm response.', tag: 'VIP Protection' },
  { icon: '🏢', title: 'Commercial Properties', desc: 'Office complexes, retail spaces and vacant property surveillance.', tag: 'Asset Security' },
  { icon: '🎓', title: 'Schools & Colleges', desc: 'Campus safety, CCTV monitoring and student protection protocols.', tag: 'Educational' },
  { icon: '📷', title: 'CCTV + Manpower', desc: 'End-to-end surveillance systems integrated with trained on-ground guards.', tag: 'Tech-Enabled' },
  { icon: '🚚', title: 'Logistics & Pharma', desc: 'Supply chain security and pharma warehouse protection services.', tag: 'Specialized' },
  { icon: '🎪', title: 'Event Security', desc: 'Corporate events, weddings and exhibitions with crowd management.', tag: 'Temporary' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-28 bg-off border-y border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <AnimatedSection>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Our Protection<br /><em>Spectrum</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="right" className="md:max-w-xs">
            <p className="text-sm text-ink3 leading-relaxed">
              Comprehensive security solutions with trained manpower & advanced surveillance technology — customised to your needs.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              animation="up"
              delay={i * 0.05}
              className="bg-white p-8 border-b border-border last:border-b-0 lg:border-b-0 lg:border-r border-border transition-all duration-300 hover:bg-off hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 border border-border2 bg-off flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-red group-hover:border-red">
                <span className="text-2xl transition-colors group-hover:text-white">{service.icon}</span>
              </div>
              <h3 className="font-playfair text-lg font-bold text-ink mb-2.5 transition-colors group-hover:text-red">
                {service.title}
              </h3>
              <p className="text-sm text-ink3 leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-block px-3 py-1 bg-off2 text-[0.65rem] font-semibold tracking-[0.125em] uppercase text-ink3 transition-all group-hover:bg-red/10 group-hover:text-red">
                {service.tag}
              </span>
            </AnimatedSection>
          ))}
          <AnimatedSection animation="up" delay={0.4} className="lg:col-span-4 bg-ink p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/80 text-base">
              Need a <span className="text-red">customised security solution?</span> Talk to our experts today.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-red hover:bg-off hover:shadow-none">
              Get Custom Quote →
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}