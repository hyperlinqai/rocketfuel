'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const highlights = [
    "Borderless payments in stablecoin, crypto, and fiat.",
    "Regulated financial and exchange partners.",
    "Real-time reporting and settlement tracking.",
    "Global support and integration assistance."
];

export function TalkToSalesTrusted() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        Built for Growth. Trusted Worldwide.
                    </h2>
                    <p className="text-lg text-secondary-text mb-8">
                        RocketFuel’s payment solutions are used by businesses around the world to simplify global commerce, settle faster, and stay compliant.
                    </p>

                    <div className="grid sm:grid-cols-2 max-w-4xl mx-auto gap-4">
                        {highlights.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-orange-50/50 rounded-xl border border-orange-50 text-left">
                                <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                                <span className="text-sm font-medium text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Global Network Map Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[450px] bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center p-8 shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain invert" />

                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
                        {[
                            { country: "United States", active: true },
                            { country: "United Kingdom", active: true },
                            { country: "Germany", active: true },
                            { country: "Singapore", active: true },
                        ].map((loc, i) => (
                            <div key={i} className="bg-gray-800/80 backdrop-blur border border-gray-700 p-4 rounded-xl flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-orange-400" />
                                <div>
                                    <div className="text-white text-sm font-bold">{loc.country}</div>
                                    <div className="text-green-400 text-[10px] font-medium uppercase tracking-wide">Live with RocketFuel</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-8 text-gray-400 text-sm">
                        * Representational map of operational regions
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
