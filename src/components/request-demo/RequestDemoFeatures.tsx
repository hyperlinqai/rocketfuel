'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
    "Live walkthrough of the RocketFuel dashboard.",
    "Overview of pay-ins, payouts, and invoicing tools.",
    "Review of compliance and settlement workflows.",
    "Integration options: widget, API, or redirect.",
    "Q&A session with a RocketFuel payment expert."
];

export function RequestDemoFeatures() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
                        Explore Everything RocketFuel Can Do
                    </h2>
                    <p className="text-lg text-secondary-text mb-8">
                        Your personalized demo provides a deep dive into our platform, tailored to your specific business needs.
                    </p>

                    <ul className="space-y-4 mb-8">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 text-sm text-orange-800">
                        <strong>Note:</strong> Demos can be tailored for merchants, partners, or developers — depending on your goals.
                    </div>
                </motion.div>

                {/* Right Column: Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 aspect-video ring-1 ring-black/5"
                >
                    {/* Mock Dashboard UI */}
                    <div className="absolute inset-0 flex flex-col">
                        <div className="h-12 border-b border-gray-200 bg-white flex items-center px-4 justify-between">
                            <div className="flex gap-4">
                                <div className="w-20 h-4 bg-gray-200 rounded"></div>
                                <div className="w-16 h-4 bg-gray-100 rounded"></div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        </div>
                        <div className="flex-1 p-6 flex gap-6">
                            <div className="w-16 hidden sm:flex flex-col gap-4 border-r border-gray-200 pr-4">
                                {[1, 2, 3, 4].map(i => <div key={i} className="w-full aspect-square bg-gray-100 rounded-lg"></div>)}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-end mb-6">
                                    <div className="space-y-2">
                                        <div className="w-32 h-4 bg-gray-100 rounded"></div>
                                        <div className="w-48 h-8 bg-gray-200 rounded"></div>
                                    </div>
                                    <div className="w-24 h-10 bg-orange-500 rounded-lg opacity-20"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="h-24 bg-white rounded-xl border border-gray-200 shadow-sm p-4"></div>
                                    <div className="h-24 bg-white rounded-xl border border-gray-200 shadow-sm p-4"></div>
                                </div>
                                <div className="h-32 bg-white rounded-xl border border-gray-200 shadow-sm p-4"></div>
                            </div>
                        </div>
                    </div>

                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
}
