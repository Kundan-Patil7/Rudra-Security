'use client';

export default function MarqueeStrip() {
  const items = [
    'Industrial Security', 'Residential Protection', 'CCTV Surveillance',
    'Event Security', 'Rapid Response', 'Campus Safety', 'VIP Protection',
    'Logistics Security',
  ];

  return (
    <div className="bg-ink overflow-hidden py-4 border-t-4 border-red">
      <div className="animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-block font-bebas text-sm tracking-[0.25em] px-6 text-white/60 border-r border-white/10 last:border-r-0"
          >
            {item}
            <span className="text-red mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}