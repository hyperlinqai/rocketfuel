'use client';

import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Code2, Layers, Globe, Zap, CreditCard } from 'lucide-react';
import React, { useRef } from 'react';

// --- Animation Hooks & Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 50, damping: 15 }
  }
};

// --- Sub-components ---

function HeroVisual() {
  // 3D Tilt Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto flex items-center justify-center perspective-1000"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Glass Dashboard Card */}
      <div className="relative w-full h-full bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-6 flex flex-col justify-between overflow-hidden ring-1 ring-white/60">
        {/* Header Mockup */}
        <div className="flex items-center justify-between mb-8 opacity-80">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <div className="h-2 w-20 bg-gray-400/20 rounded-full" />
        </div>

        {/* Central Flow Visualization */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Orbiting Elements */}
          {[
            { Icon: Globe, color: "text-blue-500", bg: "bg-blue-100", delay: 0, pos: "top-0" },
            { Icon: CreditCard, color: "text-purple-500", bg: "bg-purple-100", delay: 2, pos: "bottom-0 right-10" },
            { Icon: Zap, color: "text-yellow-500", bg: "bg-yellow-100", delay: 4, pos: "bottom-0 left-10" },
          ].map(({ Icon, color, bg, delay, pos }, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} p-4 ${bg} rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm z-20`}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            >
              <Icon className={`w-8 h-8 ${color}`} />
            </motion.div>
          ))}

          {/* Central Core */}
          <div className="relative z-10 p-6 bg-white/80 rounded-full shadow-xl border border-white/60 backdrop-blur-md">
            <Layers className="w-12 h-12 text-indigo-600" />
          </div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <path d="M150 150 L 250 80" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="text-blue-400" />
            <path d="M150 150 L 80 250" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="text-purple-400" />
            <path d="M150 150 L 250 250" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="text-yellow-400" />
          </svg>
        </div>

        {/* Footer Stats Mockup */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="h-8 bg-gray-500/5 rounded-lg w-full" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="hero-section px-4">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          <motion.div variants={textVariants} className="hero-badge">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            New: Crypto-to-Fiat Bridge
          </motion.div>

          <motion.h1 variants={textVariants} className="hero-title">
            Payments. <br className="hidden lg:block" />
            <span className="text-gradient-gold">
              Orchestrated.
            </span>
          </motion.h1>

          <motion.p variants={textVariants} className="hero-description">
            Accept stablecoins, automate payouts, and bridge borders. The complete financial operating system for modern business.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/demo">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group btn-primary w-full sm:w-auto"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full sm:w-auto"
              >
                Talk to Sales
              </motion.div>
            </Link>
          </motion.div>

          <motion.div variants={textVariants} className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>MSB Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>SOC2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-green-600" />
              <span>API Ready</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 hidden lg:block"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
