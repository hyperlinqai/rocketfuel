'use client';

import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

export function ContactGlobal() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                        <Globe2 className="w-4 h-4" />
                        <span>Worldwide Coverage</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        A Global Team Supporting Global Commerce
                    </h2>
                    <p className="text-lg text-secondary-text max-w-3xl mx-auto">
                        RocketFuel operates worldwide with teams across North America, Europe, and Asia-Pacific. We’re here to support merchants and partners wherever they do business.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        We’re headquartered in the U.S. and work with regulated partners globally to enable secure, cross-border payment solutions.
                    </p>
                </motion.div>

                {/* Abstract World Map Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto aspect-[2/1] bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden flex items-center justify-center"
                >
                    {/* Simple Map Placeholder */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain" />

                    {/* Location Markers */}
                    <div className="relative z-10 w-full h-full">
                        {/* Marker: North America */}
                        <div className="absolute top-[35%] left-[25%] flex flex-col items-center">
                            <div className="w-4 h-4 bg-orange-500 rounded-full ring-4 ring-orange-100 animate-pulse" />
                            <span className="mt-2 text-xs font-bold text-gray-700 bg-white px-2 py-0.5 rounded shadow-sm">HQ (USA)</span>
                        </div>

                        {/* Marker: Europe */}
                        <div className="absolute top-[30%] left-[52%] flex flex-col items-center">
                            <div className="w-3 h-3 bg-amber-500 rounded-full ring-4 ring-amber-100" />
                        </div>

                        {/* Marker: Asia */}
                        <div className="absolute top-[40%] left-[75%] flex flex-col items-center">
                            <div className="w-3 h-3 bg-amber-500 rounded-full ring-4 ring-amber-100" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
