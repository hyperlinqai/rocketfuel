'use client';

import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, BarChart3, Globe, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
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
      <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Glass Grid of Cards */}
      <div className="grid grid-cols-2 gap-4 w-full h-full p-4 transform-style-3d">
        {[
          { title: "Growth", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-100", val: "+127%" },
          { title: "Global", icon: Globe, color: "text-amber-600", bg: "bg-amber-100", val: "190+" },
          { title: "Speed", icon: Zap, color: "text-yellow-600", bg: "bg-yellow-100", val: "< 1s" },
          { title: "Reliability", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100", val: "99.9%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center gap-2 transform transition-transform hover:scale-105"
            style={{ translateZ: "20px" }}
          >
            <div className={`p-3 rounded-full ${item.bg}`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <h3 className="text-gray-600 font-medium">{item.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{item.val}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function CaseStudiesHero() {
  return (
    <section className="hero-section px-4 pt-32 pb-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          <motion.div variants={textVariants} className="hero-badge mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Success Stories
          </motion.div>

          <motion.h1 variants={textVariants} className="text-5xl lg:text-6xl font-bold tracking-tight text-primary-text mb-6">
            Real Businesses. <br />
            <span className="text-gradient-gold">
              Real Results.
            </span>
          </motion.h1>

          <motion.p variants={textVariants} className="text-xl text-secondary-text mb-8 max-w-lg">
            Discover how companies use RocketFuel to simplify global payments, accelerate growth, and unlock new revenue streams with crypto and stablecoin technology.
          </motion.p>
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
