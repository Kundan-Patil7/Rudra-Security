'use client';

import AnimatedSection from './AnimatedSection';

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="bg-ink py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-red/10 to-transparent" />
      <div className="container-custom">
        <AnimatedSection animation="up" className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
            <div className="font-playfair text-8xl md:text-9xl text-red/20 leading-none select-none">"</div>
            <div>
              <p className="font-playfair text-xl md:text-2xl italic leading-relaxed text-white/90 mb-6">
                Rudra Security has been managing our society security for 5 years. Professional, responsive, and reliable — exactly what a residential community needs. We haven't had a single incident.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-red" />
                <div className="text-xs font-semibold tracking-[0.156rem] uppercase text-white/50">
                  Gokul Heights CHS, Pune
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}