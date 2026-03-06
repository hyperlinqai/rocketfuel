'use client';

import { motion } from 'framer-motion';
import { Euro, DollarSign, PoundSterling, ShieldCheck } from 'lucide-react';

export function GlobalCompliance() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Mesh - Amber/Orange Theme */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Map/Visual */}
                    <div className="relative order-2 lg:order-1">
                        {/* Abstract Map Background */}
                        <div className="w-full aspect-video bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-sm">
                            {/* Simplified Dots Map */}
                            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            {/* Active Regions */}
                            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                            {/* Currency Tags floating */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-1/4 left-1/4 bg-gray-800 border border-gray-700 shadow-xl px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-gray-200"
                            >
                                <div className="w-4 h-4 bg-green-500/20 rounded-full flex items-center justify-center text-green-400"><DollarSign className="w-3 h-3" /></div> USD
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute top-1/3 right-1/3 bg-gray-800 border border-gray-700 shadow-xl px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-gray-200"
                            >
                                <div className="w-4 h-4 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400"><Euro className="w-3 h-3" /></div> EUR
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                                className="absolute bottom-1/3 left-1/2 bg-gray-800 border border-gray-700 shadow-xl px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-gray-200"
                            >
                                <div className="w-4 h-4 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400"><PoundSterling className="w-3 h-3" /></div> GBP
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/50 border border-orange-700 text-orange-300 text-sm font-medium mb-6">
                            <ShieldCheck className="w-4 h-4 mr-2" /> Global Reach
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Expand Internationally <br />
                            <span className="text-orange-400">Without the Complexity</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            RocketFuel supports both stablecoin and fiat settlements, letting you reach customers and payees in key markets around the world. Built on regulated banking and blockchain infrastructure, our solutions scale with your business.
                        </p>

                        <div className="space-y-4">
                            {[
                                "USD, EUR, and GBP settlements available in supported regions.",
                                "Stablecoin compatibility for instant international reach.",
                                "Licensed, compliant financial network with global coverage.",
                                "Localized currency support and flexible integration."
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                    <p className="text-gray-300 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
