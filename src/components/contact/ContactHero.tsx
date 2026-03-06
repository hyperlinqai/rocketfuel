'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function ContactHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
                        <MessageSquare className="w-4 h-4" />
                        <span>Contact Us</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-primary-text mb-6 leading-tight">
                        Let’s Talk <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                            Payments
                        </span>
                    </h1>

                    <p className="text-xl text-secondary-text mb-8 max-w-lg mx-auto lg:mx-0">
                        Whether you’re a merchant, partner, or enterprise platform — RocketFuel is ready to help you modernize payments with crypto, stablecoins, and fiat.
                    </p>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    <div className="relative w-full aspect-square max-w-md">
                        {/* Abstract Network Illustration */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse" />

                        <div className="relative z-10 w-full h-full bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl shadow-xl flex items-center justify-center p-8 overflow-hidden">
                            {/* Simplified Network Nodes */}
                            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-8 p-12 opacity-50">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="flex items-center justify-center">
                                        <div className="w-3 h-3 bg-orange-200 rounded-full" />
                                    </div>
                                ))}
                            </div>

                            {/* Central Node */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="relative z-20 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30"
                            >
                                <div className="text-white font-bold text-2xl">RF</div>
                            </motion.div>

                            {/* Connecting Lines (Decorative) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#fdba74" strokeWidth="2" strokeOpacity="0.5" />
                                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#fdba74" strokeWidth="2" strokeOpacity="0.5" />
                                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#fdba74" strokeWidth="2" strokeOpacity="0.5" />
                                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#fdba74" strokeWidth="2" strokeOpacity="0.5" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
