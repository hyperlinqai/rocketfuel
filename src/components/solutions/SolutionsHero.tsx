'use client';

import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Globe, Layers, Gamepad2, Store, Video, Hotel } from 'lucide-react';
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

function SolutionsHeroVisual() {
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
            {/* Ambient Background Glow - Orange/Gold */}
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Glass Dashboard Card */}
            <div className="relative w-full h-full bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-6 flex flex-col justify-between overflow-hidden ring-1 ring-white/60">

                {/* Visual Collage: Industries connected to Blockchain */}
                <div className="flex-1 relative flex items-center justify-center">

                    {/* Orbiting Industry Icons */}
                    {[
                        { Icon: Gamepad2, color: "text-purple-500", bg: "bg-purple-100", delay: 0, pos: "top-10 left-10" },
                        { Icon: Store, color: "text-orange-500", bg: "bg-orange-100", delay: 1, pos: "top-10 right-10" },
                        { Icon: Video, color: "text-rose-500", bg: "bg-rose-100", delay: 2, pos: "bottom-10 right-10" },
                        { Icon: Hotel, color: "text-amber-500", bg: "bg-amber-100", delay: 3, pos: "bottom-10 left-10" },
                    ].map(({ Icon, color, bg, delay, pos }, i) => (
                        <motion.div
                            key={i}
                            className={`absolute ${pos} p-3 ${bg} rounded-xl shadow-lg border border-white/50 backdrop-blur-sm z-20`}
                            animate={{
                                y: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: delay * 0.5,
                            }}
                        >
                            <Icon className={`w-6 h-6 ${color}`} />
                        </motion.div>
                    ))}

                    {/* Central Blockchain Node */}
                    <div className="relative z-10 p-8 bg-white/90 rounded-full shadow-2xl border border-white/80 backdrop-blur-md">
                        {/* Changed to Orange/Brand color */}
                        <Layers className="w-16 h-16 text-orange-600" />
                    </div>

                    {/* Blockchain Web Overlay (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                        {/* Dynamic lines connecting to center */}
                        <motion.path d="M120 120 L 250 250" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="text-orange-400" />
                        <path d="M380 120 L 250 250" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="text-purple-400" />
                        <path d="M380 380 L 250 250" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="text-rose-400" />
                        <path d="M120 380 L 250 250" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="text-amber-400" />

                        {/* Faint network grid */}
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" className="text-gray-300" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>

                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Unified Crypto Infrastructure</span>
                </div>
            </div>
        </motion.div>
    );
}

export function SolutionsHero() {
    return (
        <section className="hero-section px-4">
            {/* Background Gradients - Gold/Orange/Amber */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Copy */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
                >
                    {/* Badge: Orange/Gold */}
                    <motion.div variants={textVariants} className="hero-badge">
                        <Globe className="w-4 h-4 mr-2" />
                        Global Blockchain Solutions
                    </motion.div>

                    <motion.h1 variants={textVariants} className="hero-title">
                        Scalable Blockchain Solutions for <br className="hidden lg:block" />
                        {/* Gradient Text: Orange to Yellow/Amber */}
                        <span className="text-gradient-gold">
                            Modern Commerce
                        </span>
                    </motion.h1>

                    <motion.p variants={textVariants} className="hero-description">
                        From payments to payouts, RocketFuel helps businesses grow globally with secure, compliant, and instant blockchain-based financial solutions. Accept crypto, send stablecoin payouts, and reward loyalty — all from one platform.
                    </motion.p>

                    <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/demo">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                // Changed to bg-button-action (orange)
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
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 hidden lg:block"
                >
                    <SolutionsHeroVisual />
                </motion.div>
            </div>
        </section>
    );
}
