'use client';

export default function EmergencyBar() {
  return (
    <div className="bg-red py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        <span className="text-[0.78rem] font-semibold tracking-[0.188rem] uppercase text-white/85">
          Emergency Hotline — Active Now
        </span>
      </div>
      <a href="tel:7020898975" className="font-bebas text-2xl md:text-3xl text-white hover:opacity-80 transition-opacity">
        70208 98975
      </a>
      <div className="text-xs text-white/60">Alternate: 72494 95118</div>
    </div>
  );
}