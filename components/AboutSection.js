'use client';

import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  return (
    <section id="about-strip" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side */}
          <AnimatedSection animation="left">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              Protecting What<br /><em>Matters Most</em>
            </h2>
            <p className="text-base text-ink3 leading-relaxed my-6">
              Rudra Security Pvt Ltd is a premier security services company headquartered in Nashik with regional presence across Mumbai and Pune. Founded in 2018, we have grown into one of Maharashtra's most trusted security partners — built on a foundation of defence expertise and zero-compromise integrity.
            </p>
            <div className="space-y-6">
              {[
                { num: '01', title: 'Vigilance', desc: 'Round-the-clock monitoring with no blind spots, ever.' },
                { num: '02', title: 'Integrity', desc: 'Vetted personnel held to the highest ethical standards.' },
                { num: '03', title: 'Protection', desc: 'Advanced systems + proven protocols = zero breaches.' },
              ].map((pillar) => (
                <div key={pillar.num} className="flex gap-5 pb-5 border-b border-border last:border-0 group hover:pl-2 transition-all">
                  <div className="font-bebas text-lg text-red min-w-8">{pillar.num}</div>
                  <div>
                    <div className="text-sm font-semibold tracking-[0.094rem] uppercase text-ink mb-1">{pillar.title}</div>
                    <div className="text-sm text-ink3 leading-relaxed">{pillar.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Side - Cards */}
          <AnimatedSection animation="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-off p-5 border border-border hover:-translate-y-1.5 transition-all hover:shadow-xl group">
                <div className="font-bebas text-4xl text-ink leading-none">50<em className="text-red not-italic">+</em></div>
                <div className="text-[0.7rem] font-semibold tracking-[0.125em] uppercase text-ink3 mt-1">Security Personnel</div>
              </div>
              <div className="bg-ink p-5 border border-border hover:-translate-y-1.5 transition-all hover:shadow-xl group">
                <div className="font-bebas text-4xl text-white leading-none">20<em className="text-red not-italic">+</em></div>
                <div className="text-[0.7rem] font-semibold tracking-[0.125em] uppercase text-white/45 mt-1">Happy Clients</div>
              </div>
              <div className="bg-red p-5 border border-border hover:-translate-y-1.5 transition-all hover:shadow-xl group">
                <div className="font-bebas text-4xl text-white leading-none">0</div>
                <div className="text-[0.7rem] font-semibold tracking-[0.125em] uppercase text-white/70 mt-1">Security Breaches</div>
              </div>
              <div className="bg-off p-5 border border-border hover:-translate-y-1.5 transition-all hover:shadow-xl group">
                <div className="font-bebas text-4xl text-ink leading-none">98<em className="text-red not-italic">%</em></div>
                <div className="text-[0.7rem] font-semibold tracking-[0.125em] uppercase text-ink3 mt-1">Client Retention</div>
              </div>
              <div className="col-span-2 bg-off2 p-5 border border-border flex items-center gap-4 hover:-translate-y-1.5 transition-all hover:shadow-xl">
                <div className="text-3xl">🏅</div>
                <div>
                  <div className="font-bebas text-xl text-ink">ISO 9001:2015 <em className="text-red not-italic">Certified</em></div>
                  <div className="text-[0.68rem] font-semibold tracking-[0.125em] uppercase text-ink3">International Quality Management Standard · Est. 2018</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}