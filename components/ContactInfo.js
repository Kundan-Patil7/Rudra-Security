'use client';

import AnimatedSection from './AnimatedSection';

export default function ContactInfo() {
  return (
    <div className="bg-ink p-8 md:p-12 lg:p-16 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-red/15 rounded-full blur-3xl" />
      
      <AnimatedSection animation="left">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">
          Always <em className="text-red not-italic">Reachable</em>
        </h2>
        <p className="text-sm text-white/50 mb-12">
          Whether it's a routine enquiry or an emergency — our team responds within minutes.
        </p>
      </AnimatedSection>

      <div className="space-y-8">
        {[
          { icon: '📞', label: 'Phone Numbers', value: ['70208 98975 (24×7)', '72494 95118 (Alternate)'], isLink: true, link: 'tel:' },
          { icon: '✉️', label: 'Email', value: ['blackhawkforce001@gmail.com'], isLink: true, link: 'mailto:', sub: 'Response within 2 hours' },
          { icon: '📍', label: 'Corporate Office', value: ['Ground Floor, Bhagwati Banquet, Sinner, Nashik — Maharashtra'], isLink: false },
          { icon: '🕐', label: 'Business Hours', value: ['Office: 9 AM – 8 PM (Mon–Sun)', 'Emergency: 24/7 always active'], isLink: false },
        ].map((item, i) => (
          <AnimatedSection key={item.label} animation="left" delay={i * 0.1}>
            <div className="flex gap-5 pb-8 border-b border-white/10 hover:pl-1.5 transition-all">
              <div className="w-11 h-11 border border-red/20 bg-red/10 flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <div>
                <div className="text-[0.68rem] font-semibold tracking-[0.188rem] uppercase text-red mb-1.5">
                  {item.label}
                </div>
                {item.value.map((val, idx) => (
                  <div key={idx} className="text-white text-sm leading-relaxed">
                    {item.isLink ? (
                      <a href={`${item.link}${val.split(' ')[0]}`} className="hover:text-red transition-colors">
                        {val}
                      </a>
                    ) : (
                      val
                    )}
                  </div>
                ))}
                {item.sub && <div className="text-white/35 text-xs mt-1">{item.sub}</div>}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="flex gap-px mt-12 bg-white/10">
        {['Mumbai', 'Pune', 'Nashik'].map((city) => (
          <div key={city} className="flex-1 text-center py-3.5 bg-white/5 text-xs font-semibold tracking-[0.125em] uppercase text-white/50 hover:bg-red/15 hover:text-white transition-all cursor-default">
            {city}
          </div>
        ))}
      </div>
    </div>
  );
}