'use client';

import AnimatedSection from './AnimatedSection';

export default function HoursSection() {
  const hours = [
    { icon: '🚨', title: 'Emergency Response', detail: '24/7 · 365 Days', highlight: 'On-site within 30 minutes — no exceptions.' },
    { icon: '🏢', title: 'Office Hours', detail: 'Monday — Sunday', highlight: '9:00 AM – 8:00 PM', sub: 'For contracts & consultations' },
    { icon: '✉️', title: 'Email Response', detail: 'Within 2 hours during office hours.', highlight: 'We never leave a message unanswered.' },
  ];

  return (
    <section className="py-20 bg-off border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <AnimatedSection>
            <span className="section-label">Availability</span>
            <h2 className="section-title">
              When to <em>Reach Us</em>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {hours.map((item, i) => (
            <AnimatedSection key={item.title} animation="up" delay={i * 0.1} className="bg-white p-8 md:p-10 group hover:bg-off transition-colors relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-playfair text-lg font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-ink3 leading-relaxed">
                <strong className="text-red">{item.highlight}</strong><br />
                {item.detail}
                {item.sub && <><br />{item.sub}</>}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}