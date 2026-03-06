'use client';

import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Lightbulb, GraduationCap } from 'lucide-react';

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

function HeroVisual() {
    return (
        <div className="relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
            >
                <div className="relative w-64 h-80 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl shadow-2xl skew-y-6 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                    <BookOpen className="w-32 h-32 text-white opacity-90" />

                    {/* Floating Icons around book */}
                    <motion.div
                        animate={{ x: [-20, 20, -20], y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                        className="absolute -top-10 -right-10 p-4 bg-white rounded-2xl shadow-lg"
                    >
                        <Sparkles className="w-8 h-8 text-amber-500" />
                    </motion.div>

                    <motion.div
                        animate={{ x: [10, -10, 10], y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                        className="absolute -bottom-5 -left-8 p-4 bg-white rounded-2xl shadow-lg"
                    >
                        <Lightbulb className="w-8 h-8 text-orange-500" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [-15, 5, -15], rotate: [0, 5, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, delay: 0.2 }}
                        className="absolute top-1/2 -right-16 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-orange-100"
                    >
                        <div className="flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-gray-700" />
                            <span className="text-xs font-bold text-gray-900">Expert Insights</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export function GuidesHero() {
    return (
        <section className="hero-section px-4 pt-32 pb-20 relative overflow-hidden text-center lg:text-left">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Copy */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center lg:items-start z-10"
                >
                    <motion.div variants={textVariants} className="hero-badge mb-6">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        Learning Hub
                    </motion.div>

                    <motion.h1 variants={textVariants} className="text-5xl lg:text-6xl font-bold tracking-tight text-primary-text mb-6 leading-tight">
                        Your Guide to the <br />
                        <span className="text-gradient-gold">
                            Future of Payments
                        </span>
                    </motion.h1>

                    <motion.p variants={textVariants} className="text-xl text-secondary-text mb-8 max-w-lg">
                        Explore RocketFuel’s library of practical resources and expert insights on crypto payments, stablecoins, compliance, and global commerce.
                    </motion.p>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 hidden lg:flex justify-center"
                >
                    <HeroVisual />
                </motion.div>
            </div>
        </section>
    );
}
