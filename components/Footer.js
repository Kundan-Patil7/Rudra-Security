'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Building2 } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services', isHash: true },
  { href: '/#about-strip', label: 'About Us', isHash: true },
  { href: '/leadership', label: 'Leadership' },
  { href: '/contact', label: 'Contact' },
];

const servicesLinks = [
  { href: '#', label: 'Industrial Security' },
  { href: '#', label: 'Housing Societies' },
  { href: '#', label: 'CCTV Surveillance' },
  { href: '#', label: 'Event Security' },
  { href: '#', label: 'Logistics & Pharma' },
];

const handleHashLink = (e, href) => {
  if (href.startsWith('/#')) {
    e.preventDefault();
    const id = href.replace('/#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

export default function Footer() {
  return (
    <footer className="bg-off border-t border-border pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logos/logo.png" alt="Rudra Security" width={44} height={44} className="object-contain" />
              <div className="font-playfair text-lg font-bold text-ink leading-tight">
                Rudra Security
                <small className="block font-dm text-[0.62rem] font-normal tracking-[0.25em] uppercase text-ink3">
                  Est. 2018 · ISO Certified
                </small>
              </div>
            </Link>
            <p className="text-sm text-ink3 leading-relaxed max-w-xs">
              Vigilance. Integrity. Protection. Trusted security partner for industrial, residential & commercial sectors across India.
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 border border-border2 text-[0.68rem] font-semibold tracking-[0.125em] uppercase text-gold">
              ✓ ISO 9001:2015 Certified
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[0.68rem] font-bold tracking-[0.188rem] uppercase text-ink mb-5 pb-3 border-b border-border">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isHash ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleHashLink(e, link.href)}
                      className="text-sm text-ink3 hover:text-red hover:pl-1 transition-all"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-ink3 hover:text-red hover:pl-1 transition-all">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.68rem] font-bold tracking-[0.188rem] uppercase text-ink mb-5 pb-3 border-b border-border">
              Services
            </h4>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ink3 hover:text-red hover:pl-1 transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.68rem] font-bold tracking-[0.188rem] uppercase text-ink mb-5 pb-3 border-b border-border">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm text-ink3">
                <Phone className="w-4 h-4 text-red shrink-0" />
                <div>
                  <a href="tel:7020898975" className="block hover:text-red">70208 98975 (24×7)</a>
                  <a href="tel:7249495118" className="block hover:text-red">72494 95118 (Alt)</a>
                </div>
              </div>
              <div className="flex gap-3 text-sm text-ink3">
                <Mail className="w-4 h-4 text-red shrink-0" />
                <a href="mailto:blackhawkforce001@gmail.com" className="hover:text-red">
                  blackhawkforce001@gmail.com
                </a>
              </div>
              <div className="flex gap-3 text-sm text-ink3">
                <MapPin className="w-4 h-4 text-red shrink-0" />
                <span>Ground Floor, Bhagwati Banquet, Sinner, Nashik</span>
              </div>
              <div className="flex gap-3 text-sm text-ink3">
                <Building2 className="w-4 h-4 text-red shrink-0" />
                <span>Mumbai | Pune | Nashik</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink3">
          <span>© 2025 Rudra Security Pvt Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/leadership" className="hover:text-red transition-colors">Leadership</Link>
            <Link href="/contact" className="hover:text-red transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}