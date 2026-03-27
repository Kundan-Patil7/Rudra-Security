'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, ShieldCheck, Clock, Users, Phone } from 'lucide-react';
import { GLSLHills } from '@/components/ui/glsl-hills';

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
    <section id="hero" className="min-h-screen relative overflow-hidden bg-black">
      {/* GLSL Hills Background - Full Page */}
      <div className="absolute inset-0 z-0">
        <GLSLHills 
          speed={0.5}
          cameraZ={125}
          planeSize={256}
        />
      </div>
      
      {/* Gradient Overlay for better text readability and depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-1" />
      
      {/* Content Container with top padding for navbar */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20"
            >
              <div className="w-2 h-2 bg-red rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-white/90">
                24/7 Emergency Response
              </span>
              <ShieldCheck className="w-3 h-3 text-red ml-1" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <motion.div variants={itemVariants} className="overflow-hidden">
                <span className="text-5xl md:text-7xl lg:text-8xl font-black block text-white">
                  Trusted
                </span>
              </motion.div>
              <motion.div variants={itemVariants} className="overflow-hidden mt-2">
                <span className="text-5xl md:text-7xl lg:text-8xl font-black block text-white">
                  Security For
                </span>
              </motion.div>
              <motion.div variants={itemVariants} className="overflow-hidden mt-2">
                <span className="text-5xl md:text-7xl lg:text-8xl font-black block text-red">
                  India.
                </span>
              </motion.div>
            </motion.h1>

            {/* Description with decorative element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="relative mb-12"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red to-red-400 rounded-full" />
              <p className="text-lg md:text-xl leading-relaxed text-white/90 pl-6 max-w-2xl">
                Rudra Security delivers comprehensive protection for industrial, residential & commercial sectors.
                Trained manpower, advanced surveillance — <span className="text-red font-semibold">zero breaches on record.</span>
              </p>
            </motion.div>

            {/* CTA Buttons with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="flex flex-wrap gap-5 mb-16"
            >
              <Link 
                href="/contact" 
                className="group bg-red hover:bg-red/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Get Protected
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                Our Services
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats with better visibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20"
            >
              {[
                { icon: Users, num: '50+', label: 'Personnel', color: 'red', bg: 'bg-red' },
                { icon: Shield, num: '20+', label: 'Clients', color: 'white', bg: 'bg-white/10' },
                { icon: Clock, num: '24/7', label: 'Response', color: 'red', bg: 'bg-red' },
                { icon: ShieldCheck, num: '0', label: 'Breaches', color: 'white', bg: 'bg-white/10' },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-full ${stat.bg} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <stat.icon className={`w-5 h-5 text-${stat.color === 'red' ? 'red-500' : 'white'}`} />
                    </div>
                    <div className="font-bebas text-4xl md:text-5xl text-white font-bold leading-none">
                      {stat.num}
                      {stat.num !== '24/7' && <span className="text-red-500 ml-1 font-bold">+</span>}
                    </div>
                  </div>
                  <div className="text-[0.7rem] font-semibold tracking-[0.125em] uppercase text-white/70 ml-12">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Emergency Hotline - Popup Style */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5, type: "spring", stiffness: 100 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="group relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          
          {/* Main Popup Card */}
          <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase text-white/80">
                    Emergency Hotline
                  </div>
                  <a 
                    href="tel:7020898975" 
                    className="font-playfair text-2xl md:text-3xl font-black text-white hover:text-white/90 transition-colors block"
                  >
                    70208 98975
                  </a>
                  <div className="text-[0.65rem] text-white/70 mt-1">
                    Available 24/7 for emergencies
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-white/20">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  <span>Request Callback</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}