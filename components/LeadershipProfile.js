'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function LeadershipProfile({
  name,
  role,
  specialization,
  bio,
  metrics,
  skills,
  image,
  initial,
  reverse = false,
  delay = 0,
}) {
  const content = (
    <div className={`grid md:grid-cols-2 gap-0 border border-border ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Visual Side */}
      <div className="bg-ink p-8 md:p-12 lg:p-16 relative overflow-hidden min-h-[400px] flex flex-col justify-end">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 right-4 font-bebas text-[12rem] md:text-[14rem] text-red/5 leading-none pointer-events-none select-none">
          {initial}
        </div>
        <div className="relative z-10">
          <div className="w-28 h-28 rounded-full border-2 border-red/40 flex items-center justify-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-red/10 flex items-center justify-center">
              {image ? (
                <Image src={image} alt={name} width={96} height={96} className="w-full h-full object-cover" />
              ) : (
                <span className="font-bebas text-4xl text-red/60">{initial}</span>
              )}
            </div>
          </div>
          <div className="inline-block bg-red px-4 py-1.5 mb-3">
            <span className="text-[0.68rem] font-bold tracking-[0.188rem] uppercase text-white">{role}</span>
          </div>
          <h3 className="font-playfair text-2xl md:text-3xl font-black text-white leading-tight">{name}</h3>
          <p className="text-sm text-white/45 mt-1.5">{specialization}</p>
        </div>
      </div>

      {/* Content Side */}
      <div className="bg-white p-8 md:p-12 lg:p-16">
        <h4 className="font-playfair text-xl md:text-2xl font-bold text-ink mb-4">
          Shaping <em className="text-red not-italic">Security Excellence</em>
        </h4>
        {bio.map((paragraph, i) => (
          <p key={i} className="text-sm text-ink3 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-px bg-border border border-border my-7">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-off p-4 md:p-5 text-center hover:bg-redPale transition-colors">
              <div className="font-bebas text-2xl md:text-3xl text-red leading-none">{metric.num}</div>
              <div className="text-[0.66rem] font-semibold tracking-[0.125em] uppercase text-ink3 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 border-2 border-border2 text-[0.72rem] font-semibold tracking-[0.094rem] uppercase text-ink3 transition-all hover:border-red hover:text-red hover:bg-redPale cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return <AnimatedSection animation="up" delay={delay} className="mb-6 last:mb-0">{content}</AnimatedSection>;
}