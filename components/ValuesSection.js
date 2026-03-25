'use client';

import AnimatedSection from './AnimatedSection';

const values = [
  { icon: '🎯', title: 'Vigilance', desc: 'Constant alertness and proactive threat detection. We never compromise on attention to every assignment, no matter how routine it seems.' },
  { icon: '⚖️', title: 'Integrity', desc: 'Every member of our team is held to the highest ethical standards. Trust is the foundation — and the result — of every client relationship we build.' },
  { icon: '🛡️', title: 'Protection', desc: 'Beyond physical security — we protect your assets, reputation and peace of mind through proven protocols and relentless commitment.' },
];

export default function ValuesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <AnimatedSection>
            <span className="section-label">Core Principles</span>
            <h2 className="section-title">
              What We <em>Stand For</em>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} animation="up" delay={i * 0.1}>
              <div className="p-8 md:p-10 border-2 border-border bg-white transition-all duration-300 hover:border-red/30 hover:shadow-2xl hover:-translate-y-1.5 group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-14 h-14 border-2 border-border2 flex items-center justify-center text-2xl mb-5 transition-all group-hover:border-red group-hover:bg-redPale">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-lg font-bold text-ink mb-2">{value.title}</h3>
                <p className="text-sm text-ink3 leading-relaxed">{value.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}