'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const highlights = [
    "Regulated financial and exchange partners.",
    "Enterprise-grade compliance and security.",
    "One-click checkout for crypto and stablecoins.",
    "Instant global payouts and settlements."
];

export function RequestDemoTrusted() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        Built for Merchants. Designed for Scale.
                    </h2>
                    <p className="text-lg text-secondary-text mb-8">
                        RocketFuel’s infrastructure is trusted by merchants, platforms, and payment partners across the world.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {highlights.map((item, index) => (
                            <div key={index} className="px-4 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 border border-gray-100">
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Globe Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[400px] w-full max-w-4xl mx-auto flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />

                    {/* Simple Globe Representation */}
                    <div className="w-[600px] h-[600px] rounded-full border border-gray-100 flex items-center justify-center relative bg-gray-50/50">
                        <div className="absolute inset-0 rounded-full border border-gray-200 scale-75 opacity-50" />
                        <div className="absolute inset-0 rounded-full border border-gray-200 scale-50 opacity-30" />

                        <Globe className="w-32 h-32 text-gray-200" />

                        {/* Connection Lines/dots */}
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-500 rounded-full animate-ping" />
                        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-amber-500 rounded-full animate-ping delay-700" />
                        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-300" />
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
