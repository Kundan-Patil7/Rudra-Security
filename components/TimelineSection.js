'use client';

import AnimatedSection from './AnimatedSection';

const timelineEvents = [
  { year: '2018', title: 'Foundation', desc: 'Rudra Security Pvt Ltd established in Nashik by Mr. Jayesh Deshmukh with a vision to deliver world-class security services across Maharashtra.' },
  { year: '2019', title: 'First Major Industrial Contract', desc: 'Secured first large-scale industrial security contract — deploying 15 trained personnel for a manufacturing facility in Nashik MIDC.' },
  { year: '2020', title: 'Residential Division Launch', desc: 'Expanded to co-operative housing societies and residential gated communities across Pune and Nashik.' },
  { year: '2021', title: 'ISO 9001:2015 Certification', desc: 'Achieved ISO 9001:2015 certification — validating our quality management systems and setting new service standards for the industry.' },
  { year: '2022', title: 'CCTV & Technology Division', desc: 'Launched integrated CCTV and technology division, combining human vigilance with advanced surveillance monitoring systems.' },
  { year: '2023–Present', title: 'Regional Expansion', desc: 'Expanded to Mumbai, strengthened Pune. Now 20+ clients, 50+ personnel. Still zero security breaches, 98% client retention.' },
];

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-28 bg-off border-y border-border">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <AnimatedSection>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">
              The Rudra <em>Story</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="right" className="md:col-span-2">
            <p className="text-sm text-ink3 leading-relaxed border-t border-border pt-4">
              From a bold idea in 2018 to one of Maharashtra's most trusted security firms — our growth has been built on one principle: never compromise on the safety of those who trust us.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 border border-border">
          {timelineEvents.map((event, i) => (
            <AnimatedSection
              key={event.year}
              animation="up"
              delay={i * 0.05}
              className={`p-6 md:p-8 border-b border-border ${i % 2 === 0 ? 'border-r' : ''} hover:bg-white transition-colors group relative overflow-hidden`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red to-transparent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="font-bebas text-sm tracking-[0.188rem] text-red mb-2">{event.year}</div>
              <h3 className="font-playfair text-lg font-bold text-ink mb-2">{event.title}</h3>
              <p className="text-sm text-ink3 leading-relaxed">{event.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}