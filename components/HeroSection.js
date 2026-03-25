'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Award, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-white grid md:grid-cols-2">
      {/* Left Panel */}
      <div className="px-6 md:px-12 lg:px-16 pt-32 pb-16 md:pt-40 md:pb-20 flex flex-col justify-center border-r border-border">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-1.5 h-1.5 bg-red rounded-full animate-pulse" />
          <span className="text-[0.7rem] font-semibold tracking-[0.22rem] uppercase text-red">
            Active 24/7 · 365 Days · Emergency Response
          </span>
        </motion.div>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-playfair text-5xl md:text-6xl lg:text-7xl font-black leading-[0.96] text-ink mb-7"
        >
          <motion.span variants={itemVariants} className="block overflow-hidden">
            <span className="block">Trusted</span>
          </motion.span>
          <motion.span variants={itemVariants} className="block overflow-hidden">
            <span className="block">
              Security <span className="text-red">Partner</span>
            </span>
          </motion.span>
          <motion.span variants={itemVariants} className="block overflow-hidden">
            <span className="block">For India.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="text-base leading-relaxed text-ink3 max-w-md mb-11"
        >
          Rudra Security delivers comprehensive protection for industrial, residential & commercial sectors.
          Trained manpower, advanced surveillance — zero breaches on record.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Link href="/contact" className="btn-primary">
            Get Protected →
          </Link>
          <Link href="#services" className="btn-outline">
            Our Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
          className="flex flex-wrap gap-8 pt-8 border-t border-border"
        >
          {[
            { num: '50+', label: 'Personnel' },
            { num: '20+', label: 'Clients' },
            { num: '24/7', label: 'Response' },
            { num: '0', label: 'Breaches' },
          ].map((stat, i) => (
            <div key={i} className="flex-1 min-w-[80px]">
              <div className="font-bebas text-4xl text-ink leading-none">
                {stat.num}
                {stat.num !== '24/7' && <em className="text-red not-italic">+</em>}
              </div>
              <div className="text-[0.72rem] font-medium tracking-[0.125em] uppercase text-ink3 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1a1816] to-[#0d0c0a] flex flex-col">
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red/12 to-transparent" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.4, duration: 1, type: 'spring' }}
            >
              <div className="relative w-36 h-36 md:w-40 md:h-40">
                <div className="absolute inset-0 rounded-full border-2 border-red/20" />
                <div className="absolute inset-4 rounded-full border border-white/5 animate-spin-slow" />
                <div className="absolute inset-8 bg-red/10 rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-red/60" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              className="flex flex-col gap-3 w-full max-w-xs"
            >
              {[
                { icon: Award, text: 'ISO 9001:2015 Certified', sub: 'Quality Management Verified' },
                { icon: Zap, text: '30 Min Emergency Response', sub: 'Guaranteed on-site arrival' },
                { icon: Shield, text: '10,000+ Hours Trained', sub: 'Defence-grade personnel' },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6, borderColor: 'rgba(200,16,46,0.4)' }}
                  className="flex items-center gap-3 p-3.5 bg-white/6 border border-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <badge.icon className="w-6 h-6 text-red" />
                  <div>
                    <div className="text-sm font-semibold text-white">{badge.text}</div>
                    <div className="text-xs text-white/45">{badge.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-white border-t border-border flex items-center justify-between">
          <div>
            <div className="text-[0.68rem] font-semibold tracking-[0.125em] uppercase text-ink3">
              Emergency Hotline
            </div>
            <a href="tel:7020898975" className="font-playfair text-xl md:text-2xl font-bold text-red">
              70208 98975
            </a>
          </div>
          <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm">
            Talk to Us →
          </Link>
        </div>
      </div>
    </section>
  );
}