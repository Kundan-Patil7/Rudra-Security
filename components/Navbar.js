'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services', isHash: true },
  { href: '/#about-strip', label: 'About', isHash: true },
  { href: '/leadership', label: 'Leadership' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

  const isActiveLink = (href) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'h-[60px] bg-white/96 backdrop-blur-xl shadow-[0_1px_0_#E2E0DC]'
            : 'h-[76px] bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-10  flex items-center justify-center rounded transition-transform duration-300 group-hover:scale-105 overflow-hidden">
              <Image src="/logos/logo.png" alt="Rudra Security" width={50} height={50} className="object-contain" />
            </div>
            <div className="font-playfair text-lg text-white font-bold text-ink leading-tight">
              Rudra Security
              <small className="block font-dm text-[0.62rem] font-normal tracking-[0.25em] uppercase text-ink3">
                Est. 2018 · ISO Certified
              </small>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <li key={link.label}>
                  {link.isHash ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleHashLink(e, link.href)}
                      className={`text-[0.82rem] font-medium tracking-[0.094rem] uppercase relative pb-0.5 transition-colors duration-250 ${
                        isActive ? 'text-red' : 'text-ink2 hover:text-red'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute bottom-0 left-0 h-[1.5px] bg-red transition-all duration-350 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-[0.82rem] font-medium tracking-[0.094rem] uppercase relative pb-0.5 transition-colors duration-250 ${
                        isActive ? 'text-red' : 'text-ink2 hover:text-red'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute bottom-0 left-0 h-[1.5px] bg-red transition-all duration-350 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-7 py-2.5 bg-red text-white text-[0.8rem] font-semibold tracking-[0.125em] uppercase transition-all duration-300 hover:bg-red2 hover:-translate-y-0.5"
          >
            Contact Us →
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-ink" /> : <Menu className="w-6 h-6 text-ink" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.18, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.isHash ? (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      handleHashLink(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="font-playfair text-3xl md:text-4xl font-bold text-ink hover:text-red transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-playfair text-3xl md:text-4xl font-bold text-ink hover:text-red transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <a href="tel:7020898975" className="flex items-center gap-2 text-red text-xl font-semibold">
                <span className="text-2xl">📞</span>
                70208 98975
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}