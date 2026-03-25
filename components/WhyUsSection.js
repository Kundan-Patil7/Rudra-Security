'use client';

import AnimatedSection from './AnimatedSection';

const reasons = [
  { num: '01', title: 'Defence-Trained Personnel', desc: 'Our guards are recruited from ex-military and paramilitary backgrounds — highest discipline, zero compromise.' },
  { num: '02', title: 'Technology Integration', desc: 'Human vigilance combined with advanced CCTV, AI analytics, and real-time reporting systems.' },
  { num: '03', title: '30-Min Emergency Response', desc: 'On-site presence within 30 minutes for any security incident — 365 days, no exceptions.' },
  { num: '04', title: 'Bespoke Security Plans', desc: 'Every client gets a custom security framework — your risk profile, your budget, your solution.' },
  { num: '05', title: 'ISO 9001:2015 Quality', desc: 'Internationally certified processes ensuring consistent quality, accountability and improvement.' },
  { num: '06', title: '3 Regional Offices', desc: 'Mumbai, Pune and Nashik — covering all of Maharashtra\'s major business and residential zones.' },
];

export default function WhyUsSection() {
  return (
    <section id="why" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection animation="left">
            <span className="section-label">Why Rudra</span>
            <h2 className="section-title">
              The Reason<br />Clients <em>Stay</em>
            </h2>
            <p className="text-base text-ink3 leading-relaxed my-6">
              Our 98% client retention rate isn't luck — it's the direct result of consistent excellence, genuine accountability, and security solutions that actually work.
            </p>
            <div className="font-bebas text-8xl md:text-9xl text-off2 select-none">98%</div>
          </AnimatedSection>

          <AnimatedSection animation="right">
            <div className="space-y-0">
              {reasons.map((reason, i) => (
                <div key={reason.num} className={`py-5 ${i < reasons.length - 1 ? 'border-b border-border' : ''} flex gap-4 group hover:pl-2 transition-all`}>
                  <div className="font-bebas text-2xl text-border2 min-w-10 transition-colors group-hover:text-red">{reason.num}</div>
                  <div>
                    <div className="text-sm font-semibold tracking-[0.0625rem] uppercase text-ink mb-1.5 transition-colors group-hover:text-red">
                      {reason.title}
                    </div>
                    <div className="text-sm text-ink3 leading-relaxed">{reason.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}