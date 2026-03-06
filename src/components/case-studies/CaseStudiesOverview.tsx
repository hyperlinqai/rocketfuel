'use client';

import { CheckCircle2, Globe, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
    {
        icon: TrendingUp,
        title: "Instant Settlement",
        description: "Reduce settlement times from days to minutes with automated crypto rails."
    },
    {
        icon: DollarSign,
        title: "Eliminate Fees",
        description: "Save on fees by eliminating costly intermediaries and banking delays."
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Accept and send payments in crypto, stablecoins, or fiat anywhere in the world."
    },
    {
        icon: CheckCircle2,
        title: "Compliant & Secure",
        description: "Expand to new markets with fully compliant infrastructure and security."
    }
];

export function CaseStudiesOverview() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-primary-text mb-6"
                        >
                            Powering Growth Across Industries
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-secondary-text mb-12"
                        >
                            From e-commerce and marketplaces to gaming, travel, and fintech, RocketFuel helps businesses of all sizes streamline payments, automate payouts, and scale globally.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual (Map Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] bg-secondary-bg rounded-3xl overflow-hidden flex items-center justify-center"
                    >
                        {/* Abstract Map Visualization */}
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 50% 50%, #ea580c 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}
                        />

                        {/* Connecting Lines Animation */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <motion.path
                                d="M100,300 C200,100 400,100 500,300"
                                fill="none"
                                stroke="url(#gradient1)"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.5 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M150,400 C250,200 450,200 550,400"
                                fill="none"
                                stroke="url(#gradient2)"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.5 }}
                                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                            />
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ea580c" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#ea580c" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#eab308" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 max-w-sm">
                            <Globe className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 mb-2">Global Connectivity</h3>
                            <p className="text-gray-600">Connecting merchants and customers across 190+ countries with instant settlement.</p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
